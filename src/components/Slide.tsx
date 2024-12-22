import Image from "next/image";
import Inner from "../../public/inner.png"

export default function Slide() {
  return (
    <div className="slideSection bg-[#FCF8F3] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-8 justify-items-center">
      <div className="slideText pt-9 text-center sm:text-left">
        <h4 className="font-extrabold text-2xl sm:text-3xl">50+ Beautiful rooms inspiration</h4>
        <p className="text-sm sm:text-base">
          Our designer already made a lot of beautiful prototypes of rooms that inspire you
        </p>
        <button className="bg-[#B88E2F] text-white py-2 px-4 rounded hover:bg-[#a07c27] transition">
          Explore More
        </button>
      </div>
      <div className="slideImages flex justify-center sm:justify-start">
        <Image src={Inner} width={400} height={50} alt="Beautiful Room Inspiration" />
      </div>
      <div className="slideImages mt-3 flex justify-center sm:justify-start">
        <Image src="/Sideinner.png" width={400} height={50} alt="Additional Room Inspiration" />
      </div>
    </div>
  );
}
