import About from "@/components/landingpage/About"
import Blogs from "@/components/landingpage/Blogs"
import Faqs from "@/components/landingpage/Faqs"
import Footer from "@/components/landingpage/Footer"
import Head from "@/components/landingpage/Head"
import Hero from "@/components/landingpage/Hero"
import Stories from "@/components/landingpage/Stories"
import WhyUs from "@/components/landingpage/WhyUs"

const LandingPage = () => {
    return (
      <div className="bg-green-3">
        <Head/>
        <Hero/>
        <About/>
        <WhyUs />
        <Stories />
        <Faqs />
        <Blogs />
        <Footer/>
      </div>
    )
  }
  
  export default LandingPage