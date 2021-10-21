import MyImage from "../components/image";
import styles from "../styles/Home.module.css";
import { useState } from "react";

export default function Home() {
	const [mountImage, setMountImage] = useState(false);

	console.log('Home is rendered')
	return (
		<div className={styles.container}>
			<button
				onClick={() => {
					setMountImage(true);
				}}
			>
				click to load image
			</button>
			{mountImage && (
				<MyImage/>
			)}
		</div>
	);
}
