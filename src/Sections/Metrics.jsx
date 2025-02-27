const statistiques = [
  { name: "Total des Athlètes", value: "405" },
  { name: "Total des Entraîneurs", value: "3.65" },
  { name: "Total des Formateurs", value: "150" },
  { name: "Total des Événements", value: "60" },
];

export default function Metrics() {
  return (
    <div className="lg:mx-24 md:mx-16 py-8 mt-10">
      <div className="text-center">
        <span className="bg-neutral-900 text-[#BA52ED] rounded-full h-6 text-sm font-medium px-4 py-1 uppercase">
          métriques
        </span>
      </div>

      <div className="w-full mt-10 lg:mt-20 p-6 card-wrapper">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 justify-between">
          {statistiques.map((stat) => (
            <div
              key={stat.name}
              className="px-4 py-6 sm:px-6 lg:px-8 text-center"
            >
              <p className="text-sm font-medium text-gray-400">{stat.name}</p>
              <p className="mt-2 flex justify-center items-baseline">
                <span className="text-4xl font-semibold tracking-tight text-white">
                  {stat.value}
                </span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
