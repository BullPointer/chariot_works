import { Navbar } from "../components";
import About from "../components/About";
import Welcome from "../components/Welcome";
import Work from "../components/Work";
import Footer from "../footer/Footer";

const Home = () => {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <Welcome />
      <About />
      <Work />
      <Footer />
    </div>
  )
}

export default Home;