
interface AdvantagesCardProps {
  icon: string;
  des: string;
}
const AdvantagesCard = ({icon,des}: AdvantagesCardProps) => {
  return (
 <div className='bg-white/30 p-[30px] flex flex-col gap-[15px] rounded-3xl items-center'>
 <img src={icon} width={60} height={60} alt="icon" />
   <p className='font-semibold text-[20px] text-center '>{des}</p>
    </div>
  )
}

export default AdvantagesCard
