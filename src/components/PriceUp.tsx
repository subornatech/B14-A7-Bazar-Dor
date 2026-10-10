import PriceUpCard from "./PriceUpCard";
interface IpriceUp{
    image:string,
    nameBn:string,
    id:number
    unit:string,
    today:number,
    change:{
        dir:"up"| "down"
        pct:number
    }

}


const PriceUp = async() => {
    const res = await fetch("https://api.abcz.workers.dev/api/bazardor/products");
    const data =await res.json();
    const priceUp = data;
     const priceUpData:IpriceUp[] = priceUp.filter((priceU :IpriceUp) => priceU.change.dir === "up")
     .sort( (x:IpriceUp, y:IpriceUp) => (y.change?.pct ?? 0) - (x.change?.pct ?? 0) )
      .slice(0, 6);
    //  console.log(priceUpData);
    return (
        <div className="mt-12">
           <div className='flex gap-2 items-center'>
            <span className='text-[#D03739]'>▲</span>
             <h1 className="font-bold text-2xl">আজ দাম বেড়েছে</h1>
           </div>

            <div className="grid grid-cols-3 gap-5 mt-5 space-y-3">

                {
                    priceUpData.map((priceUpD:IpriceUp)=><PriceUpCard key={priceUpD.id} priceUpD={priceUpD}></PriceUpCard>)
                }

            </div>
        </div>
    );
};

export default PriceUp;