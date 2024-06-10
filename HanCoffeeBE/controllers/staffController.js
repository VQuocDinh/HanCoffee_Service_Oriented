import userModel from '../models/userModel.js';


// List all staff
const listStaff = async (req, res) => {
    try {
        const staffList = await userModel.find({});
        res.json({ success: true, data: staffList });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Failed to fetch staff', error });
    }
};

export { listStaff };