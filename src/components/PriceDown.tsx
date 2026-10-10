import PriceDownCard from "./PriceDownCard";

interface IPriceDown {
    id:number,
    image:string,
    nameBn:string
    unit:string,
    today:number,
    change:{
        dir:"up"| "down"
        pct:number
    }
}


const PriceDown = async() => {
    const  res = await fetch('https://api.abcz.workers.dev/api/bazardor/products');
    const data =await res.json();
    const priceDown:IPriceDown[]= data;
    // console.log (priceDownData);

    const priceDownData : IPriceDown[] = priceDown.filter(priceD=> priceD.change.dir === "down")
      .sort( (x:IPriceDown, y:IPriceDown) => (x.change?.pct ?? 0) - (y.change?.pct ?? 0) )
      .slice(0, 6);
    return (
        <div>
               <div className="mt-12">
           <div className='flex gap-2 items-center'>
            <span className='text-[#16A34A]'>▼</span>
             <h1 className="font-bold text-2xl">আজ দাম কমেছে</h1>
           </div>

            <div className="grid grid-cols-3 gap-5 mt-5 space-y-3">

                {
                    priceDownData.map((priceDownD:IPriceDown)=><PriceDownCard key={priceDownD.id} priceDownD={priceDownD}></PriceDownCard>)
                }

            </div>
        </div>
            
        </div>
    );
};

export default PriceDown;