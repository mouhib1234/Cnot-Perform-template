import React from "react";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import Carousel from "../components/Carousel";

const HeroSection = () => {
  return (
    <div className="pb-24 sm:pb-32 lg:flex items-center justify-between lg:py-16">
      <div className="mx-auto max-w-2xl shrink-0 lg:mx-0 lg:pt-8">
        <div className="mt-24 sm:mt-32 lg:mt-16">
          <a href="#" className="inline-flex space-x-6">
            <span className="px-3 text-md font-medium text-blue-400">
              Votre feuille de route vers le succès athlétique.
            </span>
          </a>
        </div>
        <h1 className="mt-10 text-5xl font-semibold tracking-tight text-pretty text-white sm:text-7xl">
          Analytique de performance pour les athlètes.
        </h1>
        <p className="mt-8 text-lg font-medium text-pretty text-gray-400 sm:text-xl/8">
          L'Intelligence Artificielle au Service du Sport.
        </p>
        <div className="mt-10 flex items-center gap-x-6">
          <a href="#" className="text-md font-medium text-white">
            Plongez dans l’avenir <span aria-hidden="true">→</span>
          </a>
          <a
            href="#"
            className="bg-[#ba52ed] py-3 px-6 rounded-full text-sm font-medium text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
          >
            S'inscrire
          </a>
        </div>
      </div>
      <div className="mx-auto mt-16 flex sm:mt-24 lg:mt-0 lg:mr-0 lg:ml-10 lg:max-w-none">
        <Carousel />
      </div>
    </div>
  );
};

export default HeroSection;
