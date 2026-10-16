
import Image from "next/image";
import Link from "next/link";


const NotFound = () => {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
       <Image className="w-160  h-90 mb-7 rounded-2xl" src={'/notFound.jpg'} width={300} height={300} alt='not-found'  ></Image>

      <h2 className="mt-5 text-2xl font-bold sm:text-3xl">
        পেজটি খুঁজে পাওয়া যায়নি!
      </h2>

      <p className="mt-3 max-w-lg text-sm text-gray-600 sm:text-base">
        দুঃখিত, আপনি যে পেজটি খুঁজছেন সেটি নেই, সরানো হয়েছে
        অথবা লিংকটি ভুল।
      </p>

      <Link
        href="/"
        className="btn mt-7 h-12 rounded-xl border-none bg-[#05893E] px-6 text-base text-white hover:bg-[#047532] sm:h-14 sm:text-lg"
      >
        ← হোম পেজে ফিরে যান
      </Link>
    </div>
  );
};

export default NotFound;
