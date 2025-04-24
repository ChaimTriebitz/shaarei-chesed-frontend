import Image from "next/image";
import CarouselSlider from "./Carousel";
import { ImageItem } from "@/types/images";


export default function ImageGallery({ images }: { images: ImageItem[] }) {
   return (
      <section className="section image-gallery" id="gallery">
         <CarouselSlider>
            {images.map((image, index) => (
               <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  loading="eager"
                  quality={90}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="gallery-image"
                  priority={index === 0}
                  style={{ objectFit: "cover" }}
                  
               />
            ))}
         </CarouselSlider>
      </section>
   );
}
