import { clsx } from "clsx"

interface AuthProps{
isOpen:boolean;
}

const Auth = ({isOpen}:AuthProps) => {
  return (
  isOpen && ( 
    <div className="fixed inset-0 z-[999] bg-black01/80 flex items-center justify-center">
    <div className={clsx(" py-7 px-7 lg:py-10 lg:px-[59px]","relative rounded-3xl max-w-md w-[90%]",
      "bg-white shadow-[0px_4px_20px_0px_#FFFFFF40]")}>

    </div>
    </div>
  ) 
  )
}

export default Auth
