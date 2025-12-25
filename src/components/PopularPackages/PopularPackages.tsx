import PopularPackagesData from "@/data/PopularPackagesData"
import Tittel from "../Tittel/Tittel"
import PopularPackagesCard from "./PopularPackagesCard"


const PopularPackages = () => {
  return (
    <div className="max-w-[1800px] mx-auto">
    <div className="px-[4.1025641%] lg:px-[5.55555556%] xl:px-[13.0208333%] pt-[120px]">
     <Tittel tittel="The Most Popular Packages"/>   
     <div className="flex flex-col lg:flex-row gap-5">
    {PopularPackagesData.map((Package,index)=>{
        return(
      <PopularPackagesCard key={index} image={Package.images} title={Package.title}
      price={Package.price} features={Package.features}/>      
        )
    })}
     </div>
        </div>  
    </div>
  )
}

export default PopularPackages
