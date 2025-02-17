import React from "react";
import Image from "next/image";

const destinations = [
  { img: "/beach2.jpg", place: "Paradise Beach", country: "Bali, Indonesia", price: "$550", rating: "4.8" },
  { img: "/ocean.jpg", place: "Colorful Ocean", country: "Maldives", price: "$420", rating: "4.7" },
  { img: "/mountain.jpg", place: "Mountain Escape", country: "Switzerland", price: "$600", rating: "5.0" },
];

const Discover = () => {
  return (
    <div className="bg-hero2 max-container padding-container flex flex-col gap-16 py-12">
      {/* Header Section */}
      <header className="text-center">
        <h1 className="text-4xl font-bold text-gray-900">Explore the World's Hidden Gems</h1>
        <p className="mt-4 text-lg text-gray-500">Find breathtaking locations curated just for you</p>
        <div className="mt-6 flex flex-col justify-center gap-4 md:flex-row">
          <button className="px-6 py-3 bg-purple-600 text-white rounded-full shadow-lg hover:bg-purple-700">Explore Now</button>
          <button className="px-6 py-3 border border-gray-400 rounded-full shadow hover:bg-gray-100">Watch Demo</button>
        </div>
      </header>
      
      {/* Featured Destinations */}
      <section>
        <h2 className="text-3xl font-semibold text-gray-900 text-center">Featured Destinations</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((dest, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-lg">
              <Image src={dest.img} alt={dest.place} width={300} height={200} className="rounded-md" />
              <h3 className="mt-4 text-xl text-purple-600 font-semibold">{dest.place}</h3>
              <p className="text-gray-500">{dest.country}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Discover;