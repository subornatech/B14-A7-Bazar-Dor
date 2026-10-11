import MarqueeText from "react-marquee-text";
import baseUrl from "../Service/baseUrl"

interface Headlines{
    id:number,
    categoryIcon:string,
    nameBn:string,
    today:number,
    unit:string,
    change?:{
        dir:"up" | "down"| "flat"
        pct:number
    }



}
const Marquee = async() => {
    const res = await fetch(`${baseUrl}/products`);
    const data = await res.json();
    const headlines : Headlines[] = data;
    // console.log(headlines)
    return (
        <div className="bg-[#FAFCFA] border border-gray-300 py-3">

           
              <MarqueeText className=""  direction='right' duration={10} pauseOnHover={true}>
                  {
                    headlines.map(head=><div key={head.id} className="flex gap-2">
                        <h1>{head.categoryIcon}</h1>
                        <span>{head.nameBn}</span> 
            
                        <span> ৳{head.today}/{head.unit}</span>
                       
                        <span className={ head.change?.dir === "down" ? 
                            "price-down text-[#05893E] " : head.change?.dir === "up" ? "price-up text-[#D03739]" : "price-flat text-gray-600" } > 
                            {head.change?.dir === "up" ? "▲" : head.change?.dir === "down" ? "▼" : ""}{" "}
                             {head.change?.pct ?? 0}% </span>
                              <span className="mx-5"></span>
                       


                    </div>)
                }
              </MarqueeText>
           
            
        </div>
    );
};

export default Marquee;