import { Email } from "../models/emailmodel.js";

export const createEmail = async (req, res) => {
    try {
        const userId = req.id;
        const { to, subject, message } = req.body;
        
        // Check if any of the required fields are missing
        if (!to || !subject || !message) {
            return res.status(400).json({ message: "All fields are required", success: false });
        }

        const email = await Email.create({
            to,
            subject,
            message,
            userId
        });

        return res.status(201).json({
            email,
            success: true
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error", success: false });
    }
};

export const deleteEmail = async (req, res) => {
    try {
        const emailId = req.params.id;

        if (!emailId) {
            return res.status(400).json({ message: "Email id is required" });
        }

        const email = await Email.findOneAndDelete({ _id: emailId });

        if (!email) {
            return res.status(404).json({ message: "Email not found" });
        }

        return res.status(200).json({ message: "Email deleted successfully" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error" });
    }
};


export const getAllEmailsById = async (req, res) => {
    try {
        const userId = req.id;

        // Assuming you have a proper method in your Email model to fetch emails by userId
        const emails = await Email.find({ userId });

        return res.status(200).json({ emails });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error" });
    }
};
