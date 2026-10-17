
import baseUrl from "@/Service/baseUrl";
import Link from "next/link";
import { FiChevronRight } from "react-icons/fi";

interface IMarket {
  market: string;
  division: string;
  min: number;
  max: number;
}

interface IProductDetails {
  id: number;
  slug: string;
  nameBn: string;
  categoryNameBn: string;
  image: string;
  change: {
    dir: "up" | "down" | "flat";
    pct: number;
  };
  unit: string;
  today: number;
  yesterday: number;
  lastWeek?: number;
  lastMonth?: number;
  markets: IMarket[];
}

const ProductDetailsPage = async ({
  params,
}: {
  params: Promise<{slug: string }>;
}) => {
  const { slug } = await params;

  const res = await fetch(`${baseUrl}/products/${slug}`);

  if (!res.ok) {
    throw new Error("Product details fetch failed");
  }

  const data: IProductDetails = await res.json();

  
  const minPrice = data.markets.length
    ? Math.min(...data.markets.map((mar) => mar.min))
    : 0;

  const maxPrice = data.markets.length
    ? Math.max(...data.markets.map((mar) => mar.max))
    : 0;

  const priceDifference = Math.abs(data.today - data.yesterday);

  return (
    <div className="mx-auto min-h-screen max-w-7xl px-4 py-8">
     
        <div  className="mb-5 flex flex-wrap items-center gap-2 text-sm sm:text-base">
        <Link  href="/"  className="inline-flex items-center gap-1 text-gray-500 transition hover:text-[#05893E]"  >
        <span>হোম</span>
      </Link>

      <FiChevronRight className="text-gray-600" size={16} />

      <span className="text-gray-700 transition hover:text-[#05893E]">
      {data.categoryNameBn}
      </span>

      <FiChevronRight className="text-gray-600" size={16} />

      <span className="font-semibold text-[#05893E]"   >
        {data.nameBn}
      </span>
    </div>
    
      <div className="mt-8 rounded-2xl bg-[#FAFCFA] px-6 py-8 shadow-sm md:px-12">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <div className="flex items-center gap-5">
            <div className="flex h-26 w-26 shrink-0 items-center justify-center rounded-2xl bg-[#F0F5F0]">
              <span className="text-5xl">{data.image}</span>
            </div>

            <div className="space-y-1">
              <h2 className="text-2xl font-bold md:text-3xl">
                {data.nameBn}
              </h2>

              <p className="text-gray-600 text-lg">
                <span>প্রতি{data.unit}</span>: {data.categoryNameBn}
              </p>

              <p
                className="text-lg font-medium" >
                {data.change.dir === "up"
                  ? "গতকালের তুলনায় আজ দাম বেড়েছে"
                  : data.change.dir === "down"
                    ? "গতকালের তুলনায় আজ দাম কমেছে"
                    : "গতকালের তুলনায় আজ দাম অপরিবর্তিত"}

                {" · "}
                {priceDifference} টাকা
              </p>
            </div>
          </div>
          <div className="rounded-2xl bg-[#F0F5F0] px-8 py-6 text-center">
            <h3 className="text-lg">আজকের দাম</h3>

            <p className="my-2 text-3xl font-extrabold">
              ৳{data.today}
            </p>

            <span className="text-sm text-gray-600">
              টাকা / {data.unit}
            </span>

            <div className="mt-3">
              {data.change.dir === "up" && (
                <span className="rounded-full bg-red-100 px-3 py-1 text-sm font-semibold text-red-700">
                  ▲ {data.change.pct}%
                </span>
              )}

              {data.change.dir === "down" && (
                <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">
                  ▼ {data.change.pct}%
                </span>
              )}

              {data.change.dir === "flat" && (
                <span className="rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
                  — 0%
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 rounded-2xl bg-[#FAFCFA] px-6 py-8 shadow-sm md:px-12">
        <h2 className="mb-6 text-2xl font-semibold">
          দামের সারসংক্ষেপ
        </h2>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-xl border border-green-200 bg-white p-6">
            <p className="text-gray-600 text-lg">সর্বনিম্ন দাম</p>

            <h3 className="mt-3 text-3xl font-bold text-green-700">
              {minPrice}<span className="text-2xl"> টাকা</span>
            </h3>

            <p className="mt-2 text-lg text-gray-500">
             সবচেয়ে কম দামের বাজার
            </p>
          </div>
          <div className="rounded-xl border border-red-200 bg-white p-6">
            <p className="text-gray-700 text-lg">সর্বাধিক দাম</p>

            <h3 className="mt-3 text-3xl font-bold text-red-600">
              {maxPrice}<span className="text-2xl"> টাকা</span>
            </h3>

            <p className="mt-2 text-lg text-gray-600">
               সবচেয়ে বেশি দামের বাজার
            </p>
          </div>

          
          <div className="rounded-xl border border-blue-200 bg-white p-6">
            <p className="text-gray-600 text-lg">গড় দাম</p>

            <h3 className="mt-3 text-3xl font-bold text-[#1A9951]">
              {data.markets.length}<span className="text-2xl"> টাকা</span>
            </h3>

            <p className="mt-2  text-gray-500 text-lg">
              প্রতি{data.unit}-এর হিসাবে
            </p>
          </div>
        </div>

        {/*  */}
        <div className="mt-10 overflow-hidden rounded-2xl bg-[#FAFCFA] shadow-sm">
           <h2 className="mb-6 text-2xl font-semibold mt-8 px-6">বাজারভিত্তিক আজকের দাম</h2>
            
          <div className="overflow-x-auto">
    <table className="w-full min-w-[700px]  text-left">
      <thead className="border-y border-[#1D271F]">
        <tr className="text-lg text-[#1D271F]">
          <th className="px-6 py-4 font-bold">বাজার</th>
          <th className="px-6 py-4 font-bold">বিভাগ</th>
          <th className="px-6 py-4 font-bold">সর্বনিম্ন</th>
          <th className="px-6 py-4 font-bold">সর্বাধিক</th>
          <th className="px-6 py-4 font-bold">গড়</th>
        </tr>
      </thead>

      <tbody>
        {data.markets.map((mar, index) => {
          const average = (mar.min + mar.max) / 2;

          return (
            <tr
              key={`${mar.market}-${index}`}
              className="border-y border-[#1D271F] last:border-0 hover:bg-[#F0F5F0]"
            >
              <td className="px-6 py-4 font-medium text-[#1D271F]">
                {mar.market}
              </td>

              <td className="px-6 py-4 text-gray-600">
                {mar.division}
              </td>

              <td className="px-6 py-4 font-medium text-green-700">
                {mar.min} টাকা
              </td>

              <td className="px-6 py-4 font-medium text-red-600">
                {mar.max} টাকা
              </td>

              <td className="px-6 py-4 font-semibold text-[#1D271F]">
                {Number.isInteger(average)
                  ? average
                  : average.toFixed(2)}{" "}
                টাকা
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  </div>

  {data.markets.length === 0 && (
    <p className="px-6 py-8 text-center text-gray-500">
      কোনো বাজারের তথ্য পাওয়া যায়নি।
    </p>
  )}


            


        </div>


      </div>
    </div>
  );
};

export default ProductDetailsPage;