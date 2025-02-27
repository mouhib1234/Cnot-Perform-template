import { useState, useEffect } from "react";

const images = [
  "https://img.olympics.com/images/image/private/t_s_pog_staticContent_hero_md_2x/f_auto/primary/axgnen3ogsx69q4rvnyv",
  "https://www.arabnews.com/sites/default/files/styles/n_670_395/public/2021/07/24/2730261-1753373310.jpg?itok=QN4Bpver",
  "https://dicodusport.fr/blog/wp-content/uploads/2024/08/Taekwondo-JO-2024-Ulugbek-Rashitov-double-champion-olympique-a-22-ans.png",
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = images.length;

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  return (
    <div className="">
      <div class="relative overflow-hidden rounded-[2rem]  md:h-[30rem] w-[30rem]">
        {/* Carousel Wrapper */}
        <div
          className="flex transition-transform duration-700 ease-in-out transform"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Slide ${index + 1}`}
              className="w-full h-56 md:h-[30rem] object-cover flex-shrink-0"
            />
          ))}
        </div>

        {/* Indicators */}
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${
                currentIndex === index ? "bg-white" : "bg-gray-500"
              }`}
            />
          ))}
        </div>

        {/* Controls */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-3 -translate-y-1/2 p-2 bg-gray-800/30 hover:bg-gray-800/50 rounded-full"
        >
          ❮
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-3 -translate-y-1/2 p-2 bg-gray-800/30 hover:bg-gray-800/50 rounded-full"
        >
          ❯
        </button>
      </div>
    </div>
  );
}
