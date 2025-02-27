import React from "react";

const OlympicChampionCard = ({ name, sport, medals, image }) => {
  return (
    <div className="relative w-full overflow-hidden card-wrapper">
      <img
        src={image}
        alt={name}
        className="w-full h-56 object-cover rounded-md"
      />

      <div className="p-5 flex flex-col items-start gap-4 w-full">
        <div>
          <h3 className="text-lg font-semibold text-white leading-tight">
            {name}
          </h3>
          <p className="text-sm text-neutral-400 mt-2">{sport}</p>
        </div>
        <div className="flex items-center gap-5">
          <div className="flex items-center">
            <span className="text-xl font-semibold">{medals.gold}</span>
            <span className="block text-lg ml-1">🥇</span>
          </div>
          <div className="flex items-center">
            <span className="text-xl font-semibold">{medals.silver}</span>
            <span className="block text-lg ml-1">🥈</span>
          </div>
          <div className="flex items-center">
            <span className="text-xl font-semibold">{medals.bronze}</span>
            <span className="block text-lg ml-1">🥉</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OlympicChampionCard;
