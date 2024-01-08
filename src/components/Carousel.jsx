import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight, BsX } from 'react-icons/bs';
import { GoSquareFill } from "react-icons/go";

const Carousel = ({ setAlbum, album, isGraphic }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = album.images;
  
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className='w-full min-h-screen flex items-center fixed inset-0 bg-black/25 px-8 z-50'>
      <div className='w-full h-72 mx-auto relative group sm:max-w-sm md:max-w-lg md:h-96'>
        <div
          style={{ backgroundImage: `url(${images[currentIndex].src})` }}
          className={`h-full rounded-md bg-center bg-no-repeat duration-500 group ${isGraphic ? 'bg-contain' : 'bg-cover'}`}
        >
          <div onClick={() => setAlbum(null)} className='absolute top-8 right-4 -translate-x-0 translate-y-[-50%] text-2xl cursor-pointer transition duration-300 hover:scale-110'>
            <BsX color='grey' />
          </div>
          <div className='block transition duration-300 absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer active:scale-95 lg:opacity-0 lg:group-hover:opacity-95'>
            <BsChevronCompactLeft onClick={prevSlide}/>
          </div>
          <div className='block transition duration-300 absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer active:scale-95 lg:opacity-0 lg:group-hover:opacity-95'>
            <BsChevronCompactRight onClick={nextSlide}/>
          </div>
        </div>
        <div className='flex top-4 justify-center py-2'>
          {images.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className='text-md md:text-xl cursor-pointer'
            >
              <GoSquareFill color={`${currentIndex !== slideIndex ? 'grey' : 'whitesmoke'}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Carousel;