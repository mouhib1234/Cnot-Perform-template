import { features } from "../constants";

const FeatureSection = () => {
  return (
    <div className="relative mt-20 border-b border-neutral-800 min-h-[800px]">
      <div className="text-center">
        <span className="bg-neutral-900 text-[#BA52ED] rounded-full h-6 text-sm font-medium px-4 py-1 uppercase">
          Feature
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
          Qu'offrons
          <span className="text-[#BA52ED] bg-clip-text"> nous </span>
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 lg:mt-20">
        {features.map((feature, index) => (
          <div key={index} className="card-wrapper min-h-48 w-full ">
            <div className="card-content flex flex-col justify-center gap-4">
              <h2 className="text-xl font-semibold">{feature.text}</h2>
              <p className="text-base text-neutral-400">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
