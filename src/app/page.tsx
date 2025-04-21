import AboutMe from "@/components/AboutMe";
import Hero from "@/components/Hero";
import ProjectDifferentiator from "@/components/ProjectDifferentiator";
import ImageGallery from "@/components/ImageGallery";
import ProjectOverview from "@/components/ProjectOverview";
import PaymentPlan from "@/components/PaymentPlan";
import { ImageItem } from "@/types/images";

const images: ImageItem[] = [
  {
    id: 1,
    src: "/1.jpg",
    alt: "Luxury Apartment Front View 1 ",
  },
  {
    id: 2,
    src: "/2.jpg",
    alt: "Luxury Apartment Front View 2",
  },
  {
    id: 3,
    src: "/3.jpg",
    alt: "Luxury Apartment Front View 3",
  },
  {
    id: 4,
    src: "/4.jpg",
    alt: "Luxury Apartment Front View 4",
  },
  {
    id: 5,
    src: "/5.jpg",
    alt: "Luxury Apartment Dining Room 1",
  },
  {
    id: 6,
    src: "/6.jpg",
    alt: "Luxury Apartment Dining Room 2",
  },
  {
    id: 7,
    src: "/7.jpg",
    alt: "Luxury Apartment Dining Room 3",
  },
  {
    id: 8,
    src: "/8.jpg",
    alt: "Luxury Apartment Living Room 1",
  },
  {
    id: 9,
    src: "/9.jpg",
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
