import baseUrl from "@/Service/baseUrl";
import ProductsCard from "./ProductsCard";


interface Iallproducts {
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


const AllProducts =async () => {
    const res = await fetch(`${baseUrl}/products`);
    const data = await res.json();
    const allProducts :Iallproducts[] = data;
    // console.log(allProducts);
  
    return (
     
       
        <div className="mt-12">

            <div className="space-y-2 ">
                <h1 className="font-bold text-2xl">সব পণ্য</h1>
                <p>মোট {allProducts.length}টি পণ্য দেখানো হচ্ছে</p>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6  mt-6">
                    {
                        allProducts.map((allProduct:Iallproducts)=><ProductsCard key={allProduct.id} allProduct={allProduct}></ProductsCard>)
                    }
                </div>
            </div>
            
        </div>
       
      
    );
};

export default AllProducts;