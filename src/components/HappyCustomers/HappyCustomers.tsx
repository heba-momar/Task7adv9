import HappyCustomersData from "@/data/HappyCustomersData"
import Slider from "../Slider/Slider"
import HappyCustomersCard from "./HappyCustomersCard"


const HappyCustomers = () => {
  return (
    <div className="max-w-[1800px] mx-auto mb-[160px]">
      <div className="px-[4.1025641%] lg:px-[5.55555556%] xl:px-[13.0208333%] pt-[120px]">
        <div className="flex flex-col lg:flex-row  gap-5">
          <Slider defaultItemsToShow={2} tittel="Happy Customers Says">
          {HappyCustomersData.map((Custom,index)=>{
            return(
           <HappyCustomersCard  key={index} image={Custom.image} name={Custom.name}des={Custom.des} />     
            )
          })}
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default HappyCustomers
