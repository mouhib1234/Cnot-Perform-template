import React from "react";
import OlympicChampionCard from "../components/cards/OlympicChampionCard";
import { champions } from "../constants";

const OlympiChampions = () => {
  return (
    <div className="lg:mx-32 md:mx-16 px-6 mt-20">
      {/* Background Pattern */}

      <div className="text-center">
        <span className="bg-neutral-900 text-[#BA52ED] rounded-full h-6 text-sm font-medium px-4 py-1 uppercase">
          Les Athlétes
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
          Les Champions
          <span className="ml-2 text-[#BA52ED] bg-clip-text font-semibold">
            Olympiques
          </span>
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 lg:mt-20">
        {champions.map((champion, index) => (
          <OlympicChampionCard key={index} {...champion} />
        ))}
      </div>
    </div>
  );
};

export default OlympiChampions;
