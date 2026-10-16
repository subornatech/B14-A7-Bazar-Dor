
import baseUrl from "@/Service/baseUrl";
import PriceUpCard from "./PriceUpCard";

interface IpriceUp {
  image: string;
  nameBn: string;
  id: number;
  unit: string;
  today: number;
  change: {
    dir: "up" | "down";
    pct: number;
  };
}

const PriceUp = async () => {
  const res = await fetch(`${baseUrl}/products`);
  const data = await res.json();

  const products: IpriceUp[] = Array.isArray(data) ? data : [];

  const priceUpData = products
    .filter((price) => price.change?.dir === "up")
    .sort(
      (x, y) =>
        (y.change?.pct ?? 0) - (x.change?.pct ?? 0)
    )
    .slice(0, 6);

  return (
    <section className="mt-8 w-full sm:mt-10 lg:mt-12">
      <div className="flex items-center gap-2">
        <span className="text-lg font-bold text-[#D03739] sm:text-xl">
          ▲
        </span>

        <h2 className="text-xl font-bold sm:text-2xl">
          আজ দাম বেড়েছে
        </h2>
      </div>
      <div className="mt-4 grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4 sm:mt-5  sm:gap-5  lg:gap-5">
        {priceUpData.map((priceUpD) => (
          <PriceUpCard
            key={priceUpD.id}
            priceUpD={priceUpD}
          />
        ))}
      </div>

      {priceUpData.length === 0 && (
        <p className="mt-5 rounded-xl bg-white p-4 text-center text-sm text-gray-500 sm:text-base">
          আজ দাম বেড়েছে এমন কোনো পণ্য পাওয়া যায়নি।
        </p>
      )}
    </section>
  );
};

export default PriceUp;