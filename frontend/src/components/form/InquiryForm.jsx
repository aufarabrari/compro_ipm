import { useState } from "react";
import styles from "./InquiryForm.module.css";
const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL

export default function InquiryForm() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});

	const [errors, setErrors] = useState ({});

	const [status, setStatus] = useState("idle");

	// Regex Email
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

	// Field Check
	const isFormEmpty = !formData.name && !formData.email && !formData.subject && !formData.message;

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });

		if (errors[name]) {
			setErrors({...errors, [name]: ""});
		}
	};

	const validateForm = () => {
        let newErrors = {};
        let isValid = true;

        // Validasi Name
        if (!formData.name.trim()) {
            newErrors.name = "Please fill required field";
            isValid = false;
        }

        // Validasi Email
        if (!formData.email.trim()) {
            newErrors.email = "Please fill required field";
            isValid = false;
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = "Invalid email format";
            isValid = false;
        }

        // Validasi Subject
        if (!formData.subject.trim()) {
            newErrors.subject = "Please fill required field";
            isValid = false;
        }

        // Validasi Message
        if (!formData.message.trim()) {
            newErrors.message = "Please fill required field";
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!validateForm()) {
			return
		}

		setStatus("loading");

		try {
			const response = await fetch(NEXT_PUBLIC_API_URL, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			});

			if (!response.ok) throw new Error("Failed to submit inquiry");

			setStatus("success");
			// Form & error reset
			setFormData({ name: "", email: "", subject: "", message: "" });
			setErrors({});

			setTimeout(() => setStatus("idle"), 3000);
		} catch (error) {
			console.error("Error submitting inquiry:", error);
			setStatus("error");
		}
	};

	return (
		<div className={styles.container}>
			<h3 className={styles.title}>Send Us a Message</h3>

			<form onSubmit={handleSubmit} noValidate>
				{/* Name */}
				<div className={styles.inputGroup}>
					<label className={styles.label}>Full Name</label>
					<input
						type="text"
						placeholder="Your Name"
						name="name"
						value={formData.name}
						onChange={handleChange}
						className={styles.input}
					/>
				</div>
				{/* Error message if any */}
				{errors.name && <span className={styles.errorMessage}>{errors.name}</span>}

				{/* EMAIL */}
				<div className={styles.inputGroup}>
					<label className={styles.label}>Email Address</label>
					<input
						type="email"
						placeholder="john@example.com"
						name="email"
						value={formData.email}
						onChange={handleChange}
						className={styles.input}
					/>
				</div>
				{/* Error message if any */}
				{errors.email && <span className={styles.errorMessage}>{errors.email}</span>}

				{/* SUBJECT */}
				<div className={styles.inputGroup}>
					<label className={styles.label}>Subject</label>
					<input
						type="text"
						placeholder="Please enter a subject"
						name="subject"
						value={formData.subject}
						onChange={handleChange}
						className={styles.input}
					/>
				</div>
				{/* Error message if any */}
				{errors.subject && <span className={styles.errorMessage}>{errors.subject}</span>}

				{/* MESSAGE */}
				<div className={styles.inputGroup}>
					<label htmlFor="message" className={styles.label}>
						Message
					</label>
					<textarea
						name="message"
						placeholder="Type your message here..."
						value={formData.message}
						onChange={handleChange}
						rows="4"
						className={styles.textarea}
					></textarea>
				</div>
				{/* Error message if any */}
				{errors.message && <span className={styles.errorMessage}>{errors.message}</span>}

				{status === "success" && (
					<p className={styles.success}>
						✅ Inquiry sent! Please check your email.
					</p>
				)}
				{status === "error" && (
					<p className={styles.error}>❌ Failed to send.</p>
				)}

				<button
					type="submit"
					className={styles.submitBtn}
					disabled={status === "loading" || isFormEmpty}
				>
					{status === "loading" ? "Sending..." : "Submit Inquiry"}
				</button>
			</form>
		</div>
	);
}
