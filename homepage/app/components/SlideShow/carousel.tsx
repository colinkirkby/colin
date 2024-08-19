import React, { useContext, useEffect, useState } from 'react';


type CarouselProps = {
  items: JSX.Element[]
};

type DoughnutData = {
  labels: [string, string];
  datasets: [
    {
      label: string;
      data: [number, number];
    }
  ];
};
const kFormatter = (num: number) => {
  return Math.abs(num) > 999
    ? Math.sign(num) * Number((Math.abs(num) / 1000).toFixed(1)) + 'K'
    : (Math.sign(num) * Math.abs(num)).toFixed(0);
};

export default function Carousel({
  items

}: CarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);





  const goPrevious = () => {
    setActiveIndex(prevIndex => (prevIndex - 1 + items.length) % items.length);
  };

  const goNext = () => {
    setActiveIndex(prevIndex => (prevIndex + 1) % items.length);
  };

  return (
    <>
      <div id="Carousel">
        <div className=" relative m-auto w-[1600px] h-[800px]">
          <div className="flex overflow-hidden">
            {items.map((item, index) => (
              <div
                key={index}
                className="relative z-30 min-w-full h-[800px] px-[100px] mt-[20px]"
                style={{
                  transition: 'transform 0.5s ease-in-out .1s',
                  transform: `translateX(-${activeIndex * 100}%)`,
                }}
              >
                {item}
              </div>
            ))}
          </div>
          <button
            disabled={activeIndex === 0}
            onClick={goPrevious}
            className=" pl-[5px] pr-[10px] absolute z-40 h-4/5 left-0 top-[50%]"
            style={{
              transform: 'translateY(-50%)',
            }}
          >
            <svg
              className="w-[30px] h-[30px] "
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill={
                activeIndex === 0 ? "#0000" : "#ffff"
              }
              style={{
                transform: 'rotate(90deg)',
              }}
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <button
            disabled={activeIndex === items.length - 1}
            onClick={goNext}
            className=" pr-[10px] pl-[3px] m-y-auto absolute z-40 h-4/5 right-0 top-[50%]"
            style={{
              transform: 'translateY(-50%)',
            }}
          >
            <svg
              className="w-[30px] h-[30px]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill={
                activeIndex === items.length - 1
                  ? "#0000" : "#ffff"
              }
              style={{
                transform: 'rotate(-90deg)',
              }}
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div className="flex justify-center items-center mt-[4vh]">
          {items.map((item, index) => {
            return (
              <div
                className="w-[8px] h-[8px] m-[5px] z-30 rounded-[5px]"
                style={
                  activeIndex === index
                    ? {
                      backgroundColor: '#FFFF',
                    }
                    : {
                      backgroundColor: '#D9D9D9',
                    }
                }
              ></div>
            );
          })}
        </div>
      </div>

    </>
  );
}

