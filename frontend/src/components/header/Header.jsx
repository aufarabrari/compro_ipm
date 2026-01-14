import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";
import { useState } from "react";

export default function Header() {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	const closeMenu = () => {
		setIsOpen(false);
	};

	return (
		<nav className={styles.navbar}>
			<Link href="/" className={styles.logoWrapper} onClick={closeMenu}>
				<Image
					src="/IPM-Logo.png"
					alt="PT. INLED PUTRA MANDIRI"
					width={200}
					height={70}
					style={{ objectFit: "contain" }}
					priority
					className={styles.logoImage}
				/>
			</Link>

			<button
				className={`${styles.hamburger} ${isOpen ? styles.active : ""}`}
				onClick={toggleMenu}
				aria-label="Toggle Navogation"
			>
				<span className={styles.bar}></span>
				<span className={styles.bar}></span>
				<span className={styles.bar}></span>
			</button>

			<div className={`${styles.navLinks} ${isOpen ? styles.active : ""}`}>
				<Link href="/" className={styles.link} onClick={closeMenu}>
					Home
				</Link>
				<Link href="/about" className={styles.link} onClick={closeMenu}>
					About Us
				</Link>
				<Link href="/services" className={styles.link} onClick={closeMenu}>
					Services
				</Link>
				<Link href="/contact" className={styles.ctaButton} onClick={closeMenu}>
					Contact Us
				</Link>
			</div>
		</nav>
	);
}
