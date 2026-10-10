
interface IpriceUpCard{
    
    image:string,
    nameBn:string,
    unit:string,
    today:number,
    change:{
        dir:"up"| "down"
        pct:number
    }

}

const PriceUpCard = ({priceUpD}: {priceUpD:IpriceUpCard}) => {
    // console.log(priceUpD);
    return (
        <div className=' w-104  '>

         <div className='card bg-[#FAFCFA] px-4 py-8  h-46'>

          <div className="flex gap-4 items-center">
              <div>
               <span className="bg-[#E1E8E1] px-3  rounded-xl text-4xl ">{priceUpD.image}</span>
            </div>
            <div>

            </div>
            <div>
                <span className="text-2xl font-semibold">{priceUpD.nameBn}</span>
                <p>{priceUpD.unit}</p>

            </div>
          </div> 

              <div className="mt-3 flex flex-wrap items-center justify-between gap-2"> 
                <div className="pt-6">
                     <p className="text-sm text-gray-500">আজকের দাম</p> 
                     <p className="text-xl font-bold"> {priceUpD.today} টাকা </p> 
                     </div> 
                     {priceUpD.change?.dir === "up" && (
                    <span className="rounded-full bg-red-100 px-3 py-1 text-sm font-semibold text-red-700">
                  ▲ {priceUpD.change?.pct ?? 0}%
                     </span>
                    )}
                        
                     </div>


         </div>
            
        </div>
    );
};

export default PriceUpCard;