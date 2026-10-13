"use client"

import { signIn } from "@/lib/auth-client";


const SignInPage = () => {
    const onSubmit = async(e: React.SubmitEvent<HTMLElement>)=>{
        e.preventDefault();

        const  formData = new FormData(e.target)
        const user = Object.fromEntries(formData.entries()) as {email:string, password:string}; 

        const {data, error} = await signIn.email({
            ...user,
            callbackURL:'/'
        })

        if(data){
            console.log(data);

        } 

        if(error){
            console.log(error);
        }
    } 

    const handleGoogleSignIn = async()=>{
        const data =await signIn.social({
            provider:'google'

        });
        console.log(data)
    } 

    const handleGithubSignIn = async () => {
    const data = await signIn.social({
        provider: "github"
    }) 
    console.log(data)
}

    return (
      <div>
         <div className="text-center my-10">
         <h2 className="font-bold text-3xl">সাইন ইন</h2>
         <p className="text-xl">বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।</p>
        </div>

        <div className="flex justify-center text-center">
              
            <form onSubmit={onSubmit}>
         <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-lg h-86 border p-4  py-5">
         <label className="label py-1 text-base">ইমেইল</label>
        <input type="email" name="email" className="input w-lg h-14" placeholder="ইমেইল ঠিকানা লিখুন" />

         <label className="label py-1 text-base">পাসওয়ার্ড</label>
          <input type="password" name="password" className="input w-lg h-14" placeholder="কমপক্ষে ৮ অক্ষর" />

           <button className="btn bg-[#05893E] mt-7 text-white text-xl h-14 shadow-xl">অ্যাকাউন্ট তৈরি করুন</button>
           </fieldset>

           <div className="flex gap-3">
            <button onClick={handleGoogleSignIn} className="btn">SignIn With Google</button>
            <button onClick={handleGithubSignIn} className="btn">SignIn With GitHub</button>
           </div>
            </form>
            
        </div>
        </div>
    );
};

export default SignInPage;