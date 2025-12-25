interface TittelProps{
    tittel:string
}

const Tittel = ({tittel}:TittelProps) => {
  return (
    <div  className='text-xl lg:text-[32px] font-extrabold text-black01 pb-[60px]'>
     {tittel} 
    </div>
  )
}

export default Tittel
