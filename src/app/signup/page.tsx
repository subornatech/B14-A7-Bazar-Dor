"use client"


import { signUp } from "../../lib/auth-client";
import { redirect } from "next/navigation";

const SignUpPage = () => {
   
   const onSubmit = async(e:React.SubmitEvent<HTMLElement>) =>{
    e.preventDefault()

    const formData = new FormData(e.target)
    const user = Object.fromEntries(formData.entries()) as {name: string, email:string, image:string, password:string};
    // console.log(user);

    const {data, error} = await signUp.email({
        ...user,
        callbackURL: "/"
    })

    if(data){
        
        console.log(data)
        redirect("/")
    }
    if(error){
        console.log(error)
    }

   }    

    
    return (
        <div>

            <div className="text-center my-10">
                <h2 className="font-bold text-3xl">অ্যাকাউন্ট তৈরি করুন</h2>
            <p className="text-xl">বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।</p>
            </div>
        <div className="flex justify-center text-center">
              
            <form onSubmit={onSubmit}>

         <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xl  border p-4">
 

  <label className="label">নাম </label>
  <input type="name" name="name"  className="input w-full" placeholder="নাম লিখুন" />

  <label className="label">ছবির লিংক </label>
  <input type="url" name="image" className="input w-full" placeholder="ছবির লিংক দিন" />

  <label className="label">ইমেইল</label>
  <input type="email" name="email" className="input w-full" placeholder="ইমেইল ঠিকানা লিখুন" />

  <label className="label">পাসওয়ার্ড</label>
  <input type="password" name="password" className="input w-full h-12" placeholder="কমপক্ষে ৮ অক্ষর" />

  <button type="submit" className="btn bg-[#05893E] mt-4 text-white text-xl ">অ্যাকাউন্ট তৈরি করুন</button>
</fieldset>
            </form>
            
        </div>
        </div>
    );
};

export default SignUpPage;