import Banner from "@/components/Banner";
import PriceDown from "@/components/PriceDown";
import PriceUp from "@/components/PriceUp";



export default function Home() {
  return (
    <div className="bg-[#E1E8E1] max-w-7xl  mx-auto" >
      <Banner></Banner>
      <PriceUp></PriceUp>
      <PriceDown></PriceDown>
     

    </div>
   
  );
}
