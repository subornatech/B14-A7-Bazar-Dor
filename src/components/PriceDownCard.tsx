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

const PriceDownCard = ({priceDownD}:{priceDownD: IPriceDown}) => {
    return (
        <div>
             <div className=' w-104  '>

         <div className='card bg-[#FAFCFA] px-4 py-8  h-46'>

          <div className="flex gap-4 items-center">
              <div>
               <span className="bg-[#E1E8E1] px-3  rounded-xl text-4xl ">{priceDownD.image}</span>
            </div>
            <div>

            </div>
            <div>
                <span className="text-2xl font-semibold">{priceDownD.nameBn}</span>
                <p>{priceDownD.unit}</p>

            </div>
          </div> 

              <div className="mt-3 flex flex-wrap items-center justify-between gap-2"> 
                <div className="pt-6">
                     <p className="text-sm text-gray-500">আজকের দাম</p> 
                     <p className="text-xl font-bold"> {priceDownD.today} টাকা </p> 
                     </div> 
                     {priceDownD.change?.dir === "down" && (
                    <span className="rounded-full bg-red-100 px-3 py-1 text-sm font-semibold text-green-700">
                  ▲ {priceDownD.change?.pct ?? 0}%
                     </span>
                    )}
                        
                     </div>


         </div>
            
        </div>
            
        </div>
    );
};

export default PriceDownCard;