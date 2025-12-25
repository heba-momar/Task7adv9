import ServicesData from "@/data/ServicesData"
import ServicesCard from "./ServicesCard"


const Services = () => {
  return (
    <div className="max-w-[1800px] mx-auto">
      <div className="flex flex-col lg:flex-row gap-[33px] px-[4.1025641%] lg:px-[5.55555556%] xl:px-[13.0208333%] pt-[120px]">
     {ServicesData.map((servce,index)=>{
        return(
        <ServicesCard key={index} image={servce.image} title={servce.title} des={servce.des}/>    
        )
     })}
      </div>
    </div>
  )
}

export default Services
