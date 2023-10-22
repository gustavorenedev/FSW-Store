"use client";

import Image from "next/image";
import { useState } from "react";

interface ProductImagesProps {
  name: string;
  imageURLs: string[];
}

const ProductImages = ({ imageURLs, name }: ProductImagesProps) => {
  const [currentImage, setCurrentImage] = useState(imageURLs[0]);

  const handleImageClick = (imageURL: string) => {
    setCurrentImage(imageURL);
  };

  return (
    <div className="flex flex-col">
      <button className="flex h-[300px] w-full items-center justify-center bg-accent">
        <Image
          src={currentImage}
          alt={name}
          height={0}
          width={0}
          sizes="100vw"
          className="h-auto max-h-[70%] w-auto max-w-[80%]"
          style={{
            objectFit: "contain",
          }}
        />
      </button>
      <div className="px-3 mt-8 grid grid-cols-4 gap-4">
        {imageURLs.map((imageURL) => (
          <div
            key={imageURL}
            className={`flex h-[100px] items-center justify-center rounded-lg bg-accent ${
              imageURL === currentImage &&
              "border-2 border-solid border-primary"
            }`}
            onClick={() => handleImageClick(imageURL)}
          >
            <Image
              src={imageURL}
              alt={name}
              height={0}
              width={0}
              sizes="100vw"
              className="h-auto max-h-[70%] w-auto max-w-[80%]"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
