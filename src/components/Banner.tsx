
import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

  return (
    <section className="mx-auto mt-5 w-full max-w-7xl px-4 sm:mt-8 sm:px-6 lg:mt-10 lg:px-8">
      <div  className="flex flex-col items-center justify-between gap-6 rounded-2xl bg-white
          px-4 py-6
          sm:gap-8 sm:px-6 sm:py-8
          md:flex-row md:px-8
          lg:gap-10 lg:px-10 lg:py-10
        ">
        
        <div className="w-full min-w-0 space-y-4 text-center md:w-3/5 md:text-left lg:space-y-5">
          <span className="inline-flex min-h-10 items-center justify-center
              rounded-xl bg-[#05893E] px-4 py-2
              text-xs font-medium text-white
              sm:min-h-12 sm:text-sm
            ">
            {date}
          </span>      
          <h1 className="
              text-2xl font-extrabold text-gray-900
              sm:text-2xl
              lg:text-2xl xl:text-3xl
            " >
            আজকের বাজারের দাম এক নজরে
          </h1>

          <p
            className="
              text-base leading-7 text-gray-600
              sm:text-base sm:leading-8
              lg:text-lg xl:text-xl
            "
          >
            চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম —
            বাজারভিত্তিক বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং
            দামের পরিবর্তন এক জায়গায়।
          </p>
          <Link
            href="/products"
            className="
              inline-flex min-h-11 w-full items-center justify-center
              rounded-xl bg-[#05893E] px-6 py-3
              text-base font-semibold text-white
              shadow-md transition-colors duration-200
              hover:bg-[#047532]
              sm:w-auto sm:px-8 sm:text-lg
            "
          >
            সব পণ্য দেখুন
          </Link>
        </div>
        <div className="flex w-full shrink-0 justify-center md:w-2/5">
          <Image
            src="/bazar-hero.png"
            alt="বাজারের বিভিন্ন পণ্য"
            width={500}
            height={500}
            className="   h-auto w-full max-w-[240px] object-contain
              sm:max-w-[300px]
              md:max-w-full
              lg:max-w-[400px]
            "
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
