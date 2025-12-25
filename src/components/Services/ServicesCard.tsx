
interface ServicesCardProps{
 image:string,
 title:string,
 des:string   
}
const ServicesCard = ({image,title,des}:ServicesCardProps) => {
  return (
<div  className='flex flex-col gap-5 w-full lg:w-[330px]  '>
  <div className="overflow-hidden rounded-3xl ">
 <img src={image} alt={title} className='h-[302px] object-cover w-full  transform transition-transform duration-500 hover:scale-105' />
    </div>
      <h2 className='font-bold text-[24px] text-black01'>{title}</h2>
      <p className='text-lg text-black01 leading-[26px]'>{des}</p>
    </div>
  )
}

export default ServicesCard
