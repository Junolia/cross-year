import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";

export default function Home() {
	return (
		<div>
			<Navbar />

			{/* Logo */}
			<div className="flex landing-section-one">
				<img className="bigLogo" src="./images/big_logo.png" />
			</div>

			<Footer />
		</div>
	);
}
