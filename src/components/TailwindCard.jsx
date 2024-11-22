import React, { useState } from 'react';
import { RiHeartLine } from 'react-icons/ri';
import frame5 from '../assets/frame 5.png';

const TailwindCard = () => {
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden relative w-fit">
      {/* Heart button */}
      <div className="absolute top-2 left-2">
        <button className="bg-primary text-white p-2 rounded-full hover:bg-primary/80">
          <RiHeartLine className="text-xl" />
        </button>
      </div>

      {/* Image */}
      <img
        src={frame5}
        className="rounded-lg h-72 object-cover"
        alt="Presidential Suite"
        onClick={() => setIsRevealed(!isRevealed)} // Toggle the reveal on image click
      />

      {/* Card Content */}
      <div className="p-4">
        <h2 className="text-xl font-semibold text-primary mb-4 text-center">Card Title</h2>
        <p className="text-muted-foreground text-center">This is a link</p>
      </div>

      {/* Card Reveal (Visible when toggled) */}
      <div className={`card-reveal absolute inset-0 bg-black bg-opacity-50 p-4 ${isRevealed ? 'block' : 'hidden'}`}>
        <div className="flex justify-between items-center">
          <span className="card-title text-white text-xl">Card Title</span>
          <button className="text-white text-xl" onClick={() => setIsRevealed(false)}>×</button>
        </div>
        <p className="text-white mt-4">Here is some more information about this product that is only revealed once clicked on.</p>
      </div>

      {/* Share Button */}
      <div className="text-center pb-4">
        <button className="bg-secondary text-secondary-foreground px-4 py-2 rounded-md hover:bg-secondary/80">
          Share
        </button>
      </div>
    </div>
  );
};

export default TailwindCard;
