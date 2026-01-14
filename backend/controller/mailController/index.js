const transporter = require("../../helper/nodemailer");
const { SMTP_USER, ADMIN_EMAIL } = process.env;
const logoUrl = "https://i.imgur.com/WhdbFIi.png";
const companyName = "PT. INLED PUTRA MANDIRI";
const primaryColor = "#0f172a";

// HTML CONTENT WRAPPER
const createEmailTemplate = (content) => {
	return `
	<!DOCTYPE html>
	<html>
		<head>
			<meta charset="utf-8">
			<meta name="viewport" content="width=device-width, initial-scale=1.0">
			<title>${companyName}</title>
		</head>
		<body style="margin: 0; padding: 0; background-color: #f1f5f9; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">

			<table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #f1f5f9; padding: 40px 0;">
            <tr>
                <td align="center">
                    
                    <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="600" style="background-color: #ffffff; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.05); overflow: hidden;">
                        
                        <tr>
                            <td align="center" style="padding: 40px 0 20px 0; background-color: #ffffff; border-bottom: 3px solid ${primaryColor};">
                                <img src="${logoUrl}" alt="${companyName}" width="150" style="display: block; border: 0;" />
                            </td>
                        </tr>

                        <tr>
                            <td style="padding: 40px 40px 20px 40px; color: #334155; font-size: 16px; line-height: 1.6;">
                                ${content}
                            </td>
                        </tr>

                        <tr>
                            <td align="center" style="padding: 30px; background-color: #f8fafc; border-top: 1px solid #e2e8f0; color: #94a3b8; font-size: 12px;">
                                <p style="margin: 0 0 10px 0;">&copy; ${new Date().getFullYear()} ${companyName}. All rights reserved.</p>
                                <p style="margin: 0;">Jakarta, Indonesia</p>
                            </td>
                        </tr>

                    </table>
                    </td>
            </tr>
        </table>
        
    </body>
	</html>
	`
}

module.exports = {
	sendInquiryToAdmin: async ({ name, email, subject, message }) => {
		const adminContent = `
			<h2 style="color: ${primaryColor}; margin-top: 0;">New Business Inquiry</h2>
            <p style="margin-bottom: 20px;">You have received a new message from the website contact form.</p>
            
            <table width="100%" cellpadding="10" cellspacing="0" style="background-color: #f8fafc; border-radius: 6px; margin-bottom: 20px; border: 1px solid #e2e8f0;">
                <tr>
                    <td width="30%" style="font-weight: bold; color: ${primaryColor};">Subject:</td>
                    <td>${subject}</td>
                </tr>
                <tr>
                    <td style="font-weight: bold; color: ${primaryColor};">From:</td>
                    <td>${name} (${email})</td>
                </tr>
                <tr>
                    <td style="font-weight: bold; color: ${primaryColor}; vertical-align: top;">Message:</td>
                    <td style="line-height: 1.6;">${message}</td>
                </tr>
            </table>

            <p style="font-size: 14px; color: #64748b;">*Please reply directly to this email to contact the client.*</p>
        `;

		return transporter.sendMail({
			from: SMTP_USER,
			to: ADMIN_EMAIL,
			subject: `New Inquiry: ${subject} #${Date.now()}`,
			html: createEmailTemplate(adminContent),
		});
	},

	sendAutoReplyToUser: async ({ name, email }) => {
		const userContent = `<h2 style="color: ${primaryColor}; margin-top: 0;">Thank You for Reaching Out!</h2>
            <p>Hello <strong>${name}</strong>,</p>
            <p>We have received your inquiry. Thank you for contacting <strong>${companyName}</strong>.</p>
            <p>Our team is currently reviewing your message and will get back to you within 24 hours.</p>
            
            <div style="margin: 30px 0; padding: 20px; background-color: #f0f9ff; border-left: 4px solid ${primaryColor}; border-radius: 4px;">
                <p style="margin: 0; color: #0c4a6e; font-style: italic;">
                    "The essence of strategy is choosing what to do."
                </p>
            </div>

            <p>Best Regards,<br/><strong>${companyName}</strong></p>
			`;

		return transporter.sendMail({
			from: SMTP_USER,
			to: email,
			subject: `Thank you for your inquiry - PT. IPM #${Date.now()}`,
			html: createEmailTemplate(userContent),
		});
	},
};
