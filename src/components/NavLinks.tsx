

import baseUrl from '@/Service/baseUrl';
import Link from 'next/link';

interface Navs{
    id:string,
    slug:string,
    icon:string,
    nameBn:string,

}

const NavLinks =async () => {
    const res = await fetch(`${baseUrl}/categories`)
    const data = await res.json()
    const navsData:Navs[] = data;
   
    return (
        <div className=''>

            <div className='flex gap-12  my-10 ml-10'>
                {
                    navsData.map((nav,i)=>
                        <Link href={`/category/${nav.slug} `} key={i}>
                       <div className='flex justify-center items-center gap-1'>
                         <h1 className='text-xl'>{nav.icon}</h1>
                        <p className='text-xl'>{nav.nameBn}</p>
                       </div>
                    
                    </Link>
                   )

                }
            </div>
            
        </div>
    );
};

export default NavLinks;