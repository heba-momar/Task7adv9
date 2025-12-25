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
           {/* Contacts */}  
           <div>
          <h3 className="font-extrabold mb-5 text-[20px]">Contact</h3>
        <ul className="flex flex-col items-center lg:items-start gap-2.5">
            {FooterData.Contact.map((contect,index)=>{
                return(
             <li key={index} className="flex items-start gap-3 text-sm">
             <Image src={contect.icon} alt="icon" width={20} height={20} className="w-auto h-auto" />
             <span>{contect.text}</span>
             </li>        
                )
            })}
            </ul>    
            </div>  
          {/* Social Media */}  
          <div>
           <h3 className="font-extrabold mb-5 text-[20px]">Social Media</h3>
         <div className="flex justify-center gap-6 ">
            {FooterData.Socials.map((Social,index)=>{
                return(
             <a key={index} href={Social.url}>
            <Image src={Social.icon} alt="social icon" width={50} height={50}
            className="hover:opacity-75 transition w-auto h-auto"></Image>    
             </a>       
                )
            })}
            </div>     
            </div>     
     </div>
     {/* Copyright */}
     <div className="text-center mt-6 text-sm text-white/70">
     {FooterData.footerCopyright[0].text}
       </div>   
        </div> 
    </div>
  )
}

export default Footer
