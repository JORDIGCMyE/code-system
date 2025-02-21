"use client";
import { WorldMap } from "@/components/ui/world-map";

export default function WorldMapDemo() {
  return (
    <div className="mb-16">
      <div className="mx-auto text-center mb-12 pr-4 pl-4 sm:pl-0 sm:pr-0">
        <div className="mb-4 inline-block rounded-full bg-primary px-4.5 py-1.5 dark:border dark:border-strokedark dark:bg-blacksection">
          <span className="text-sectiontitle font-medium text-white">
            Buscanos
          </span>
        </div>
        <h2 className="mx-auto mb-4 text-3xl font-bold text-primary md:w-4/5 xl:w-1/2 xl:text-5xl">
        ¿Donde nos encontramos?
        </h2>
        <p className="mx-auto text-black text-lg opacity-90 md:w-4/5 lg:w-3/5 xl:w-[40%]">
          Nuestras oficinas centrales se encuentran en Barcelona, 
          pero hemos ido dejando el legado Multimedia Engineering alrededor del mundo.
        </p>
      </div>
      <div className="m-auto dark:bg-black bg-white w-full max-w-[100%] sm:max-w-[60%]">
        <WorldMap
          dots={[
            {
              start: { lat: 31.9686, lng: -99.9018 }, // Texas, USA
              end: { lat: 4.711, lng: -74.0721 }, // Colombia (Bogotá)
            },
            {
              start: { lat: 4.711, lng: -74.0721 }, // Colombia (Bogotá)
              end: { lat: -33.4489, lng: -70.6693 }, // Chile (Santiago)
            },
            {
              start: { lat: -33.4489, lng: -70.6693 }, // Chile (Santiago)
              end: { lat: 40.4168, lng: -3.7038 }, // Spain (Madrid)
            },
            {
              start: { lat: 40.4168, lng: -3.7038 }, // Spain (Madrid)
              end: { lat: 38.7223, lng: -9.1393 }, // Portugal (Lisbon)
            },
            {
              start: { lat: 38.7223, lng: -9.1393 }, // Portugal (Lisbon)
              end: { lat: 64.9631, lng: -19.0208 }, // Iceland (Reykjavík)
            },
            {
              start: { lat: 64.9631, lng: -19.0208 }, // Iceland (Reykjavík)
              end: { lat: 51.5074, lng: -0.1278 }, // United Kingdom (London)
            },
            {
              start: { lat: 51.5074, lng: -0.1278 }, // United Kingdom (London)
              end: { lat: 48.8566, lng: 2.3522 }, // France (Paris)
            },
            {
              start: { lat: 48.8566, lng: 2.3522 }, // France (Paris)
              end: { lat: 41.9028, lng: 12.4964 }, // Italy (Rome)
            },
            {
              start: { lat: 41.9028, lng: 12.4964 }, // Italy (Rome)
              end: { lat: 37.9838, lng: 23.7275 }, // Greece (Athens)
            },
            {
              start: { lat: 37.9838, lng: 23.7275 }, // Greece (Athens)
              end: { lat: 22.5431, lng: 114.0579 }, // Shenzhen, China
            },
            {
              start: { lat: 22.5431, lng: 114.0579 }, // Shenzhen, China
              end: { lat: -25.2744, lng: 133.7751 }, // Australia
            },
          ]}
        />
      </div>
    </div>
  );
}
