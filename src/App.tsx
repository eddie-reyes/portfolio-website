import Header from "./components/Header";
import SVGGrid from "./components/SVGGrid";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <SVGGrid />
      <Header />
      <main>
        <AboutMe />
        <Skills />
        <Projects />
        <ContactMe />
      </main>
      <Footer />
    </>
  );
};

export default App;
