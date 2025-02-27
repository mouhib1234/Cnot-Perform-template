import athlete2 from "../assets/athlete2.png";
import athlete3 from "../assets/athlete3.png";

const Fonctionalities = () => {
  return (
    <div className="relative ">
      <div className="lg:mx-32 md:mx-16 px-6">
        <div className="mt-20">
          <div className="flex flex-wrap gap-8 justify-between relative">
            {/* Light Lamp Effect for First Image */}
            <div className="absolute -top-32 -right-36 w-[30rem] h-[30rem] bg-[#BA52ED] opacity-50 blur-[5rem] rounded-full"></div>

            <div className="pt-12 w-full lg:w-1/2">
              <div className="flex gap-6 mb-12">
                <div className="flex justify-center items-start">
                  <div className="text-purple-500 font-bold bg-neutral-900 text-4xl p-6 rounded-full text-center">
                    01
                  </div>
                </div>

                <div>
                  <h5 className="mt-1 mb-2 text-2xl font-bold">
                    Transformer l'entraînement sportif avec l'IA
                  </h5>
                  <p className="text-lg text-neutral-500">
                    Découvrez comment CNOT Perform révolutionne l'entraînement
                    sportif avec l'Intelligence Artificielle. Suivez votre
                    performance en temps réel et analysez vos données pour
                    identifier vos forces et vos faiblesses.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img src={athlete2} className="w-full h-full" alt="athlete" />
            </div>
          </div>
        </div>

        <div className="mt-20">
          <div className="flex flex-wrap gap-8 justify-between relative">
            {/* Light Lamp Effect for Second Image */}
            <div className="absolute -bottom-24 -left-40 w-[30rem] h-[30rem] bg-[#A4F6F9] opacity-50 blur-[5rem] rounded-full"></div>

            <div className="relative">
              <img src={athlete3} alt="athlete" />
            </div>
            <div className="pt-12 w-full lg:w-1/2">
              <div className="flex gap-6 mb-12">
                <div className="flex justify-center items-start">
                  <div className="text-purple-500 font-bold bg-neutral-900 text-4xl p-6 rounded-full text-center">
                    02
                  </div>
                </div>

                <div>
                  <h5 className="mt-1 mb-2 text-2xl font-bold">
                    Analytique de performance alimentée par l'IA pour les
                    athlètes
                  </h5>
                  <p className="text-lg text-neutral-500">
                    Libérez votre potentiel avec l'analytique de performance
                    alimentée par l'IA de CNOT Perform. Suivez votre progression
                    en temps réel et obtenez des insights sur vos forces et
                    faiblesses pour optimiser votre entraînement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fonctionalities;
