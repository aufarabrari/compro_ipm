import Image from "next/image";
import styles from "./Partners.module.css";

export default function TrustedPartners() {
	return (
		<section className={styles.section}>
			<p className={styles.title}>Trusted Industry Partners</p>

			<div className={styles.grid}>
				{/* SLB logo wrapper */}
				<div className={styles.logoWrapper}>
					<Image
						src="/partners/SLB.svg"
						alt="SLB Logo"
						width={120}
						height={60}
						style={{ objectFit: "contain" }}
					/>
				</div>

				{/* Halliburton logo wrapper */}
				<div className={styles.logoWrapper}>
					<Image
						src="/partners/Halliburton.png"
						alt="Halliburton Logo"
						width={120}
						height={60}
						style={{ objectFit: "contain" }}
					/>
				</div>

				{/* Geolog Logo Wrapper */}
				<div className={styles.logoWrapper}>
					<Image
						src="/partners/Geolog.png"
						alt="Geolog Logo"
						width={120}
						height={60}
						style={{ objectFit: "contain" }}
					/>
				</div>

				{/* Parindo Jaya Logo Wrapper */}
				<div className={styles.logoWrapper}>
					<Image
						src="/partners/ParindoJaya.png"
						alt="Parindo Jaya Logo"
						width={120}
						height={60}
						style={{ objectFit: "contain" }}
					/>
				</div>
			</div>
		</section>
	);
}
