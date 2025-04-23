import AboutMe from "@/components/AboutMe";
// import Hero from "@/components/Hero";
import ProjectDifferentiator from "@/components/ProjectDifferentiator";
// import ImageGallery from "@/components/ImageGallery";
import ProjectOverview from "@/components/ProjectOverview";
import PaymentPlan from "@/components/PaymentPlan";
// import { ImageItem } from "@/types/images";

// const images: ImageItem[] = [
//   {
//     id: 1,
//     src: "/project/1-min.jpg",
//     alt: "Luxury Apartment Front View 1 ",
//   },
//   {
//     id: 2,
//     src: "/project/2-min.jpg",
//     alt: "Luxury Apartment Front View 2",
//   },
//   {
//     id: 3,
//     src: "/project/3-min.jpg",
//     alt: "Luxury Apartment Front View 3",
//   },
//   {
//     id: 4,
//     src: "/project/4-min.jpg",
//     alt: "Luxury Apartment Front View 4",
//   },
//   {
//     id: 5,
//     src: "/project/5-min.jpg",
//     alt: "Luxury Apartment Dining Room 1",
//   },
//   {
//     id: 6,
//     src: "/project/6-min.jpg",
//     alt: "Luxury Apartment Dining Room 2",
//   },
//   {
//     id: 7,
//     src: "/project/7-min.jpg",
//     alt: "Luxury Apartment Dining Room 3",
//   },
//   {
//     id: 8,
//     src: "/project/8-min.jpg",
//     alt: "Luxury Apartment Living Room 1",
//   },
//   {
//     id: 9,
//     src: "/project/9-min.jpg",
//     alt: "Luxury Apartment Dining Room 2",
//   },
// ];

export default function Home() {
  return (
    <main className="home">
      {/* <Hero images={images} /> */}
      <ProjectOverview />
      <ProjectDifferentiator />
      <PaymentPlan />
      {/* <ImageGallery images={images} /> */}
      <AboutMe />
    </main>
  );
}
