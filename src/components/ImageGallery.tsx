import Image from "next/image";
import CarouselSlider from "./Carousel";
import { ImageItem } from "@/types/images";

export default function ImageGallery({ images }: { images: ImageItem[] }) {
  return (
    <div className="image-gallery" id="gallery">
      <CarouselSlider>
        {images.map((image) => (
          <Image
            key={image.id}
            src={image.src}
            alt={image.alt}
            fill
            priority={image.id === 1}
            loading={image.id === 1 ? "eager" : "lazy"}
            sizes="(max-width: 600px) 100vw, 90vw"
            quality={85}
          />
        ))}
      </CarouselSlider>
    </div>
  );
}
