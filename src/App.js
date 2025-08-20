import React from 'react'
import {Routes, Route} from 'react-router-dom'; 

import Header from "./Components/Header"
import Hero from "./Components/Hero"
// import Whychoose from "./Components/Whychoose"
// import Stats from "./Components/Stats"
// import Tech from "./Components/Tech"
// import Service from "./Components/Service"
// import Experience from "./Components/Experience"
// import Portfolio from "./Components/Portfolio"
// import Stream from "./Components/Stream"
// import FAQ from "./Components/FAQ"
// import Footer from './Components/Footer'
import About from './Components/About'
import Ourwork from './Components/Ourwork'
import Careers from './Components/Careers'
import Blogs from './Components/Blogs'
import ContactPage from './Components/Contact';
import ProjectsPage from './Components/Ourwork2';
import Page from './Components/Ourwork';
import Mentor from './Components/Mentor';
import UiUxPage from './Components/Graphic';
import Software from './Components/Software';
import UnderConstructionPage from './Components/Error';
import MobileAppServices from './Components/Android';
import WebDevelopmentServices from './Components/Web';
import DigitalMarketing from './Components/Digital';
import CMSSection from './Components/Cms';
import ConsultationForm from './Components/Consult';
import PrivacyPolicy from './Components/Privacy';
import FaqPage from './Components/Fque';
import ReturnRefundPolicy from './Components/Return';
// import PortfolioSection from './Components/Portfolio';



const App = () => {
  return (
    <div>

      <Header/>
      {/* <Hero/>
      <Whychoose/>
      <Stats/>
      <Tech/>
      <Service/>
      <Experience/>
      <Portfolio/>
      <Stream/>
      <FAQ/>
      // <Footer/> */}
      {/* <About/> */}
      {/* <Footer/> */}

       <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/about" element={<About />} />
        <Route path="/ourwork" element={<Ourwork />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/courses" element={<Mentor />} />
         <Route path="/blogs" element={<Blogs />} />
         <Route path="/contact" element={<ContactPage />} />
         <Route path="/nextPage" element={< ProjectsPage/>} /> 
         <Route path="/previousPage" element={< Page/>} /> 
         <Route path="/graphicDesign" element={< UiUxPage/>} />
         <Route path="/softWare" element={< Software/>} />
         
         <Route path="/constructionPage" element={< UnderConstructionPage/>} /> 
           <Route path="/mobileApp" element={< MobileAppServices/>} />
           <Route path="/webDev" element={< WebDevelopmentServices/>} />
           <Route path="/digiMark" element={< DigitalMarketing/>} />
               <Route path="/cms" element={< CMSSection/>} />
                <Route path="/cosult" element={< ConsultationForm/>} />
                <Route path="/privacy" element={< PrivacyPolicy/>} />
                 <Route path="/faq" element={< FaqPage/>} />
                    <Route path="/return" element={< ReturnRefundPolicy/>} />
                     {/* <Route path="/port" element={< PortfolioSection/>} /> */}
                


      {/* <Navbar /> your nav bar with <Link> tags */}
      </Routes> 
        
        {/* <Route path="/contact" element={<Contact />} /> */}
        {/* Add other routes similarly */}
      
    
    </div>
  )
}

export default App