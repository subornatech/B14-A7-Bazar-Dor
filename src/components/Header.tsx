import Image from 'next/image';
import NavLinks from './NavLinks';


const Header = () => {
    const  date = new Date().toLocaleDateString("bn-BD",{dateStyle:"full"});
    return (
        <div>
      
   <div className='max-w-7xl mx-auto mt-7 '>

           <div className='flex gap-155 justify-between '>


             <div className='flex gap-5'>

            <div>
                <Image className='w-16 h-16 ' src={'/Stack.png'} width={100} height={100} alt="logo"></Image>
            </div>  

            <div> 

                <h2 className='font-extrabold text-3xl'>বাজার দর</h2>
                <p className='text-base'>{date}</p>

            </div>

        



            </div>

            <div className='flex  gap-4' >
                <button className='btn'>সাইন ইন</button>
                <button className='btn bg-[#05893E] shadow-md text-white'>সাইন আপ</button>
            </div>
           </div>

           <NavLinks></NavLinks>
            
        </div>

  

       </div>
            
    
    );
};

export default Header;