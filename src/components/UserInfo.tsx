"use client"

import { authClient, useSession } from "@/lib/auth-client";
import Image from "next/image";

import Link from "next/link";
import { FaUser } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";

const UserInfo = () => {
    const {data:session }= useSession();
    const user =session?.user;

    const handleSignout = async()=>{
     
    await authClient.signOut();
     window.location.replace("/");



    }
    return (
        <div>
            
            {
                user ? 
              

                  <div className="dropdown dropdown-end">
                  <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                   <div className="w-20 rounded-full">
                        <Image width={400}
                        height={400}
                      alt="Tailwind CSS Navbar component"
                     src={user?.image as string} />
                   </div>
                   </div>
                        <ul
                   tabIndex={-1}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
          <li> <h1  className="flex justify-center text-sm  font-bold ">{user?.name as string}</h1>
           <h1  className="flex justify-center text-xs  text-[#1D271F] ">{user?.email as string}</h1>
          </li>
          
        <li>
             <Link className="flex gap-2 items-center  justify-center  sm:text-base md:text-lg text-[#1D271F]" href={"/profile"}><FaUser className="text-blue-300"  />আমার প্রোফাইল</Link>
        </li>
        
        <li>  <button onClick={handleSignout} className="btn text-[#D03739] flex items-center gap-2 text-lg "><FiLogOut size={20} />সাইন আউট</button></li>
      </ul>
    </div>

                
                  : 
                  <div className='flex  gap-4' >
                 <Link href={'/signin'}> <button className='btn btn-outline text-lg shadow-2xl'>সাইন ইন</button></Link>
               <Link href={'/signup'}> <button className='btn btn-active bg-[#05893E] sm:shadow-md text-white text-lg shadow-2xl'>সাইন আপ</button></Link>
            </div>
            }
             
            
        </div>
    );
};

export default UserInfo;


