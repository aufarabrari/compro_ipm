import "@/styles/globals.css";
import Head from "next/head";
import { Provider } from "react-redux";
import { globalStore } from "@/redux/store";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

export default function App({ Component, pageProps }) {
	return (
		<Provider store={globalStore}>
			<Head>
				<title>PT. INLED PUTRA MANDIRI</title>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>

			<div className="layout-wrapper">
				<Header />
				<main className="main-content">
					<Component {...pageProps} />
				</main>
				<Footer />
			</div>
		</Provider>
	);
}
