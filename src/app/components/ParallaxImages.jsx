"use client";

import { Parallax } from 'react-scroll-parallax';

const ParallaxImages = () => (
  <div className="grid grid-cols-2 gap-4 pl-48 pr-48 pt-10 pb-10">
    {['1', '2', '3', '4'].map((num) => (
      <Parallax key={num} y={[-20, 20]} tagouter="section">
        <img
          src={`/images/smile-store-${num}.jpg`}
          alt={`SMILE Store ${num}`}
          className="w-full h-auto"
        />
      </Parallax>
    ))}
  </div>
);

export default ParallaxImages;