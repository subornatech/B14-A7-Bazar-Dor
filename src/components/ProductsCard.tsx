
import Link from "next/link";

interface IproductsCard {
  id: number;
  slug: string;
  nameBn: string;
  image: string;
  change: {
    dir: "up" | "down" | "flat";
    pct: number;
  };
  unit: string;
  today: number;
}

const ProductsCard = ({
  allProduct,
}: {
  allProduct: IproductsCard;
}) => {
  return (
    <Link
      href={`/product/${allProduct.id}`}
      className="block w-full"
    >
      <div className="card h-full w-full rounded-xl bg-[#FAFCFA] p-4 shadow-sm transition-all duration-300 hover:shadow-md sm:p-5 md:p-6">
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#E1E8E1] text-2xl sm:h-14 sm:w-14 sm:text-3xl">
            {allProduct.image}
          </div>

          <div className="min-w-0 flex-1">
            <h3 className=" text-base font-semibold sm:text-lg md:text-xl">
              {allProduct.nameBn}
            </h3>

            <p className="mt-1 text-xs text-gray-500 sm:text-sm">
              {allProduct.unit}
            </p>
          </div>
        </div>

        {/* Price and Price Change */}
        <div className="mt-5 flex flex-wrap items-end justify-between gap-3 sm:mt-6">
          <div>
            <p className="text-xs text-gray-500 sm:text-sm">
              আজকের দাম
            </p>

            <p className="mt-1 text-lg font-bold sm:text-xl md:text-2xl">
              {allProduct.today} টাকা
            </p>
          </div>

          {allProduct.change?.dir === "up" && (
            <span className="whitespace-nowrap rounded-full bg-red-100 px-2.5 py-1 text-xs font-semibold text-red-700 sm:px-3 sm:text-sm">
              ▲ {allProduct.change.pct}%
            </span>
          )}

          {allProduct.change?.dir === "down" && (
            <span className="whitespace-nowrap rounded-full bg-green-100 px-2.5 py-1 text-xs font-semibold text-green-700 sm:px-3 sm:text-sm">
              ▼ {allProduct.change.pct}%
            </span>
          )}

          {allProduct.change?.dir === "flat" && (
            <span className="whitespace-nowrap rounded-full bg-gray-100 px-2.5 py-1 text-xs font-semibold text-gray-700 sm:px-3 sm:text-sm">
              − {allProduct.change.pct}%
            </span>
          )}
        </div>

      </div>
    </Link>
  );
};

export default ProductsCard;
