import { CheckCircle2 } from "lucide-react";
import athlete from "../assets/athlete.png";
import { aboutItems } from "../constants";

const AboutUs = () => {
  return (
    <div className="relative mt-20  min-h-[800px]">
      {/* Background Pattern */}

      {/* Purple Lamp Light (Top Left) */}
      <div className="absolute -top-64 -left-80 w-[30rem] h-[30rem] bg-[#A4F6F9] opacity-50 blur-[5rem] rounded-full "></div>
      <div className="absolute -bottom-28 -right-0 w-[24rem] h-[20rem] bg-[#BA52ED] opacity-50 blur-[5rem] rounded-full "></div>

      <div className="text-center">
        <span className="bg-neutral-900 text-[#BA52ED] rounded-full h-6 text-sm font-medium px-4 py-1 uppercase">
          À propos de nous
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
          Boostez Votre
          <span className="ml-2 text-[#BA52ED] bg-clip-text font-semibold">
            Performance
          </span>
        </h2>
      </div>

      <div className="flex flex-wrap justify-center lg:mx-24 md:mx-16 px-6 border-b border-neutral-800  mt-10 lg:mt-20">
        <div className="">
          <div className="mx-auto flex max-w-2xl flex-col gap-16 px-6 py-16 sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center  xl:gap-x-20 xl:px-20">
            <div className="w-full flex-auto">
              <div className="text-lg space-y-4 text-pretty text-gray-300 list-disc list-inside">
                {aboutItems.map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="text-[#BA52ED]  bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
                      <CheckCircle2 />
                    </div>
                    <div>
                      <p className="text-md text-neutral-300">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative w-full flex justify-center card-wrapper border-1">
              {/* Athlete Image */}
              <svg
                aria-hidden="true"
                className="absolute inset-0 -z-10 size-full stroke-[#A4F6F9] opacity-10 "
              >
                <defs>
                  <pattern
                    x="50%"
                    y={-44}
                    id="pattern-bg"
                    width={200}
                    height={200}
                    patternUnits="userSpaceOnUse"
                  >
                    <path d="M.5 200V.5H200" fill="none" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#pattern-bg)"
                  width="100%"
                  height="100%"
                  strokeWidth={0}
                />
              </svg>
              <img
                alt="Athlete"
                src={athlete}
                className="h-96 w-auto object-contain lg:h-auto lg:w-[25rem] relative z-10 opacity-100  "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
