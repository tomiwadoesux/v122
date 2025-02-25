import Section1 from "../components/Section1"; // Try direct path
import Section2 from "../components/Section2";
import Horizontaltext from "../components/Horizontaltext";
import Section3 from "../components/Section3";
import Section4 from "../components/Section4";
import Section5 from "../components/Section5";
import Section6 from "../components/Section6";
import Footer from "../components/Footer";
import Sectionscroll from "../components/Sectionscroll";
// import Header from "../components/Header";

 function HomePage() {
  return (
    <main>
      {/* <Header/> */}
      <Section1 />
      <Horizontaltext/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Section5/>
      <Section6/>
      <Footer/>

      {/* <Sectionscroll/> */}

    </main>
  );
}
export default HomePage;