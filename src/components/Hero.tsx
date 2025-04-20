"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ImageItem } from "@/types/images";

export default function Hero({ images }: { images: ImageItem[] }) {
  const [currImageIdx, setCurrImageIdx] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrImageIdx((prev) => (prev + 1) % images.length);
    }, 8000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="hero">
      <Image
        className="logo"
        src="/logo.svg"
        alt="logo"
        width={150}
        height={150}
      />
      <div className="hero-content">
        <h2>Luxury Living in Shaarei Chesed</h2>
        <h4>
          Exclusive Boutique Residential Development in Jerusalem's Most
          Sought-After Neighborhood
        </h4>
        <div className="btns">
          <button
          className="btn"
            onClick={() => {
              document
                .getElementById("about")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            About Project
          </button>
          <button
          className="btn"
            onClick={() => {
              document
                .getElementById("differentiator")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Why Choose Us
          </button>
          <button
          className="btn"
            onClick={() => {
              document
                .getElementById("gallery")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Gallery
          </button>
        </div>
      </div>

      {images.map((image, imageIdx) => (
        <Image
          className={imageIdx === currImageIdx ? "fading active" : "fading"}
          key={image.id}
          src={image.src}
          alt={image.alt}
          fill
        />
      ))}
    </div>
  );
}
