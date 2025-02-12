import { useState, useEffect } from "react";

function Carousel({ images }) {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };

  // Optional: Auto-play
  useEffect(() => {
    const timer = setInterval(nextSlide, 3000);
    return () => clearInterval(timer);
  }, [current]);

  return (
    <div className="carousel">
      <button onClick={prevSlide}>Previous</button>

      {images.map((image, index) => (
        <div className={index === current ? "slide active" : "slide"} key={index}>
          {index === current && <img src={image} alt={`Slide ${index}`} />}
        </div>
      ))}

      <button onClick={nextSlide}>Next</button>
    </div>
  );
}
