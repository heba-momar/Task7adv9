import FooterData from "@/data/FooterData"
import Image from "next/image"


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
        </div> 
    </div>
  )
}

export default Footer
