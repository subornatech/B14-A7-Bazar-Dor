
import baseUrl from "@/Service/baseUrl";
import PriceDownCard from "./PriceDownCard";

interface IPriceDown {
  id: number;
  image: string;
  nameBn: string;
  unit: string;
  today: number;
  change: {
    dir: "up" | "down";
    pct: number;
  };
}

const PriceDown = async () => {
  const res = await fetch(`${baseUrl}/products`);
  const data = await res.json();

  const products: IPriceDown[] = Array.isArray(data) ? data : [];

  const priceDownData = products
    .filter((priceD) => priceD.change?.dir === "down")
    .sort(
      (x, y) =>
        (x.change?.pct ?? 0) - (y.change?.pct ?? 0)
    )
    .slice(0, 6);

  return (
    <section className="mt-8 w-full sm:mt-10 md:mt-12">
      <div className="flex items-center gap-2">
        <span className="text-lg font-bold text-[#16A34A] sm:text-xl">
          ▼
        </span>

        <h2 className="text-xl font-bold sm:text-2xl">
          আজ দাম কমেছে
        </h2>
      </div>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:mt-5  sm:gap-5 ">
        {priceDownData.map((priceDownD) => (
          <PriceDownCard
            key={priceDownD.id}
            priceDownD={priceDownD}
          />
        ))}
      </div>
      {priceDownData.length === 0 && (
        <p className="mt-5 rounded-xl bg-white p-4 text-center text-sm text-gray-500 sm:text-base">
          আজ দাম কমেছে এমন কোনো পণ্য পাওয়া যায়নি।
        </p>
      )}
    </section>
  );
};

export default PriceDown;