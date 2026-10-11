

import CategoryProduct from "@/components/CategoryProduct";
import baseUrl from "@/Service/baseUrl";


interface IcategoryProduct{
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

 type currentCategoryProp={
    slug:string,
    nameBn:string,
    icon:string
        
    }


interface CategoryProps{
    params:Promise<{categorySlug :string}>
} 

// type sortOption ="default" | "low-to-high" | "high-to-low"


const CategoryProductPage = async({params} : CategoryProps) => {
    const {categorySlug}= await params;
    

    const res = await fetch(`${baseUrl}/products?category=${categorySlug}`)
    const data = await res.json();
    const categoryProducts:IcategoryProduct[] = data;



    const response = await fetch(`${baseUrl}/categories`)
    const categoriesData:currentCategoryProp[] = await response.json();

    const currentCategory = categoriesData.find(c =>c.slug === categorySlug);




  

   

    // console.log(data);
    return (
        <div className="max-w-7xl mx-auto min-h-screen">
           
            <div className="bg-[#FAFCFA] mt-10 px-8 py-6 border-2 border-gray-300 rounded-2xl flex items-center gap-5 ">
                <p className="text-5xl">{currentCategory?.icon}</p>
               <div>
                 <span className="font-bold text-3xl ">{currentCategory?.nameBn}</span>
                <h1 className="text-lg">{categoryProducts.length}টি পণ্যের আজকের দাম ও পরিবর্তন</h1>
               </div>
              
            </div>
            <div className="grid grid-cols-3 gap-8 mt-20">
                {
                  categoryProducts.map((categoryProduct:IcategoryProduct)=>
                  <CategoryProduct categoryProduct={categoryProduct} 
                  key={categoryProduct.id}>
                  </CategoryProduct>)  
                }

            </div>
        </div>
    );
};

export default CategoryProductPage;