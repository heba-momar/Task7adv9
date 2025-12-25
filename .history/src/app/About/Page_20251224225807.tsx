import Hero from "@/components/Hero/Hero";
import WelcomeSite from "@/components/WelcomeSite/WelcomeSite";
import WelcomeSiteAbout from "@/data/WelcomeSiteAbout";

export default function About(){
  return(
   <>
    <Hero image="/images/hero/2.webp" showContent={false} />
    <WelcomeSite data={WelcomeSiteAbout[0]}/>
   </> 
  )
}


