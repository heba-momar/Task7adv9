"use client";
import { NavLinkData } from "@/data/NavLinkData";
import clsx from "clsx"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Auth from "./Auth";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [modalOpen, setModalOpen] = useState<boolean>(false); 
  const [scrolled, setScrolled] = useState(false);
  const [authType, setAuthType] = useState<"login" | "signup">("login");
      const pathname = usePathname();
        useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
    <nav className={clsx( "fixed z-51  left-1/2 -translate-x-1/2 flex justify-between items-center ",// Navbar Breakpoints (Responsive Horizontal Padding)
          "px-[4.1025641%] lg:px-[5.55555556%] xl:px-[13.0208333%]",// Navbar Breakpoints (Responsive Horizontal Padding)
          "transition-all duration-300 ease-in-out",// Transition Behavior
          {"bg-gradient-to-b from-black/100 to-black/100 shadow-md w-[100%] mt-5 rounded-4xl py-3": scrolled && !menuOpen, //Scrolled State 
            "bg-white/50 w-full py-5" : !scrolled || menuOpen})}>
        <img src="/images/navbar/logo.png" alt="Logo"  className="w-[45px] md:w-[90px] h-auto" />
      {menuOpen && (
        <div  className={clsx("flex flex-col gap-10 justify-center items-center z-51 lg:hidden", "fixed inset-0  h-screen w-screen",
                "bg-white")}>
        <ul className="flex flex-col  items-center gap-8 text-lg font-semibold">              
        {NavLinkData.map((item,index)=>{
            return(
        <li key={index}>
        <Link href={item.path} onClick={()=>setMenuOpen(false)}
         className={clsx ("transition-colors duration-300",
       pathname ===item.path? "border-b-2 border-b-orange pb-1 pr-2" : "text-black01")} >{item.name}</Link>    
        </li>
            )
        })}
         </ul> 
         <div className="flex flex-row md:flex-row  items-center gap-3  mt-0">
        <select className="appearance-none font-semibold text-lg" >
        <option value='en'>En</option>   
        <option value='arb'>Arb</option> 
        </select> 
        <button className="px-3 font-semibold text-lg lg:text-[20px] text-black cursor-pointer"
         onClick={() => { setAuthType("login"); setModalOpen(true); setMenuOpen(false) }}> Login</button>
         <button className="bg-orange py-2 px-11 rounded-[50px] text-white font-semibold text-lg lg:text-[20px] cursor-pointer"
         onClick={() => { setAuthType("signup"); setModalOpen(true); setMenuOpen(false) }}> Sign Up</button> 
       <button onClick={() => setMenuOpen(false)} aria-label="close menu">
         <img src="/images/navbar/close.svg" alt="Close" className="absolute top-5 right-5 w-6 h-6" /> </button>
         </div>
        </div>
      ) }

      <div className={clsx("hidden lg:block","lg:flex lg:flex-row items-center font-semibold text-lg lg:text-[20px]",)}>
     <ul className="flex flex-col md:flex-row items-center gap-4 lg:gap-10">
      {NavLinkData.map((item,index)=>{
        return(
       <li key={index}>
        <Link href={item.path} className={clsx("transition-colors duration-300 ", scrolled && "text-sm",
          pathname === item.path ? "text-white border-b-2 border-b-orange pb-1 pr-2" : "text-white")}>{item.name}</Link>
        </li>   
        )
      })}
     </ul>
      </div>

     <div className={clsx("hidden lg:block  items-center gap-4  mt-0",)}>
     <select className="appearance-none text-white/60  font-semibold  lg:text-[20px] cursor-pointer px-3">
         <option className="text-black">En</option>   
        <option className="text-black">Arb</option> 
          </select>

          <button className={clsx("px-3 font-semibold  text-white cursor-pointer",scrolled ? "text-base" : "text-lg lg:text-[20px]")}
            onClick={() => { setAuthType("login"); setModalOpen(true); }}> Login</button>

          <button className={clsx("bg-orange  font-semibold py-2 px-11 rounded-[50px]  text-white cursor-pointer hover:shadow-xl transition",scrolled ? "text-base" : "text-lg lg:text-[20px]")}
          onClick={() => { setAuthType("signup"); setModalOpen(true); }}>Sign Up</button>
        </div>

        <button className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
        <img src="/images/navbar/bars.svg" alt="Menu" className={clsx("transition duration-300", scrolled && "filter invert")} />
        </button>
    </nav>
        <Auth isOpen={modalOpen} onClose={() => setModalOpen(false)} type={authType}
        ToggleType={() => setAuthType(prev => prev === "login" ? "signup" : "login")}/>
    </>
  )
}

export default Navbar
