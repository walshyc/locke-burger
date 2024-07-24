import Image from "next/image";
import data from '../json/locations.json';
import MapLink from "@/components/MapLink";

export default function Home() {

  const isAfterSpecificDate = () => {
    const currentDate = new Date();
    const targetDate = new Date('2024-07-25T06:00:00');

    return currentDate >= targetDate;
  };

  return (
    <div className="flex flex-col my-auto min-h-screen">
      <header className="bg-black flex justify-center border-b-8 border-locke-red">
        <img className="my-4 h-20" src="./locke.svg" alt="Locke Bar Logo" />
      </header>
      <main className="bg-gray-300 flex-grow">
        <div className="max-w-5xl min-h-full mx-auto px-6 lg:px-8 flex flex-col gap-4 pt-4">
          <div className="flex justify-center pt-4">
            <div className="h-52 sm:h-72 w-full relative">
              <Image
                src="/LockeBurger.jpg"
                alt="Locke Burger Food"
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:gap-8 py-2 border-t-2 border-b-2 border-locke-red flex-grow">

            {
              isAfterSpecificDate() && <a
                href="https://lockeb.bumpey.net/"
                type="button"
                className="flex-grow inline-flex justify-center text-center items-center px-6 py-3 my-3 border border-transparent shadow-sm text-2xl font-medium tracking-wide rounded-md text-gray-100 bg-locke-red hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-locke-red cursor-pointer"
              >
                Order from Bunratty
              </a>
            }
            <a
              href="https://lockec.bumpey.net"
              type="button"
              className="flex-grow inline-flex justify-center text-center items-center px-6 py-3 my-3 border border-transparent shadow-sm text-2xl font-medium tracking-wide rounded-md text-gray-100 bg-locke-red hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-locke-red cursor-pointer"
            >
              Order from Castletroy
            </a>
            <a
              href="https://locke.bumpey.net/"
              type="button"
              className="flex-grow inline-flex justify-center text-center items-center px-6 py-3 my-3 border border-transparent shadow-sm text-2xl font-medium tracking-wide rounded-md text-gray-100 bg-locke-red hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-locke-red cursor-pointer"
            >
              Order from City Centre
            </a>

          </div>
          <div className="w-full text-center uppercase tracking-wider font-medium text-black text-xl py-2">
            Where to find us
          </div>
          <div className="flex justify-between pb-6 flex-wrap gap-y-2">
            {data.map((d, i) => (
              <MapLink key={d.name} destination={d.name} url={d.mapLink} />
            ))}
          </div>
          <div className="flex justify-center pb-6">
            <a
              href="https://www.lockeburger.ie/"
              type="button"
              className="flex-grow inline-flex justify-center text-center items-center px-6 py-3 my-3 border border-transparent shadow-sm text-2xl font-medium tracking-wide rounded-md text-gray-100 bg-locke-red hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-locke-red cursor-pointer"
            >
              Website
            </a>
          </div>
        </div>
      </main>
      <footer className="bg-black py-5 text-locke-red flex justify-center border-t-8 border-locke-red"></footer>
    </div>
  );
}
