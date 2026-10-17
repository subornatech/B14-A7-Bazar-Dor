import CategorySort from "@/components/CategorySort";
import baseUrl from "@/Service/baseUrl";
import Link from "next/link";
import { FiArrowLeft, FiHome } from "react-icons/fi";

interface IcategoryProduct {
  id: number;
  nameBn: string;
  categoryIcon: string;
  today: number;
  categoryNameBn: string;
  unit: string;
  change: {
    dir: "up" | "down" | "flat";
    pct: number;
  };
}

interface CategoryProductPageProps {
  params: Promise<{
    categorySlug: string;
  }>;
}

const CategoryProductPage = async ({
  params,
}: CategoryProductPageProps) => {
  const { categorySlug } = await params;

  const res = await fetch(
    `${baseUrl}/products?category=${(categorySlug)}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("পণ্যের তথ্য লোড করা যায়নি");
  }

  const data = await res.json();

  const categoryProducts: IcategoryProduct[] = Array.isArray(data)
    ? data
    : [];

  return (
    <main className="mx-auto min-h-screen w-full max-w-7xl px-3 py-5 sm:px-5 sm:py-6 md:px-6 lg:px-8 lg:py-8 ">
       <Link href="/" className="inline-flex items-center gap-2 rounded-lg bg-[#05893E] px-5 py-3 text-white transition hover:bg-[#047532] mb-10" >
      <FiArrowLeft size={20} />
      <span>হোম পেজে ফিরে যান</span>
      </Link>
      <div className="mb-5 flex w-full items-center gap-3 rounded-xl border border-gray-200 bg-white p-4 shadow-sm sm:gap-4 sm:p-5 md:rounded-2xl md:p-6 lg:mb-6">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-3xl sm:h-16 sm:w-16 md:h-20 md:w-20 md:text-4xl">
          {categoryProducts[0]?.categoryIcon}
        </div>

        <div className="min-w-0 flex-1">
          <h1 className=" text-lg font-bold text-gray-800 sm:text-xl md:text-2xl lg:text-3xl">
            {categoryProducts[0]?.categoryNameBn || categorySlug}
          </h1>

          <p className="mt-1 text-xs leading-5 text-gray-500 sm:text-sm md:mt-2 md:text-base">
            মোট {categoryProducts.length} টি পণ্যের আজকের দাম ও পরিবর্তন
          </p>
        </div>
      </div>

    
      <CategorySort products={categoryProducts} />
    </main>
  );
};

export default CategoryProductPage;