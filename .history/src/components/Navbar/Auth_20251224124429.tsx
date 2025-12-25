
interface AuthProps{
isOpen:boolean
}

const Auth= ({ isOpen }:AuthProps) => {
return(
  {isOpen &&(
   <div className="fixed inset-0 z-[999] bg-black01/80 flex items-center justify-center">
   <div>

   </div>
 </div> 
  )}
)
}
export default Auth
