
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import User from '../models/userModel.js';


const getUsers = async (req, res) => {
    const users = await User.find({});
    res.json({ success: true, data: users });
};


const updateUserRole = async (req, res) => {
    const { id } = req.params;
    const { role } = req.body;

    const user = await User.findById(id);

    if (user) {
        user.role = role;
        await user.save();
        res.json({ success: true, message: 'Customer role updated successfully' });
    } else {
        res.status(404);
        throw new Error('Customer not found');
    }
};

const generateToken = (id) => {
    return jwt.sign({ id }, 'your_jwt_secret', {
        expiresIn: '30d',
    });
};

const registerUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Kiểm tra xem người dùng đã tồn tại trong cơ sở dữ liệu chưa
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Mã hóa mật khẩu trước khi lưu vào cơ sở dữ liệu
        const hashedPassword = await bcrypt.hash(password, 10);

        // Tạo người dùng mới với mật khẩu đã được mã hóa
        const user = await User.create({ email, password: hashedPassword });

        // Tạo token cho người dùng mới đăng ký
        const token = generateToken(user._id);

        // Trả về thông tin người dùng và token
        res.status(201).json({
            _id: user._id,
            email: user.email,
            token: token,
        });
    } catch (error) {
        console.error(error); // Ghi log lỗi để debug
        res.status(400).json({ message: 'Invalid user data' });
    }
};

const authUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user && bcrypt.compareSync(password, user.password)) {
      // **Check if user object exists and role is defined and valid**
      if (user && user.role !== undefined && (user.role === 0 || user.role === 1 || user.role === 2)) {
        const token = jwt.sign({ id: user._id, role: user.role }, 'your_jwt_secret', { expiresIn: '1h' });
        res.json({ token, user: { id: user._id, email: user.email, role: user.role } });
      } else {
        console.error('User role is undefined or invalid');
        res.status(400).json({ message: 'Invalid user role' });
      }
    } else {
      res.status(401).json({ message: 'Invalid email or password' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};
  

export { getUsers, updateUserRole, registerUser, authUser };