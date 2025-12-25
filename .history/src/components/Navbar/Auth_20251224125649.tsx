import { clsx } from "clsx"
import Image from "next/image";

interface AuthProps{
isOpen:boolean;
type: "login" | "signup";
 onClose: () => void;
}

const Auth = ({isOpen,type,onClose}:AuthProps) => {
  return (
  isOpen && ( 
    <div className="fixed inset-0 z-[999] bg-black01/80 flex items-center justify-center">
    <div className={clsx(" py-7 px-7 lg:py-10 lg:px-[59px]","relative rounded-3xl max-w-md w-[90%]",
      "bg-white shadow-[0px_4px_20px_0px_#FFFFFF40]")}>
     {/* Header with title and close button */}
     <div className="flex justify-between items-center mb-2 lg:mb-6">
     <h2 className="text-[32px] font-bold">{type === "login" ? "Login" : "Create Account"}</h2>
     <button onClick={onClose}>
      <Image src="/images/navbar/authPopUp/close.svg" alt="Close" width={12} height={12} className="cursor-pointer" />
            </button>
          </div>    

    </div>


    </div>
  ) 
  )
}

export default Auth
