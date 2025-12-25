"use client";
import CountContainerData from "@/data/CountContainerData"
import CountUp from "react-countup"


const CountContainer = () => {
  return (
    <div className="flex flex-wrap xl:flex-nowrap justify-center items-center gap-10 sm:gap-[50px] py-10">
     {CountContainerData.map((count,index)=>{
        return(
       <div key={index} className="flex flex-col items-center w-[83px] sm:w-auto">
        <span className="text-[32px] sm:text-[40px] text-orange font-bold">
        <CountUp start={0} end={Number(count.number)} duration={5}/>  
        +  
        </span>
        <span className="text-center sm:text-start text-sm sm:text-base text-gray-600">  {count.desc} </span>
       </div>     
        )
     })} 
    </div>
  )
}

export default CountContainer
