import Link from "next/link";

 interface IproductsCard{
    id:number,
    slug:string,
    nameBn:string,
    image:string,
    change:{ 
        dir:"up" | "down" |"flat"
        pct:number,
    } ,
    unit:string,
    today:number,

}

const ProductsCard = ({allProduct} :{allProduct:IproductsCard}) => {
    return (
           
         <Link href={`/product/${allProduct.id}`}>
         
            <div className=' w-104  '>

         <div className='card bg-[#FAFCFA] px-4 py-8  h-46'>

          <div className="flex gap-4 items-center">
              <div>
               <span className="bg-[#E1E8E1] px-3  rounded-xl text-4xl ">{allProduct.image}</span>
            </div>
            <div>

            </div>
            <div>
                <span className="text-2xl font-semibold">{allProduct.nameBn}</span>
                <p>{allProduct.unit}</p>

            </div>
          </div> 

              <div className="mt-3 flex flex-wrap items-center justify-between gap-2"> 
                <div className="pt-6">
                     <p className="text-sm text-gray-500">আজকের দাম</p> 
                     <p className="text-xl font-bold"> {allProduct.today} টাকা </p> 
                     </div> 
                     {allProduct.change?.dir === "up" && (
                    <span className="rounded-full bg-red-100 px-3 py-1 text-sm font-semibold text-red-700">
                  ▲ {allProduct.change?.pct ?? 0}%
                     </span>
                    )}
                     {allProduct.change?.dir === "down" && (
                    <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">
                  ▼{allProduct.change?.pct ?? 0}%
                     </span>
                    )}
                     {allProduct.change?.dir === "flat" && (
                    <span className="rounded-full bg-gray-100 px-3 py-1 text-sm font-semibold text-gray-700">
                  -{allProduct.change?.pct ?? 0}%
                     </span>
                    )}

              
                        


                     </div>


         </div>
            
        </div>
         
         </Link>
    );
};

export default ProductsCard;