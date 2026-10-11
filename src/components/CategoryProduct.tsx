
interface IcategoryProduct {
        id:number,
      nameBn:string,
    categoryIcon:string,
    today:number,
    unit:string,
    change:{
        dir:"up"|"down"|"flat"
        pct:number

    }
}

const CategoryProduct = ({categoryProduct}:{categoryProduct:IcategoryProduct}) => {
    return (
      
                 <div className=' w-104  '>

         <div className='card bg-[#FAFCFA] px-4 py-8  h-46'>

          <div className="flex gap-4 items-center">
              <div>
               <span className="bg-[#E1E8E1] px-3  rounded-xl text-4xl ">{categoryProduct.categoryIcon}</span>
            </div>
            <div>

            </div>
            <div>
                <span className="text-2xl font-semibold">{categoryProduct.nameBn}</span>
                <p className="text-base">প্রতি {categoryProduct.unit}</p>

            </div>
          </div> 

              <div className="mt-3 flex flex-wrap items-center justify-between gap-2"> 
                <div className="pt-6">
                     <p className="text-base text-gray-700">আজকের দাম</p> 
                     <p className="text-xl font-bold"> {categoryProduct.today} টাকা </p> 
                     </div> 


         
              {categoryProduct.change?.dir === "up" && (
                    <span className="rounded-full bg-red-100 px-3 py-1 text-sm font-semibold text-red-700">
                  ▲ {categoryProduct.change?.pct ?? 0}%
                     </span>
                    )}
                     {categoryProduct.change?.dir === "down" && (
                    <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">
                  ▼{categoryProduct.change?.pct ?? 0}%
                     </span>
                    )}
                     {categoryProduct.change?.dir === "flat" && (
                    <span className="rounded-full bg-gray-100 px-3 py-1 text-sm font-semibold text-gray-700">
                  -{categoryProduct.change?.pct ?? 0}%
                     </span>
                    )}
        </div>
        </div>
        </div>
    );
};

export default CategoryProduct;