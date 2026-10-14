import Image from "next/image";


const Banner = () => {
     const  date = new Date().toLocaleDateString("bn-BD",{dateStyle:"full"});
    return (
        <div className="mx-auto mt-6 w-full max-w-7xl px-4 sm:mt-8 sm:px-6 lg:mt-10 lg:px-8">
            <div  className="bg-[#FFFFFF] rounded-2xl px-8 py-8 flex gap-2 justify-between items-center ">
              <div className="space-y-4">
                  <span className='bg-[#05893E] w-50 h-12 flex flex-row  sm:flex-col justify-center items-center rounded-2xl text-white text-base '>{date}</span>
                <h1 className="font-bold text-4xl">আজকের বাজারের দাম এক নজরে</h1>
                <p className="max-w-3xl text-2xl">চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।</p>
                <button className="btn btn-active bg-[#05893E] text-white text-lg shadow-2xl px-8 ">সব পণ্য দেখুন</button>
              </div>

              <div>
                <Image src={"/bazar-hero.png"} alt="hero" width={300} height={300}></Image>
              </div>
               
            </div>
            
        </div>
    );
};

export default Banner;