import styles from "./Footer.module.css";

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<div className={styles.container}>
				{/* Alamat */}
				<div>
					<h3 className={styles.title}>PT. INLED PUTRA MANDIRI</h3>
					<p className={styles.text}>
						Metropolitan Tower, Jl. R. A. Kartini Kav. 14A, <br />
						Cilandak Barat, Cilandak, Jakarta Selatan, DKI Jakarta
					</p>
				</div>

				{/* Kontak */}
				<div>
					<h3 className={styles.title}>Contact Us</h3>
					<p className={styles.text}>📞 +62 811....</p>
					<p className={styles.text}>✉️ janedoe@inledputramandiri.com</p>
				</div>

				{/* Visi Singkat */}
				<div>
					<h3 className={styles.title}>Our Vision</h3>
					<p className={styles.text}>
						To become a leading consulting company in Indonesia's oil and gas
						industry.
					</p>
				</div>
			</div>
			<div className={styles.copyright}>
				&copy; {new Date().getFullYear()} PT INLED PUTRA MANDIRI. All rights
				reserved.
			</div>
		</footer>
	);
}
