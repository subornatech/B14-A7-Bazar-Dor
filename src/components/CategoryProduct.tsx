
// interface IcategoryProduct {
//   id: number;
//   nameBn: string;
//   categoryIcon: string;
//   today: number;
//   unit: string;
//   change: {
//     dir: "up" | "down" | "flat";
//     pct: number;
//   }
// }

// interface CategoryProductProps {
//   categoryProduct: IcategoryProduct;
// }

// const CategoryProduct = ({
//   categoryProduct
// }: CategoryProductProps) => {
//   const { nameBn, categoryIcon, today, unit, change } =
//     categoryProduct;

//   return (
//     <div className="w-full min-w-0">
//       <div className="h-full rounded-2xl border border-[#E5EBE5] bg-[#FAFCFA] p-4 transition-all duration-200 hover:-translate-y-1 hover:border-[#05893E]/30 hover:shadow-md sm:p-5 lg:p-6">
     
//         <div className="flex items-center gap-3 sm:gap-4">
//           <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#E1E8E1] text-3xl sm:h-14 sm:w-14 sm:text-4xl">
//             <span role="img" aria-label={nameBn}>
//               {categoryIcon}
//             </span>
//           </div>

//           <div className="min-w-0 flex-1">
//             <h3 className="truncate text-lg font-semibold text-gray-800 sm:text-xl">
//               {nameBn}
//             </h3>

//             <p className="mt-1 text-sm text-gray-500 sm:text-base">
//               প্রতি {unit}
//             </p>
//           </div>
//         </div>

     
//         <div className="mt-5 flex flex-wrap items-end justify-between gap-3 border-t border-gray-200 pt-4">
//           <div className="min-w-0">
//             <p className="text-sm text-gray-600">
//               আজকের দাম
//             </p>

//             <p className="mt-1 break-words text-xl font-bold text-[#05893E] sm:text-2xl">
//               {today.toLocaleString("bn-BD")} টাকা
//             </p>
//           </div>

//           <span
//             className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-semibold sm:px-3 sm:text-sm ${
//               change.dir === "up"
//                 ? "bg-red-100 text-red-700"
//                 : change.dir === "down"
//                   ? "bg-green-100 text-green-700"
//                   : "bg-gray-100 text-gray-700"
//             }`}
//           >
//             {change.dir === "up"
//               ? "▲"
//               : change.dir === "down"
//                 ? "▼"
//                 : "—"}{" "}
//             {change.pct}%
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CategoryProduct;



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

interface CategoryProductProps {
  categoryProduct: IcategoryProduct;
}

const CategoryProduct = ({
  categoryProduct,
}: CategoryProductProps) => {
  const { nameBn, categoryIcon, today, unit, change } =
    categoryProduct;

  return (
    <article className="w-full min-w-0">
      <div className="h-full rounded-2xl border border-[#E5EBE5] bg-[#FAFCFA] p-4 transition-all duration-200 hover:-translate-y-1 hover:shadow-md sm:p-5 lg:p-6">
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#E1E8E1] text-3xl sm:h-14 sm:w-14 sm:text-4xl">
            <span role="img" aria-label={nameBn}>
              {categoryIcon}
            </span>
          </div>

          <div className="min-w-0 flex-1">
            <h3 className="truncate text-lg font-semibold text-gray-800 sm:text-xl">
              {nameBn}
            </h3>

            <p className="mt-1 text-sm text-gray-500 sm:text-base">
              প্রতি {unit}
            </p>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap items-end justify-between gap-3 border-t border-gray-200 pt-4">
          <div className="min-w-0">
            <p className="text-sm text-gray-600">আজকের দাম</p>

            <p className="mt-1 text-xl font-bold text-[#05893E] sm:text-2xl">
              {today.toLocaleString("bn-BD")} টাকা
            </p>
          </div>

          <span
            className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-semibold sm:px-3 sm:text-sm ${
              change.dir === "up"
                ? "bg-red-100 text-red-700"
                : change.dir === "down"
                  ? "bg-green-100 text-green-700"
                  : "bg-gray-100 text-gray-700"
            }`}
          >
            {change.dir === "up"
              ? "▲"
              : change.dir === "down"
                ? "▼"
                : "—"}{" "}
            {change.pct}%
          </span>
        </div>
      </div>
    </article>
  );
};

export default CategoryProduct;
