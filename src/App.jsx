import Footer from "./components/Footer";
import Header from "./components/Header";
import Article from "./pages/Article";
import Customer from "./pages/Customer";
import Download from "./pages/Download";
import Hero from "./pages/Hero";
import Landing from "./pages/Landing";
import Services from "./pages/Services";

const App = () => {
  return (
    <>
      <Header />
      <div className="relative mx-auto container">
        <Hero />
        <Services />
        <Landing />
        <Download />
        <Customer />
        <Article />
      </div>
      <Footer />
    </>
  );
};
export default App;
