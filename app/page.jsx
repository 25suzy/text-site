import Header from "../components/Header";
import Hero from "../components/Hero";
import Unify from "../components/Unify";
import Flows from "../components/Flows";
import ShowcaseSlider from "../components/ShowcaseSlider";
import AllInOne from "../components/AllInOne";
import Contactless from "../components/Contactless";
import Converter from "../components/Converter";
import Footer from "../components/Footer";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Unify />
        <Flows />
        <ShowcaseSlider />
        <AllInOne />
        <Contactless />
        <Converter />
      </main>
      <Footer />
    </>
  );
}
