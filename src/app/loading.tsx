
import Image from "next/image";
import { FiLoader } from "react-icons/fi";

const loading = () => {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">

      <div className="relative mb-8 flex h-52 w-52 items-center justify-center rounded-full bg-[#EAF7EF] sm:h-64 sm:w-64">
        <div className="absolute inset-5 rounded-full border border-[#C8E8D4]" />

        <div className="flex flex-col items-center">
          <div className="text-7xl sm:text-8xl">
            <Image  src={'/bazar-hero.png'} alt="image" width={200} height={200}/>
          </div>

          <div className="mt-3 h-2 w-24 rounded-full bg-[#B9DDC6]" />
        </div>

        <div className="absolute right-5 top-7 h-4 w-4 animate-ping rounded-full bg-[#05893E]" />
        <div className="absolute bottom-8 left-5 h-3 w-3 animate-pulse rounded-full bg-[#05893E]" />
      </div>

      <FiLoader className="mb-4 animate-spin text-4xl text-[#05893E]" />

      <h1 className="text-2xl font-bold text-[#173D2A] sm:text-3xl">
        Loading...
      </h1>

      <p className="mt-3 max-w-lg text-sm text-gray-500 sm:text-base">
        একটু অপেক্ষা করুন, আমরা আপনার জন্য প্রস্তুত করছি...
      </p>
      <div className="mt-6 h-2 w-56 overflow-hidden rounded-full bg-[#DDEFE3] sm:w-72">
        <div className="h-full w-1/2 animate-pulse rounded-full bg-[#05893E]" />
      </div>
    </div>
  );
};

export default loading;
