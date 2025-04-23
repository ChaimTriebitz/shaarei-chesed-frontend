"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ImageItem } from "@/types/images";

export default function Hero({ images }: { images: ImageItem[] }) {
  const [currImageIdx, setCurrImageIdx] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrImageIdx((prev) => (prev + 1) % images.length);
    }, 8000);
    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <div className="hero">
      <div className="hero-overlay">
        <Image
          className="logo"
          src="/logo.svg"
          alt="logo"
          width={50}
          height={50}
          priority={true}
          loading="eager"
          sizes="(max-width: 600px) 75px, 150px"
          quality={90}
        />
        <div className="hero-content">
          <h1>Luxury Living in Shaarei Chesed</h1>
          <h2>
            Exclusive Boutique Residential Development in Jerusalem&apos;s Most
            Sought-After Neighborhood
          </h2>
          <div className="btns">
            <Link href="#about" className="btn">
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

      {images.map((image, imageIdx) => (
        <Image
          className={imageIdx === currImageIdx ? "fading active" : "fading"}
          key={image.id}
          src={image.src}
          alt={image.alt}
          fill
          priority={imageIdx === 0 || imageIdx === 1}
          loading={imageIdx <= 1 ? "eager" : "lazy"}
          sizes="(max-width: 640px) 640px, (max-width: 1080px) 1080px, 1920px"
          quality={75}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQrJyEwPENDODM4QkVFRUBBRUVGRklJRkVHT01PS1xVVVVGRlhYYWdYV1P/2wBDARUXFx4aHh4pIR8hVU5TU1VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
        />
      ))}
    </div>
  );
}
