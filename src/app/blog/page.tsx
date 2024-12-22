"use client";

import "@fontsource/poppins";
import Image from "next/image";
import SearchBar from "../../components/Bar";

export default function Blog() {
  return (
    <main className="font-poppins">
      
      <div
        className="relative h-[60vh] sm:h-[50vh] md:h-[45vh] bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: "url('/Blog.png')" }}
      ></div>

      
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8 mt-10 px-4 md:px-8">
        
        <aside className="lg:col-span-1">
          <div className="mb-10">
            <SearchBar />
          </div>
          <h2 className="font-semibold text-2xl mb-5">Categories</h2>
          <Image
            src="/list.png"
            className="mb-8"
            alt="Categories"
            height={270}
            width={270}
          />
          <h2 className="font-semibold text-2xl mb-5">Recent Posts</h2>
          <div className="space-y-5">
            {[1, 2, 3, 4, 5].map((item) => (
              <Image
                key={item}
                src={`/blog-${item}.png`}
                className=""
                alt={`Blog ${item}`}
                height={250}
                width={250}
              />
            ))}
          </div>
        </aside>

        
        <div className="lg:col-span-3 space-y-16">
          {[1, 2, 3].map((item) => (
            <article key={item}>
              <Image
                src={`/pic.${item}.png`}
                className="rounded-lg mb-5"
                alt={`Blog Image ${item}`}
                height={500}
                width={700}
              />
              <Image
                src="/icons.png"
                className="rounded-lg mb-5"
                alt="Icons"
                height={500}
                width={500}
              />
              <h1 className="text-3xl font-semibold text-gray-800">
                {item === 1
                  ? "Going all-in with millennial design"
                  : item === 2
                  ? "Exploring new ways of decorating"
                  : "Handmade pieces that took time to make"}
              </h1>
              <p className="text-gray-400 mt-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus
                mauris vitae ultricies leo integer malesuada nunc. In nulla
                posuere sollicitudin aliquam ultrices. Morbi blandit cursus
                risus at ultrices mi tempus imperdiet. Libero enim sed faucibus
                turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras
                pulvinar mattis nunc sed blandit libero. Pellentesque elit
                ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque
                ornare aenean euismod elementum.
              </p>
              <h4 className="text-2xl font-normal mt-5">Read more</h4>
              <div className="border-t-2 mt-3 w-32 border-black"></div>
            </article>
          ))}
        </div>
      </div>

  
      <div className="flex space-x-4 mt-10 pb-10 justify-center">
        {["1", "2", "3", "Next"].map((item, index) => (
          <button
            key={index}
            className="w-14 h-14 bg-orange-100 text-black rounded-lg hover:bg-yellow-600 shadow-md"
          >
            {item}
          </button>
        ))}
      </div>
    </main>
  );
}
