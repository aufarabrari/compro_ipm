import Head from "next/head";
import styles from "@/styles/Services.module.css";
import InquiryForm from "@/components/form/InquiryForm";

export default function Services() {
	const servicesData = [
		{
			title: "Legal Advisory",
			icon: "⚖️",
			description:
				"Comprehensive legal assistance ensuring full compliance with Indonesian regulations.",
			points: [
				"Corporate Establishment (PT, PMA, Representative Office)",
				"Business Licensing (NIB, OSS System)",
				"Contract Drafting & Review",
				"Legal Due Diligence",
				"Manpower & Employment Law",
			],
		},
		{
			title: "Tax Consulting",
			icon: "📊",
			description:
				"Strategic tax planning to optimize efficiency and minimize risks.",
			points: [
				"Monthly & Annual Tax Compliance (SPT)",
				"Tax Planning & Advisory",
				"Tax Dispute Resolution & Appeal",
				"Transfer Pricing Documentation",
				"VAT & Withholding Tax Management",
			],
		},
		{
			title: "Finance & Accounting",
			icon: "📈",
			description:
				"Accurate financial reporting to support your business decisions.",
			points: [
				"Bookkeeping & Financial Statement Preparation",
				"Financial Audit Assistance",
				"Payroll Management",
				"Internal Control System Setup",
				"Asset Valuation & Management",
			],
		},
		{
			title: "Oil & Gas Specialized",
			icon: "⛽",
			description:
				"Expert guidance specifically tailored for the energy sector ecosystem.",
			points: [
				"PSC (Production Sharing Contract) Advisory",
				"Cost Recovery & Gross Split Calculation",
				"SKK Migas Compliance & Reporting",
				"KSO (Kerja Sama Operasi) Structuring",
				"Procurement & Supply Chain Legalities",
			],
		},
	];

	return (
		<>
			<Head>
				<title>Our Services - PT. INLED PUTRA MANDIRI</title>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/IPM-logo-square.png" />
			</Head>

			{/* 1. HERO SECTION */}
			<section className={styles.hero}>
				<div>
					<h1 className={styles.heroTitle}>Our Expertise</h1>
					<p style={{ fontSize: "1.2rem", opacity: 0.9 }}>
						Integrated Solutions for Your Business Growth
					</p>
				</div>
			</section>

			{/* 2. INTRO SECTION */}
			<section className={styles.introSection}>
				<h2 className={styles.introTitle}>Comprehensive Consulting Services</h2>
				<p style={{ fontSize: "1.1rem", lineHeight: "1.8", color: "#475569" }}>
					We combine industry knowledge with regulatory expertise to provide
					solutions that are not only compliant but also commercially viable for
					your business in Indonesia.
				</p>
			</section>

			{/* 3. SERVICES GRID (Looping) */}
			<section className={styles.container}>
				<div className={styles.grid}>
					{servicesData.map((item, index) => (
						<div key={index} className={styles.card}>
							<span className={styles.icon}>{item.icon}</span>
							<h3 className={styles.cardTitle}>{item.title}</h3>
							<p className={styles.cardDesc}>{item.description}</p>

							{/* List Poin-Poin Compro */}
							<ul className={styles.serviceList}>
								{item.points.map((point, idx) => (
									<li key={idx}>{point}</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</section>

			{/* 4. CTA SECTION */}
			<section id="contact" className={styles.ctaSection}>
				<div style={{ maxWidth: "100%", margin: "0 auto" }}>
					<h2 className={styles.sectionTitle}>Need a Custom Solution?</h2>
					<p
						style={{
							textAlign: "center",
							marginBottom: "3rem",
							color: "#64748B",
						}}
					>
						Tell us about your case, and we will provide a tailored strategy for
						you.
					</p>
					<InquiryForm />
				</div>
			</section>
		</>
	);
}
