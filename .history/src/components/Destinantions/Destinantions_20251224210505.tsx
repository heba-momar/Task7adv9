import React from 'react'
import Tittel from '../Tittel/Tittel'
import DestinantionsData from '@/data/DestinantionsData'
import DestinantionsCard from './DestinantionsCard'

const Destinantions = () => {
  return (
    <div className="max-w-[1800px] mx-auto">
    <div className="px-[4.1025641%] lg:px-[5.55555556%] xl:px-[13.0208333%] pt-[123px]  ">
    {DestinantionsData.map((item,index)=>{
     return(
    <DestinantionsCard key={index} image={item.image} title={item.title} person={item.person}
    des={item.desc} Available={item.Available}/>
        )
    })}
    </div>
    </div>
  )
}

export default Destinantions
