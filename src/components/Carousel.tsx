"use client";

import { useEffect, useRef, useState, ReactNode, TouchEvent } from "react";

interface CarouselProps {
  children: ReactNode[];
  autoPlay?: boolean;
}

interface SvgIcons {
  arrowLeft: ReactNode;
  arrowRight: ReactNode;
}

// Temporary SVG icons - replace with your actual icons
const svgs: SvgIcons = {
  arrowLeft: (
    <svg viewBox="0 0 24 24" width="24" height="24">
      <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
    </svg>
  ),
  arrowRight: (
    <svg viewBox="0 0 24 24" width="24" height="24">
      <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
    </svg>
  ),
};

export default function CarouselSlider({
  children,
  autoPlay = true,
}: CarouselProps) {
  const [touchPosition, setTouchPosition] = useState<number | null>(null);
  const [slides, setSlides] = useState<HTMLElement[]>([]);
  const [currSlideIdx, setCurrSlideIdx] = useState(0);
  const slidesRef = useRef<HTMLDivElement>(null);
  const indicatorsRef = useRef<HTMLElement>(null);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (children.length === 0 || !slidesRef.current) return;
    setSlides(Array.from(slidesRef.current.children) as HTMLElement[]);
  }, [children]);

  useEffect(() => {
    if (!slides.length || !slidesRef.current) return;
    const currSlide = slides[currSlideIdx];
    slidesRef.current.style.transform = `translateX(-${currSlide.style.left})`;
  }, [currSlideIdx, slides]);

  useEffect(() => {
    handleResize();
    if (!slides.length || !autoPlay) return;
   //  const intervalId = setInterval(() => {
   //    handleClick(currSlideIdx + 1);
   //  }, 4000);
   //  return () => clearInterval(intervalId);
  }, [slides, currSlideIdx, autoPlay]);

  const handleResize = () => {
    slides.forEach((slide, idx) => {
      if (slides[0]) {
        slide.style.left = `${slides[0].getBoundingClientRect().width * idx}px`;
      }
    });
  };

  const handleClick = (idx: number) => {
    if (!slidesRef.current) return;

    slidesRef.current.classList.add("transition");
    if (idx === slides.length - 1) {
      setTimeout(() => {
        if (!slidesRef.current) return;
        slidesRef.current.classList.remove("transition");
        setCurrSlideIdx(0);
      }, 500);
    } else if (idx === 0) {
      setTimeout(() => {
        if (!slidesRef.current) return;
        slidesRef.current.classList.remove("transition");
        setCurrSlideIdx(slides.length - 1);
      }, 500);
    }
    if (idx >= 0 && idx < slides.length) {
      setCurrSlideIdx(idx);
    }
    handleResize();
  };

  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  };

  const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    const touchDown = touchPosition;
    if (touchDown === null) return;
    const currentTouch = e.touches[0].clientX;
    const diff = touchDown - currentTouch;
    if (diff > 7) handleClick(currSlideIdx + 1);
    if (diff < -7) handleClick(currSlideIdx - 1);
    setTouchPosition(null);
  };

  return (
    <div
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      className="carousel-slider"
    >
      {slides.length > 2 && (
        <button onClick={() => handleClick(currSlideIdx - 1)}>
          {svgs.arrowLeft}
        </button>
      )}
      <div className="slides" ref={slidesRef}>
        {children.map((child, index) => (
          <div key={index} data-index={index} className="slide">
            {child}
          </div>
        ))}
        <div className="slide">{children[0]}</div>
      </div>
      {slides.length > 2 && (
        <button onClick={() => handleClick(currSlideIdx + 1)}>
          {svgs.arrowRight}
        </button>
      )}
      {slides.length > 2 && (
        <nav className="indicators" ref={indicatorsRef}>
          {children.map((item, index) => (
            <button
              key={index}
              onClick={() => handleClick(index)}
              className={
                index === currSlideIdx ||
                (currSlideIdx === slides.length - 1 && index === 0)
                  ? "indicator curr-indicator"
                  : "indicator"
              }
            >
              <span></span>
            </button>
          ))}
        </nav>
      )}
    </div>
  );
}
