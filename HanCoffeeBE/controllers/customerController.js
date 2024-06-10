
import User from '../models/userModel.js';


// List all staff
const listCustomer = async (req, res) => {
    try {
        const customerList = await User.find({});
        res.json({ success: true, data: customerList });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Failed to fetch customer', error });
    }
};

export { listCustomer };
