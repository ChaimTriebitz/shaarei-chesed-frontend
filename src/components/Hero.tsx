"use client";
import Image from "next/image";
import Link from "next/link";
import { ImageItem } from "@/types/images";
import { useEffect, useState } from "react";

export default function Hero({ images }: { images: ImageItem[] }) {
  const [currImageIdx, setCurrImageIdx] = useState(0);
  const [isActive, setIsActive] = useState(true);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrImageIdx((prev) => (prev + 1) % images.length);
    }, 8000);
    return () => clearInterval(intervalId);
  }, [images.length]);

  useEffect(() => {
    setIsActive(true);
    const timeoutId = setTimeout(() => {
      setIsActive(false);
    }, 4000);
    return () => clearTimeout(timeoutId);
  }, [currImageIdx]);

  return (
    <section className="section hero">
      <Image
        className={`fading ${isActive ? "active" : ""}`}
        src={images[currImageIdx].src}
        alt="logo"
        fill
        priority={currImageIdx === 0}
      />
      <div className="hero-overlay">
        <Image
          className="logo"
          src="/logo.svg"
          alt="logo"
          width={50}
          height={50}
        />
        <div className="hero-content">
          <h1>Luxury Living in Shaarei Chesed</h1>
          <h2>
            Exclusive Boutique Residential Development in Jerusalem&apos;s Most
            Sought-After Neighborhood
          </h2>
          <div className="btns">
            <Link href="#opportunity" className="btn">
              About Project
            </Link>
            <Link href="#differentiator" className="btn">
              Why Choose Us
            </Link>
            <Link href="#gallery" className="btn">
              Gallery
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
