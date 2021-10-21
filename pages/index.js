import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";
const shimmer = (w, h) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

const toBase64 = (str) =>
  typeof window === "undefined"
    ? Buffer.from(str).toString("base64")
    : window.btoa(str);

export default function Home({ data }) {
  let loadTime = Date.now();
  const [mountImage, setMountImage] = useState(false);
//   useEffect(() => {
//     setMountImage(true);
//   }, []);
  return (
    <div className={styles.container}>
	<button onClick={()=>{setMountImage(true);}}/>
      {mountImage && (
        <Image
          width={1395}
          height={947}
          blurDataURL={`data:image/svg+xml;base64,${toBase64(
            shimmer(1395, 947)
          )}`}
          placeholder="blur"
          src={"/mountains.jpg"}
          onLoadingComplete={() => {
            console.log("test", Date.now() - loadTime);
          }}
        />
      )}
    </div>
  );
}

// export async function getServerSideProps() {
//   // Fetch data from external API
//   const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//   const data = await res.json();

//   // Pass data to the page via props
//   return { props: { data } };
// }
