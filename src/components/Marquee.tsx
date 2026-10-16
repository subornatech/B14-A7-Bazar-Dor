
import MarqueeText from "react-marquee-text";
import baseUrl from "../Service/baseUrl";

interface Headlines {
  id: number;
  categoryIcon: string;
  nameBn: string;
  today: number;
  unit: string;
  change?: {
    dir: "up" | "down" | "flat";
    pct: number;
  };
}

const Marquee = async () => {
  const res = await fetch(`${baseUrl}/products`);
  const data = await res.json();

  const headlines: Headlines[] = Array.isArray(data) ? data : [];

  return (
    <div className="w-full overflow-hidden border-y border-gray-300 bg-[#FAFCFA] py-4 sm:py-3">
      <MarqueeText
        className="w-full"
        direction="right"
        duration={15}
        pauseOnHover={true}
      >
        {headlines.map((head) => (
          <div
            key={head.id}
            className="mx-3 inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap text-xs sm:mx-5 sm:gap-2 sm:text-sm lg:mx-6 lg:gap-2.5 lg:text-base"
          >  
            <span className="shrink-0">
              {head.categoryIcon}
            </span>
            <span className="font-medium text-gray-800">
              {head.nameBn}
            </span>
            <span className="font-semibold text-gray-900">
              ৳{head.today}/{head.unit}
            </span>
            <span
              className={
                head.change?.dir === "down"
                  ? "font-medium text-[#05893E]"
                  : head.change?.dir === "up"
                  ? "font-medium text-[#D03739]"
                  : "font-medium text-gray-600"
              }
            >
              {head.change?.dir === "up"
                ? "▲"
                : head.change?.dir === "down"
                ? "▼"
                : ""}
              {head.change?.pct ?? 0}%
            </span>
          </div>
        ))}
      </MarqueeText>
    </div>
  );
};

export default Marquee;
