import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useState } from "react";

export default function Home() {
  let loadTime = Date.now();
  const [mountImage, setMountImage] = useState(false);

  return (
    <div className={styles.container}>
	<button onClick={()=>{setMountImage(true);}}>click to load image</button>
      {mountImage && (
        <Image
          width={1395}
          height={947}
          blurDataURL={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="}
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