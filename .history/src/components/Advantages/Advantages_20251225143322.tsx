import AdvantagesData from "@/data/AdvantagesData"
import AdvantagesCard from "./AdvantagesCard"


const Advantages = () => {
  return (
    <div className="bg-gradient-to-b from-orange-100 via-orange-200 to-orange-300  mt-[120px] py-[83px] px-[4.1025641%] lg:px-[5.55555556%] mb-[160px]">
     <div className="mx-auto  max-w-[1600px] flex flex-col lg:flex-row gap-[83px]">
      {AdvantagesData.map((adv,index)=>{
        return(
        <AdvantagesCard key={index} icon={adv.icon} des={adv.des}/>    
        )
      })}  
        </div> 
    </div>
  )
}

export default Advantages
