import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/404.module.css";

export default function Custom404() {
	return (
		<>
			<Head>
				<title>Page Not Found</title>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/IPM-logo-square.png" />
			</Head>

			<div className={styles.container}>
				{/* LAYER 1: Gambar */}
				<div className={styles.imageWrapper}>
					<Image
						src="/404.png"
						alt="404 Page Not Found"
						fill
						style={{ objectFit: "contain" }}
						priority
					/>
				</div>

				{/* LAYER 2: Overlay Gelap (Baru) */}
				<div className={styles.overlay}></div>

				{/* LAYER 3: Tombol */}
				<div className={styles.buttonWrapper}>
					<Link href="/" className={styles.buttonLink}>
						⬅ Back to Homepage
					</Link>
				</div>
			</div>
		</>
	);
}
