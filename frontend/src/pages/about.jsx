import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/About.module.css";
import InquiryForm from "@/components/form/InquiryForm";

export default function About() {
	return (
		<>
			<Head>
				<title>About Us - PT. INLED PUTRA MANDIRI</title>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/IPM-logo-square.png" />
			</Head>

			{/* 1. HERO SECTION */}
			<section className={styles.hero}>
				<div>
					<h1 className={styles.heroTitle}>Our Journey & Commitment</h1>
					<p style={{ fontSize: "1.2rem", opacity: 0.9 }}>
						Professional Legal, Tax, and Finance Consulting
					</p>
				</div>
			</section>

			{/* 2. THE STORY*/}
			<section className={styles.section}>
				<div className={styles.splitLayout}>
					{/* Sisi Gambar */}
					<div className={styles.imageWrapper}>
						<Image
							src="/team-trust.jpg"
							alt="About IPM"
							fill
							style={{ objectFit: "cover" }}
						/>
					</div>

					{/* IPM Story */}
					<div className={styles.storyContent}>
						<h2>Building Trust in Energy Sector</h2>

						{/* PARAGRAF 1: Sejarah / Pendirian */}
						<p>
							PT. INLED PUTRA MANDIRI was established in 2023 with a strong
							determination to provide high-quality consulting services in
							Indonesia. Founded by experienced professionals in the Oil & Gas
							industry, we understand the complex regulatory landscape that
							energy companies face every day.
						</p>

						{/* PARAGRAF 2: Fokus Layanan / Expertise */}
						<p>
							Our firm specializes in bridging the gap between technical
							operations and legal compliance. From navigating Production
							Sharing Contracts (PSC) to optimizing tax liabilities and ensuring
							financial transparency, we act not just as consultants, but as
							strategic partners for your growth.
						</p>
					</div>
				</div>
			</section>

			{/* 3. VISION & MISSION (Grid System) */}
			<section className={styles.vmSection}>
				<div className={styles.grid}>
					{/* Card Vision */}
					<div className={styles.card}>
						<h3>Our Vision</h3>
						<p style={{ lineHeight: "1.6", color: "#475569" }}>
							To become a leading consulting company in Indonesia's oil and gas
							industry, recognized for our integrity, strategic insight, and
							commitment to client success.
						</p>
					</div>

					{/* Card Mission */}
					<div className={styles.card}>
						<h3>Our Mission</h3>
						<ul
							style={{
								paddingLeft: "1.2rem",
								lineHeight: "1.8",
								color: "#475569",
							}}
						>
							<li>Provide accurate and timely legal & tax advice.</li>
							<li>
								Ensure full compliance with Indonesian regulations (SKK Migas,
								etc).
							</li>
							<li>
								Deliver cost-effective financial strategies for our partners.
							</li>
						</ul>
					</div>
				</div>
			</section>

			{/* 4. CORE VALUES */}
			<section className={styles.section}>
				<div
					style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto" }}
				>
					<h2
						style={{
							fontFamily: "var(--font-heading-family)",
							color: "var(--primary-navy)",
						}}
					>
						Our Core Values
					</h2>
					<p>The principles that guide every decision we make.</p>
				</div>

				<div className={styles.valuesGrid}>
					<div className={styles.valueItem}>
						<span className={styles.valueIcon}>🤝</span>
						<h3>Integrity</h3>
						<p>Uncompromising honesty in all our dealings.</p>
					</div>
					<div className={styles.valueItem}>
						<span className={styles.valueIcon}>💡</span>
						<h3>Excellence</h3>
						<p>Delivering quality beyond expectations.</p>
					</div>
					<div className={styles.valueItem}>
						<span className={styles.valueIcon}>⚖️</span>
						<h3>Compliance</h3>
						<p>Strict adherence to laws and regulations.</p>
					</div>
				</div>
			</section>

			{/* 5. CTA Form */}
			<section id="contact" className={styles.ctaSection}>
				<div style={{ maxWidth: "100%", margin: "0 auto" }}>
					<h2 className={styles.sectionTitle}>Ready to Work With Us?</h2>
					<InquiryForm />
				</div>
			</section>
		</>
	);
}
