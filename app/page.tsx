
import Background  from "./components/Background";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import ResourcesSection from "./components/ResourcesSection";
// import Page3 from "./components/Page3";


export default function Home() {
  return (
    <div>
      <Navbar/>
     <Page1/>
     <Page2/>
     {/* <Page3/> */}
     <ResourcesSection/>
    <Background/>
    <Footer/>
    </div>
  );
}
