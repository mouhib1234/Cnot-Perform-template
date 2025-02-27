import React from "react";
import CountdownTimer from "../components/CountdownTimer";

const OlympicGameTimer = () => {
  return (
    <section>
      <div className="lg:mx-24 md:mx-16 py-8 mt-10">
        <div className="text-center">
          <span className="bg-neutral-900 text-[#BA52ED] rounded-full h-6 text-sm font-medium px-4 py-1 uppercase">
            À venir
          </span>
          <div className="flex flex-col items-center gap-2  mt-10 lg:mt-20 tracking-wide">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl">
              Jeux Olympiques d'Hiver
            </h2>
            <span className="text-[#BA52ED] text-3xl sm:text-5xl lg:text-6xl">
              Milano Cortina-2026
            </span>
          </div>
        </div>
        <div className="mt-10 lg:mt-20">
          <CountdownTimer targetDate={"2025-12-31T23:59:59"} />
        </div>
      </div>
    </section>
  );
};

export default OlympicGameTimer;
