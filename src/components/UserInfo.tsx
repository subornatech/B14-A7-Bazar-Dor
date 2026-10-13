"use client"

import { authClient, useSession } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";

const UserInfo = () => {
    const {data:session }= useSession();
    const user =session?.user;

    const handleSignout = async()=>{
        await authClient.signOut();

    }
    return (
        <div>
            
            {
                user? <div>
                    <div className="avatar">
                    <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring-2 ring-offset-2">
                      <Image className="w-24 h-24" width={100} height={100} alt="image" src={user?.image as string} />
                      </div>
                       </div>
                    
                     <span>{user?.name as string}</span>
                    <button onClick={handleSignout} className="btn ">সাইন আউট</button></div>: <div className='flex  gap-4' >
                 <Link href={'/signin'}> <button className='btn'>সাইন ইন</button></Link>
               <Link href={'/signup'}> <button className='btn bg-[#05893E] shadow-md text-white'>সাইন আপ</button></Link>
            </div>
            }
             
            
        </div>
    );
};

export default UserInfo;