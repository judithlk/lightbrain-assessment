import Image from "next/image";

import { FaWalking } from "react-icons/fa";
import { MdDirectionsBus } from "react-icons/md";
import { FaCarAlt } from "react-icons/fa";

export default function DetailCard({
  image,
  title,
  price,
  description,
  walkdist,
  cardist,
  traindist,
  facilities,
  showwalk,
  showcar,
  showtrain,
}: {
  image: string;
  title: string;
  price: string;
  description: string;
  walkdist: string;
  cardist: string;
  traindist: string;
  facilities: string[];
  showwalk: boolean;
  showcar: boolean;
  showtrain: boolean;
}) {
  return (
    <div className="bg-white shadow-2xl rounded-sm w-full p-5 md:flex justify-between">
      <div className="md:w-[23%]">
        <Image
          src={image}
          alt={title}
          width={100}
          height={100}
          className="w-[100%]"
        />
      </div>
      <div className="md:w-[75%]">
        <div className="sm:flex w-[100%] justify-between">
          <div className="sm:w-[74%] space-y-2">
            <h2 className="font-semibold text-xl">{title}</h2>
            <p className="text-gray-600">{description}</p>
            <div className="flex space-x-3 text-gray-800 flex-wrap">
              <div>
              <h1 className="font-semibold">Distance to campus:</h1>
              </div>
              <div
                className={`flex space-x-1 items-center ${
                  showwalk == true ? "block" : "hidden"
                }`}
              >
                <FaWalking className="size-4" />
                <h1>{walkdist}mins</h1>
              </div>
              <div
                className={`flex space-x-1 items-center ${
                  showtrain == true ? "block" : "hidden"
                }`}
              >
                <MdDirectionsBus className="size-4" />
                <h1>{traindist}mins</h1>
              </div>
              <div
                className={`flex space-x-1 items-center ${
                  showcar == true ? "block" : "hidden"
                }`}
              >
                <FaCarAlt className="size-4" />
                <h1>{cardist}mins</h1>
              </div>
            </div>
            <div className="flex space-x-3">
              <h1 className="font-semibold">Facilities:</h1>
              <h1 className="capitalize">{facilities.join(', ')}</h1>
            </div>
            <div className="flex space-x-3">
              <div className="bg-blue-900 text-white p-1 w-fit">
                <h3 className="text-xs">Cheapest in the past months</h3>
              </div>
              <div className="bg-blue-900 text-white p-1 w-fit">
                <h3 className="text-xs">Price drop</h3>
              </div>
            </div>
          </div>
          <div className="flex space-x-1 sm:w-[24%]">
            <h3>From</h3>
            <h3 className="text-2xl">&pound;{price}</h3>
            <h3>/week</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
