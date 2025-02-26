import Header from "./components/Header";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Services from "./pages/Services";
import Technologies from "./pages/Technologies";
import Footer from "./components/Footer";


function App() {
  return (
    <div>
      <Header />
      <Home />
      <Services />
      <Projects />
      <Technologies />
      <Footer />
    </div>
  );
}

export default App;
