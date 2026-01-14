const database = require("../../database");
const {
	sendInquiryToAdmin,
	sendAutoReplyToUser,
} = require("../mailController");

module.exports = {
	addInquiry: async (req, res) => {
		const connection = await database.getConnection();

		try {
			const { name, email, subject, message } = req.body;

			// Validation
			if (!name || !email || !subject || !message) {
				return res.status(400).json({
					error: "Name, Email, Subject, and Message are required",
				});
			}
			
			// Transaction
			await connection.beginTransaction();

			// Insert DB
			const query =
				"INSERT into inquiry (name, email, subject, message) VALUES (?, ?, ?, ?)";

			await connection.query(query, [name, email, subject, message]);

			// Send Email
			await sendInquiryToAdmin({ name, email, subject, message });
			await sendAutoReplyToUser({ name, email });

			// If success commit
			await connection.commit();

			return res.status(201).json({
				message: "Inquiry had been sent",
			});
		} catch (err) {
			// Rollback if ERROR
			await connection.rollback();
			console.error("Add inquiry error:", err);

			return res.status(500).json({
				error: "Failed to submit inquiry",
			});
		} finally {
			connection.release();
		}
	},
};
