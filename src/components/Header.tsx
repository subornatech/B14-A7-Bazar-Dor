import Image from 'next/image';
import NavLinks from './NavLinks';
import Marquee from './Marquee';
import UserInfo from './UserInfo';
import Link from 'next/link';


const Header = () => {
    const  date = new Date().toLocaleDateString("bn-BD",{dateStyle:"full"});
    return (
        <div className='bg-[#E1E8E1]'>
      
       <div>

         <div className='max-w-7xl mx-auto py-7 '>

           <div className='flex gap-155 justify-between '>


             <div className='flex gap-5'>

            <Link href={'/'}>
                <Image className='w-16 h-16 bg-[#05893E] rounded-3xl p-3  ' src={'/logo-icon.png'} width={100} height={100} alt="logo"></Image>
            </Link>  

            <div> 

                <h2 className='font-extrabold text-3xl'>বাজার দর</h2>
                <p className='text-base'>{date}</p>

            </div>

        



            </div>

          <UserInfo></UserInfo>
           </div>

           <NavLinks></NavLinks>
          
            
        </div>

         <Marquee></Marquee>







  </div>

  

       </div>
            
    
    );
};

export default Header;