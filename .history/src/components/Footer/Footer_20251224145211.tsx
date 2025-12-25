import FooterData from "@/data/FooterData"
import Image from "next/image"
import Link from "next/link"


const Footer = () => {
  return (
    <div className="bg-black01 text-white py-10 px-[4.1025641%] lg:px-[5.55555556%] xl:px-[13.0208333%] ">
     <div className="max-w-[1800px] mx-auto ">
    <div className="flex justify-center lg:justify-start">
   {FooterData.Logo.map((item,index)=>{
    return(
 <Image key={index} src={item.logo} alt="Footer Logo" width={133} height={130}
   className="object-contain w-auto h-auto"/>
    )
   })}
    </div>
     <div className="flex text-center lg:text-start lg:justify-between flex-col lg:flex-row  gap-10 lg:gap-0 flex-wrap border-y border-white/10 py-[33px] my-[33px]">
       {/* Services */}
        <div>
     <h3 className="font-extrabold mb-5 text-[20px]">Services</h3>
     <ul className="flex flex-col gap-2.5">
    {FooterData.Services.map((serve,index)=>{
        return(
    <li key={index} className="text-sm cursor-pointer">{serve}</li>        
        )
    })}  
           </ul>
        </div>
          {/*Home */}
          <div>
     <h3 className="font-extrabold mb-5 text-[20px]">Services</h3>
     <ul className="flex flex-col gap-2.5">
     {FooterData.Home.map((home,index)=>{
     return(
     <li key={index} >
        <Link href={home.href} className="text-sm cursor-pointer">{home.label}</Link>
     </li>       
     )
     })}   
        </ul>      
          </div>
           {/* help */}  
           <div>
      <h3 className="font-extrabold mb-5 text-[20px]">Help</h3>
     <ul className="flex flex-col gap-2.5">
        {FooterData.Help.map((help,index)=>{
            return(
        <li key={index} className="text-sm cursor-pointer">{help}</li>         
            )
        })}
        </ul>    
           </div>
     </div>
        </div> 
    </div>
  )
}

export default Footer
