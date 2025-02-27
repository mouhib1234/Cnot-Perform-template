import cnot from "../assets/CNOT.png";
import { navigation } from "../constants";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-800">
      <div className="">
        <div className="xl:grid xl:grid-cols-4 xl:gap-8 lg:mx-32 md:mx-16 px-6 pt-16 pb-8 sm:pt-24 lg:px-8 lg:py-16">
          <div className="space-y-8">
            <img
              alt="Company name"
              src={cnot}
              className="h-20 w-20 object-contain"
            />
            <p className="text-sm/6 text-balance text-gray-300">
              Cnot Perform Votre feuille de route vers le succès athlétique.
            </p>
            <div className="flex gap-x-6">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-gray-300"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon aria-hidden="true" className="size-6" />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-sm/6 font-semibold text-white">
              Liens Rapides
            </h3>
            <ul role="list" className="mt-6 space-y-4">
              {navigation.solutions.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-sm/6 text-gray-400 hover:text-white"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm/6 font-semibold text-white">Company</h3>
            <ul role="list" className="mt-6 space-y-4">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-sm/6 text-gray-400 hover:text-white"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm/6 font-semibold text-white">
              Contactez-nous
            </h3>
            <ul role="list" className="mt-6 space-y-4">
              {navigation.support.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-sm/6 text-gray-400 hover:text-white"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-neutral-800 w-full">
          <p className="text-sm/6 text-gray-400 lg:mx-32 md:mx-16 py-6 px-6">
            &copy; Copyright 2025 - CNOT PERFORM. Tous droits réservés
          </p>
        </div>
      </div>
    </footer>
  );
}
