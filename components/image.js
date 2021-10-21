import React from 'react'
import Image from 'next/image';
export default function MyImage() {
    console.log('image is rendered');
	let loadTime = Date.now();

    return (
        <Image
            width={1395}
            height={947}
            blurDataURL={
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
            }
            placeholder="blur"
            src={"/mountains.jpg"}
            onLoadingComplete={() => {
                console.log("test", Date.now() - loadTime);
            }}
        />
    )
}
