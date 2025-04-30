"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import kerala from "@/public/kerala.jpg";
import himalaya from "@/public/hiamalya.jpeg";
import raja from "@/public/download.jpeg";
import { useMediaQuery } from "@/hooks/use-media-query";

interface CarouselItem {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
  href: string;
}

export default function Carousel3D() {
  const [activeIndex, setActiveIndex] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");

  const items: CarouselItem[] = [
    {
      id: 0,
      title: "Historic Raja",
      description:
        "Lorem ipsum praesent ac massa at ligula reet est iaculis. Vivamus est mist aliquet elit ac nisl.",
      imageSrc: raja.src,
      href: "/trips/historic-raja",
    },
    {
      id: 1,
      title: "Kerala Weekend",
      description:
        "Lorem ipsum praesent ac massa at ligula reet est iaculis. Vivamus est mist aliquet elit ac nisl.",
      imageSrc: kerala.src,
      href: "/trips/kerala-weekend",
    },
    {
      id: 2,
      title: "Himalayan Trek",
      description:
        "Lorem ipsum praesent ac massa at ligula reet est iaculis. Vivamus est mist aliquet elit ac nisl.",
      imageSrc: himalaya.src,
      href: "/trips/himalayan-trek",
    },
  ];

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handleNext = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating, items.length]);

  // Auto rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [activeIndex, handleNext]);

  const getCardPosition = (index: number) => {
    let position = index - activeIndex;

    // Handle wrapping
    if (position < -1) position = items.length + position;
    if (position > 1) position = position - items.length;

    return position;
  };

  const getCardStyle = (index: number) => {
    const position = getCardPosition(index);

    const baseStyles =
      "absolute transition-all duration-500 ease-in-out w-full h-full";

    if (isMobile) {
      // Mobile styles
      if (position === 0) {
        return `${baseStyles} left-1/2 -translate-x-1/2 z-30 opacity-100 scale-100 rotate-0 translate-y-0`;
      } else {
        return `${baseStyles} opacity-0`;
      }
    } else {
      // Desktop styles
      if (position === -1) {
        return `${baseStyles} left-[5%] z-10 opacity-70 scale-90 -rotate-0 translate-y-4`;
      } else if (position === 0) {
        return `${baseStyles} left-[25%] z-30 opacity-100 scale-100 rotate-0 translate-y-0`;
      } else if (position === 1) {
        return `${baseStyles} left-[45%] z-20 opacity-70 scale-90 rotate-0 translate-y-4`;
      } else {
        return `${baseStyles} opacity-0`;
      }
    }
  };

  return (
    <div className="relative h-[300px] sm:h-[400px] md:h-[500px] w-full">
      {/* Carousel container */}
      <div className="relative h-full w-full rounded-4xl overflow-hidden">
        {/* Cards */}
        {[...items, ...items].map((item, index) => (
          <div key={`${item.id}-${index}`} className={getCardStyle(index)}>
            <div className="trip-card h-full w-[220px] sm:w-[280px] md:w-[320px] overflow-hidden bg-white rounded-lg shadow-lg">
              <div className="relative h-1/2 w-full">
                <Image
                  src={item.imageSrc || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <div className="p-4 sm:p-6 h-1/2 bg-gray-800 rounded-b-lg">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-playfair font-bold mb-2 sm:mb-4 text-white">
                  {item.title}
                </h3>
                <p className="text-gray-200 mb-4 sm:mb-6 line-clamp-2 sm:line-clamp-3 text-sm sm:text-base">
                  {item.description}
                </p>
                <Link
                  href={item.href}
                  className="read-more-btn flex items-center text-white hover:text-amber-400 transition-colors text-sm sm:text-base"
                >
                  Read More
                  <ArrowRight className="mr-12 h-4 w-4 sm:h-5 sm:w-5" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      <button
        onClick={handlePrev}
        className="absolute left-6 sm:left-4 top-1/2 -translate-y-1/2 z-40 bg-black/50 text-white p-1.5 sm:p-2 rounded-full hover:bg-black/70 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-2 sm:right-0 top-1/2 -translate-y-1/2 z-40 bg-black/50 text-white p-1.5 sm:p-2 rounded-full hover:bg-black/70 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-40 flex space-x-2">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (isAnimating) return;
              setIsAnimating(true);
              setActiveIndex(index);
              setTimeout(() => setIsAnimating(false), 500);
            }}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${
              index === activeIndex % items.length ? "bg-white" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
