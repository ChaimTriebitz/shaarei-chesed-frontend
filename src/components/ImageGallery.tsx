import Image from "next/image";
import CarouselSlider from "./Carousel";
import { ImageItem } from "@/types/images";

export default function ImageGallery({ images }: { images: ImageItem[] }) {
  return (
    <div className="image-gallery" id="gallery">
      <CarouselSlider>
        {images.map((image) => (
          <Image key={image.id} src={image.src} alt={image.alt} fill />
        ))}
      </CarouselSlider>
    </div>
  );
}
