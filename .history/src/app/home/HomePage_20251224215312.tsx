import Destinantions from "@/components/Destinantions/Destinantions"
import Hero from "@/components/Hero/Hero"
import WelcomeSite from "@/components/WelcomeSite/WelcomeSite"
import WelcomeSiteHome from "@/data/WelcomeSiteHome"



const HomePage = () => {
  return (
    <>
  <Hero image="/images/hero/1.webp" showContent={true}/>
  <Destinantions/>
  <WelcomeSite data={WelcomeSiteHome[0]} className="-[300px] h-[500px] xl:w-[450px] xl:h-[650px]"/>
    </>
  )
}

export default HomePage
