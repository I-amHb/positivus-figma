import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Process from "../components/Process";
import Services from "../components/Services";
import Studies from "../components/Studies";
import Team from "../components/Team";
import Testimonials from "../components/Testimonials";

const Home = () => {

    return (
        <>
            <Hero />
            <Services />
            <Studies />
            <Process />
            <Team />
            <Testimonials />
            <Contact />
        </>
    )
}

export default Home