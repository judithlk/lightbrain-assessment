import Image from "next/image";

export default function DetailCard({
  image,
  title,
  price,
  description,
  walkdist,
  cardist,
  traindist,
  facilities,
}: {
  image: string;
  title: string;
  price: string;
  description: string;
  walkdist: string;
  cardist: string;
  traindist: string;
  facilities: string;
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
          <div className="w-[74%] space-y-2">
            <h2 className="font-semibold text-xl">{title}</h2>
            <p className="text-gray-600">{description}</p>
            <div className="flex space-x-3">
              <h1 className="font-semibold">Distance to campus:</h1>
              <h1>{cardist}mins</h1>
              <h1>{traindist}min</h1>
            </div>
            <div className="flex space-x-3">
              <h1 className="font-semibold">Facilities:</h1>
              <h1>{facilities}</h1>
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
          <div className="flex space-x-1 w-[24%] border border-red-600">
            <h3>From</h3>
            <h3 className="text-2xl">&pound;{price}</h3>
            <h3>/week</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
