import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import TrustedPartners from "@/components/partners/partners";
import InquiryForm from "@/components/form/InquiryForm";

export default function Home() {
	return (
		<>
			<Head>
				<title>Home-PT. INLED PUTRA MANDIRI</title>
				<meta
					name="description"
					content="Consulting for Legal, Tax, Finance in Oil & Gas Industry"
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/IPM-logo-square.png" />
			</Head>

			{/* Hero Section */}
			<section className={styles.hero}>
				<div className={styles.heroBgAnimated}>
					<Image
						src="/bg-hero.jpg"
						alt="Background"
						fill
						style={{ objectFit: "cover" }}
						priority
					/>
				</div>

				<div className={styles.heroOverlay}></div>

				<div className={styles.heroContent}>
					<h1 className={styles.heroTitle}>
						"The essence of strategy is choosing what to do"
					</h1>
					<p className={styles.heroSubtitle}>
						Specializing in Legal, Tax, and Finance for Oil and Gas Industry
					</p>
				</div>
			</section>

			{/* Partners Section */}
			<TrustedPartners />

			{/* ABOUT Section */}
			<section className={styles.section}>
				<div
					style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto" }}
				>
					<h2 className={styles.sectionTitle}>Who We Are</h2>
					<p style={{ fontSize: "1.1rem", lineHeight: "1.8" }}>
						PT. INLED PUTRA MANDIRI is a dynamic consulting company established
						in 2023, specializing in legal, tax, finance, and accounting
						services with a dedicated focus on Indonesia’s oil and gas
						ecosystem.
					</p>
				</div>
			</section>

			{/* SERVICES Section */}
			<section
				className={styles.section}
				style={{ backgroundColor: "#F8FAFC" }}
			>
				<h2 className={styles.sectionTitle}>Our Services</h2>
				<div className={styles.grid}>
					<div className={styles.card}>
						<h3>Legal Advisory</h3>
						<p>
							Consultation for business transactions, licensing, and regulatory
							compliance.
						</p>
					</div>

					<div className={styles.card}>
						<h3>Tax Consulting</h3>
						<p>
							Specialized solutions covering KSO, PSC, licensing, and risk
							management.
						</p>
					</div>

					<div className={styles.card}>
						<h3>Finance Consulting</h3>
						<p>
							Specialized solutions covering Financial Due Diligence, Capital
							Allocation, and digital transformation.
						</p>
					</div>

					<div
						className={styles.card}
						style={{ borderBottom: "4px solid #CA8A04" }}
					>
						<h3>Oil & Gas Focused</h3>
						<p>
							Specialized solutions covering KSO, PSC, licensing, and risk
							management.
						</p>
					</div>
				</div>
			</section>

			{/* Inquiry Form Section */}
			<section id="contact" className={styles.ctaSection}>
				<div style={{ maxWidth: "100%", margin: "0 auto" }}>
					<h2 className={styles.sectionTitle}>Get in Touch</h2>
					<InquiryForm />
				</div>
			</section>
		</>
	);
}
