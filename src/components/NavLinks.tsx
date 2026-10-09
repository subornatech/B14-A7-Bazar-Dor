

import Link from 'next/link';

interface Navs{
    id:string,
    slug:string,
    icon:string,
    nameBn:string,

}

const NavLinks =async () => {
    const res = await fetch('https://api.abcz.workers.dev/api/bazardor/categories')
    const data = await res.json()
    const navsData:Navs[] = data;
   
    return (
        <div className=''>

            <div className='flex gap-10  my-10 ml-10'>
                {
                    navsData.map(nav=><Link href={nav.id} key={nav.slug}>
                       <div className='flex justify-center items-center gap-1'>
                         <h1>{nav.icon}</h1>
                        <p>{nav.nameBn}</p>
                       </div>
                    
                    </Link>)

                }
            </div>
            
        </div>
    );
};

export default NavLinks;