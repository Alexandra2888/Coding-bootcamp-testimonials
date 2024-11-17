import {dataCarousel} from "../data/data.js";
import next from "/images/icon-next.svg";
import prev from "/images/icon-prev.svg";
import {useState} from "react";

const Carousel = () => {
const [slide, setSlide] = useState(0);

const handleNext = () => {
    setSlide(slide === dataCarousel.length - 1 ? 0 : slide + 1);
};

const handlePrev = () => {
    setSlide(slide === 0 ? dataCarousel.length - 1 : slide - 1);
}

    return (
        <main
            className="lg:flex justify-center items-center min-h-screen bg-[url('public/images/pattern-curve.svg')] bg-[length:280px_100px] lg:bg-[length:600px_200px] bg-no-repeat bg-left-bottom">
            <div className="flex flex-col lg:flex-row-reverse lg:w-full lg:max-w-[80rem] items-center py-10">
                <div
                    className="sm:max-w-[35rem] sm:mx-auto lg:max-w-none lg:w-[90%] bg-[url('public/images/pattern-bg.svg')] bg-no-repeat bg-contain bg-top px-6 pt-3 flex justify-center items-center flex-col relative">
                    <div
                        className="transition-opacity duration-500 ease-in-out py-8"
                    >
                        <img
                            src={dataCarousel[slide].img} alt={dataCarousel[slide].name}
                            className="rounded-md w-[90%] mx-auto lg:w-[85%] xl:w-[90%] lg:mx-0"
                        />
                    </div>
                    <div
                        className="bg-white py-3 rounded-full flex gap-6 justify-center items-center w-20 absolute left-0 right-0 mx-auto bottom-0 lg:bottom-[8px] lg:left-[20%] lg:mx-0 shadow-[rgba(32,32,70,0.25)_-20px_10px_40px_10px]">
                        <img src={prev} alt="Previous slide" onClick={handlePrev} className="cursor-pointer"/>
                        <img src={next} alt="Next slide" onClick={handleNext} className="cursor-pointer"/>
                    </div>
                </div>
                <div
                    className="sm:max-w-[35rem] sm:mx-auto lg:max-w-none lg:w-[100%] bg-[url('/images/pattern-quotes.svg')] bg-no-repeat bg-[length:90px_110px] lg:bg-[length:130px_150px] bg-[50%_-20%] lg:bg-[20%_-30%] px-7 pt-7 pb-16 mt-10 lg:mt-0 lg:py-10 lg:translate-x-28">
                    <div
                        className="transition-opacity duration-500 ease-in-out w-full"
                    >
                        <p
                            className="text-center text-[1.2rem] lg:text-[2rem] xl:text-[2.1rem] inter-300 lg:text-left lg:mb-8"

                        >{dataCarousel[slide].text}</p>
                        <div
                            className="flex flex-col lg:flex-row gap-2 justify-center items-center lg:justify-start lg:items-start">
                            <h1 className="text-Dark-Blue inter-700 lg:text-[1.2rem]">
                                {dataCarousel[slide].name}
                            </h1>
                            <p className="text-Grayish-Blue lg:text-[1.1rem]">{dataCarousel[slide].occupation}</p>
                        </div>
                    </div>
                </div>

            </div>
        </main>
    )
};

export default Carousel;