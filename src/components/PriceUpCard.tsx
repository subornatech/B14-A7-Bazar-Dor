
interface IpriceUpCard {
  image: string;
  nameBn: string;
  unit: string;
  today: number;
  change: {
    dir: "up" | "down";
    pct: number;
  };
}

const PriceUpCard = ({ priceUpD}: { priceUpD: IpriceUpCard;}) => {
  return (
    <div className="w-full min-w-0">
      <div className=" card h-full w-full
          rounded-2xl border border-gray-200
          bg-[#FAFCFA]
          p-4 shadow-sm
          transition-shadow duration-200
          hover:shadow-md
          sm:p-5
          md:p-6
        "  >  
        <div className="flex min-w-0 items-center gap-3 sm:gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#E1E8E1] sm:h-14 sm:w-14 md:h-16 md:w-16">
            <span className="text-2xl sm:text-3xl md:text-4xl">
              {priceUpD.image}
            </span>
          </div>
          <div className="min-w-0 flex-1">
            <h3 className=" text-base font-semibold text-gray-900 sm:text-lg md:text-xl">
              {priceUpD.nameBn}
            </h3>

            <p className="mt-1 text-xs text-gray-500 sm:text-sm">
              প্রতি {priceUpD.unit}
            </p>
          </div>
        </div>
        <div className="mt-5 flex flex-wrap items-end justify-between gap-3 border-t border-gray-200 pt-4 sm:mt-6">
          <div className="min-w-0">
            <p className="text-xs text-gray-500 sm:text-sm">
              আজকের দাম
            </p>

            <p className="mt-1  text-lg font-bold text-gray-900 sm:text-xl md:text-2xl">
              {priceUpD.today} টাকা
            </p>
          </div>

          {priceUpD.change?.dir === "up" && (
            <span className="shrink-0 rounded-full bg-red-100 px-2.5 py-1 text-xs font-semibold text-red-700 sm:px-3 sm:text-sm">
              ▲ {priceUpD.change.pct}%
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default PriceUpCard;
