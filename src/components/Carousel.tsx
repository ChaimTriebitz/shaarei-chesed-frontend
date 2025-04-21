"use client";

import {
  useEffect,
  useRef,
  useState,
  ReactNode,
  TouchEvent,
  useCallback,
  useMemo,
} from "react";

interface CarouselProps {
  children: ReactNode[];
  autoPlay?: boolean;
}

interface SvgIcons {
  arrowLeft: ReactNode;
  arrowRight: ReactNode;
}

// Memoize SVG icons since they don't change
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
  const [slides, setSlides] = useState<HTMLElement[]>([]);
  const [currSlideIdx, setCurrSlideIdx] = useState(0);
  const [touchPosition, setTouchPosition] = useState<number | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const slidesRef = useRef<HTMLDivElement>(null);
  const indicatorsRef = useRef<HTMLDivElement>(null);

  const handleResize = useCallback(() => {
    if (!slides.length) return;

    requestAnimationFrame(() => {
      slides.forEach((slide, idx) => {
        if (slides[0]) {
          slide.style.left = `${
            slides[0].getBoundingClientRect().width * idx
          }px`;
        }
      });
    });
  }, [slides]);

  useEffect(() => {
    const resizeHandler = () => {
      handleResize();
    };
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, [handleResize]);

  useEffect(() => {
    if (children.length === 0 || !slidesRef.current) return;
    setSlides(Array.from(slidesRef.current.children) as HTMLElement[]);
  }, [children]);

  useEffect(() => {
    if (!slides.length || !slidesRef.current) return;

    requestAnimationFrame(() => {
      const currSlide = slides[currSlideIdx];
      slidesRef.current!.style.transform = `translateX(-${currSlide.style.left})`;
    });
  }, [currSlideIdx, slides]);

  useEffect(() => {
    handleResize();
    if (!slides.length || !autoPlay || isTransitioning) return;

    const intervalId = setInterval(() => {
      handleClick((currSlideIdx + 1) % slides.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [slides, currSlideIdx, autoPlay, handleResize, isTransitioning]);

  const handleClick = useCallback(
    (idx: number) => {
      if (!slidesRef.current || isTransitioning) return;

      setIsTransitioning(true);
      slidesRef.current.classList.add("transition");

      if (idx === slides.length - 1) {
        setTimeout(() => {
          if (!slidesRef.current) return;
          slidesRef.current.classList.remove("transition");
          setCurrSlideIdx(0);
          setIsTransitioning(false);
        }, 500);
      } else if (idx === 0) {
        setTimeout(() => {
          if (!slidesRef.current) return;
          slidesRef.current.classList.remove("transition");
          setCurrSlideIdx(slides.length - 1);
          setIsTransitioning(false);
        }, 500);
      }

      if (idx >= 0 && idx < slides.length) {
        setCurrSlideIdx(idx);
      }

      requestAnimationFrame(handleResize);
    },
    [slides.length, isTransitioning, handleResize]
  );

  const handleTouchStart = useCallback((e: TouchEvent<HTMLDivElement>) => {
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  }, []);

  const handleTouchMove = useCallback(
    (e: TouchEvent<HTMLDivElement>) => {
      const touchDown = touchPosition;
      if (touchDown === null) return;

      const currentTouch = e.touches[0].clientX;
      const diff = touchDown - currentTouch;

      if (diff > 7) handleClick((currSlideIdx + 1) % slides.length);
      if (diff < -7)
        handleClick(currSlideIdx === 0 ? slides.length - 1 : currSlideIdx - 1);

      setTouchPosition(null);
    },
    [touchPosition, currSlideIdx, slides.length, handleClick]
  );

  const navigationButtons = useMemo(() => {
    if (slides.length <= 2) return null;
    return (
      <>
        <button
          onClick={() =>
            handleClick(
              currSlideIdx === 0 ? slides.length - 1 : currSlideIdx - 1
            )
          }
        >
          {svgs.arrowLeft}
        </button>
        <button onClick={() => handleClick((currSlideIdx + 1) % slides.length)}>
          {svgs.arrowRight}
        </button>
      </>
    );
  }, [slides.length, currSlideIdx, handleClick]);

  const indicators = useMemo(() => {
    if (slides.length <= 2) return null;
    return (
      <nav className="indicators" ref={indicatorsRef}>
        {children.map((_, index) => (
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
    );
  }, [slides.length, currSlideIdx, children, handleClick]);

  return (
    <div
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      className="carousel-slider"
    >
      {navigationButtons}
      <div className="slides" ref={slidesRef}>
        {children.map((child, index) => (
          <div key={index} data-index={index} className="slide">
            {child}
          </div>
        ))}
        <div className="slide">{children[0]}</div>
      </div>
      {indicators}
    </div>
  );
}
