/* eslint-disable react/prop-types */
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect } from "react";
import { GrNext, GrPrevious } from "react-icons/gr";

const Carousel = (props) => {
  const { data } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  const handleNext = () => {
    emblaApi.scrollNext();
  };

  const handlePrev = () => {
    emblaApi.scrollPrev();
  };

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi?.selectedScrollSnap()); // Access API
    }
  }, [emblaApi]);

 

  return (
    <>
      <div className="overflow-hidden relative" ref={emblaRef}>
        <div className="flex h-[25rem]">
          {data.map((item) => (
            <div
              key={item.id}
              className="basis-full flex-shrink-0 flex-grow-0 min-w-0 relative"
            >
              <img
                src={item.photo}
                alt={item.title}
                className="absolute w-full h-full top-0 left-0"
              />
              <div className="absolute w-full h-full top-0 left-0 bottom-0 right-0 bg-[rgba(0,0,0,.5)]">
                <h3 className="absolute bottom-[30%] left-1/2 -translate-x-1/2 text-white font-bold w-[80%] text-center text-xl mb-2">
                  {item.title}
                </h3>
                <p className="absolute bottom-[10%] left-1/2 -translate-x-1/2 text-sm text-white w-full text-center px-3">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* next prev buttons */}
        <div className="absolute top-1/2 -translate-y-1/2 flex w-full justify-between px-1">
          <button onClick={handlePrev} className="text-white text-2xl">
            <GrPrevious />
          </button>
          <button onClick={handleNext} className="text-white text-2xl">
            <GrNext />
          </button>
        </div>
        {/* Dot Buttons */}
        <div className="flex gap-x-2 absolute bottom-4 left-1/2 -translate-x-1/2">
          {emblaApi?.scrollSnapList()?.map((_, i) => (
            <button key={i} className="h-[8px] w-[8px] bg-transparent border border-white rounded-full">
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Carousel;
