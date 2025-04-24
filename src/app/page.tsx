import AboutMe from "@/components/AboutMe";
import Hero from "@/components/Hero";
import ProjectDifferentiator from "@/components/ProjectDifferentiator";
import ImageGallery from "@/components/ImageGallery";
import ProjectOverview from "@/components/ProjectOverview";
import PaymentPlan from "@/components/PaymentPlan";
import { ImageItem } from "@/types/images";

// Import images
import img1 from "@/assets/images/1-min.jpg";
import img2 from "@/assets/images/2-min.jpg";
import img3 from "@/assets/images/3-min.jpg";
import img4 from "@/assets/images/4-min.jpg";
import img5 from "@/assets/images/5-min.jpg";
import img6 from "@/assets/images/6-min.jpg";
import img7 from "@/assets/images/7-min.jpg";
import img8 from "@/assets/images/8-min.jpg";
import img9 from "@/assets/images/9-min.jpg";

const images: ImageItem[] = [
  {
    id: 1,
    src: img1.src,
    alt: "Luxury Apartment Front View 1",
  },
  {
    id: 2,
    src: img2.src,
    alt: "Luxury Apartment Front View 2",
  },
  {
    id: 3,
    src: img3.src,
    alt: "Luxury Apartment Front View 3",
  },
  {
    id: 4,
    src: img4.src,
    alt: "Luxury Apartment Front View 4",
  },
  {
    id: 5,
    src: img5.src,
    alt: "Luxury Apartment Dining Room 1",
  },
  {
    id: 6,
    src: img6.src,
    alt: "Luxury Apartment Dining Room 2",
  },
  {
    id: 7,
    src: img7.src,
    alt: "Luxury Apartment Dining Room 3",
  },
  {
    id: 8,
    src: img8.src,
    alt: "Luxury Apartment Living Room 1",
  },
  {
    id: 9,
    src: img9.src,
    alt: "Luxury Apartment Dining Room 2",
  },
];

export default function Home() {
  return (
    <main className="home">
      <Hero images={images} />
      <ProjectOverview />
      <ProjectDifferentiator />
      <PaymentPlan />
      <ImageGallery images={images} />
      <AboutMe />
    </main>
  );
}
