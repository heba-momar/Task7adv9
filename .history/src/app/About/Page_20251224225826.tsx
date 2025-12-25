import Hero from "@/components/Hero/Hero";
import WelcomeSite from "@/components/WelcomeSite/WelcomeSite";
import WelcomeSiteAbout from "@/data/WelcomeSiteAbout";

export default function About(){
  return(
   <>
    <Hero image="/images/hero/2.webp" showContent={false} />
    <WelcomeSite data={WelcomeSiteAbout[0]}   className="w-[600px] h-[500px] xl:w-[600px] xl:h-[516px] py-[21.5px] px-[25px] border border-[#EFEFEF] rounded-3xl"/>
   </> 
  )
}


