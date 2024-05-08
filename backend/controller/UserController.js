import User from "../model/User.js";

export const createUser = async (req, res) => {
    try {
        const newUser = new User(req.body);
        const savedUser = await newUser.save();

        res.status(200).json({
            success: true,
            message: "User successfully created",
            data: savedUser,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Failed to create User",
            error: err.message,
        });
    }
};

//update User
export const updateUser = async (req, res) => {
    const { id } = req.params;
    try {
        const updatedUser = await User.findByIdAndUpdate(id, req.body, {
            new: true,
        });
        if (!updatedUser) {
            return res
                .status(404)
                .json({ success: false, message: "User not found" });
        }
        res.status(200).json({
            success: true,
            message: "User successfully updated",
            data: updatedUser,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Failed to update User",
            error: err.message,
        });
    }
};

//delete User
export const deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedUser = await User.findByIdAndDelete(id);
        if (!deletedUser) {
            return res
                .status(404)
                .json({ success: false, message: "User not found" });
        }
        res.status(200).json({
            success: true,
            message: "User successfully deleted",
            data: deletedUser,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Failed to delete User",
            error: err.message,
        });
    }
};

//getSingle User
export const getSingleUser = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findById(id);
        if (!user) {
            return res
                .status(404)
                .json({ success: false, message: "User not found" });
        }
        res.status(200).json({ success: true, data: user });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch User",
            error: err.message,
        });
    }
};

//getALL User
export const getAllUser = async (req, res) => {
    try {
        const users = await User.find({});
        res.status(200).json({
            success: true,
            message: "successful",
            data: users,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch Users",
            error: err.message,
        });
    }
};
