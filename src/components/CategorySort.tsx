
"use client";

import { useMemo, useState } from "react";
import CategoryProduct from "@/components/CategoryProduct";

interface IcategoryProduct {
  id: number;
  nameBn: string;
  categoryIcon: string;
  today: number;
  unit: string;
  change: {
    dir: "up" | "down" | "flat";
    pct: number;
  };
}

type SortOption = "default" | "low-to-high" | "high-to-low";

interface Props {
  products: IcategoryProduct[];
}

const CategorySort = ({ products }: Props) => {
  const [sortOption, setSortOption] =
    useState<SortOption>("default");

 
  const safeProducts = Array.isArray(products) ? products : [];

  const sortedProducts = useMemo(() => {
    const result = [...safeProducts];

    if (sortOption === "low-to-high") {
      result.sort((a, b) => a.today - b.today);
    } else if (sortOption === "high-to-low") {
      result.sort((a, b) => b.today - a.today);
    }

    return result;
  }, [safeProducts, sortOption]);

  return (
    <section className="mt-8 sm:mt-10">
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      

            <div className="w-full h-40 bg-white rounded-2xl">

          <div className=" pl-220 flex items-center gap-3 sm:w-auto  px-4 py-14">
          <label
            htmlFor="sort-products"
            className="shrink-0 text-sm font-medium text-gray-700"
          >
            সাজান:
          </label>

          <select
            id="sort-products"
            value={sortOption}
            onChange={(event) =>
              setSortOption(event.target.value as SortOption)
            }
            className=" min-w-0 flex-1 rounded-xl border border-gray-300 px-3 py-3 text-sm outline-none focus:border-[#05893E] sm:w-64 sm:flex-none"
          >
            <option value="default">ডিফল্ট</option>
            <option value="low-to-high">
              দাম: কম থেকে বেশি
            </option>
            <option value="high-to-low">
              দাম: বেশি থেকে কম
            </option>
          </select>
        </div>
  </div>
      </div>

      {sortedProducts.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 min-[420px]:grid-cols-2 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4">
          {sortedProducts.map((product) => (
            <CategoryProduct
              key={product.id}
              categoryProduct={product}
            />
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-gray-200 p-8 text-center">
          <p className="text-lg font-semibold text-gray-700">
            কোনো পণ্য পাওয়া যায়নি!
          </p>
        </div>
      )}
    </section>
  );
};

export default CategorySort;
