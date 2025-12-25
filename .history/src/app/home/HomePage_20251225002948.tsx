import Destinantions from "@/components/Destinantions/Destinantions"
import HappyCustomers from "@/components/HappyCustomers/HappyCustomers"
import Hero from "@/components/Hero/Hero"
import Services from "@/components/Services/Services"
import SpecialOffers from "@/components/SpecialOffers/SpecialOffers"
import WelcomeSite from "@/components/WelcomeSite/WelcomeSite"
import WelcomeSiteHome from "@/data/WelcomeSiteHome"



const HomePage = () => {
  return (
    <>
  <Hero image="/images/hero/1.webp" showContent={true}/>
  <Destinantions/>
  <WelcomeSite data={WelcomeSiteHome[0]} className="w-[300px] h-[500px] xl:w-[450px] xl:h-[650px]"/>
  <SpecialOffers/>
  <Services/>
  <HappyCustomers/>
    </>
  )
}

export default HomePage
