import { useEffect } from "react";
import Header from "./components/Header";
import SVGGrid from "./components/SVGGrid";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";

const resumeDownloadPath = "/assets/resume.pdf";
const resumeRoutePath = "/download-resume";

const DownloadResumeRoute = () => {
  useEffect(() => {
    const link = document.createElement("a");
    link.href = resumeDownloadPath;
    link.download = "resume.pdf";
    link.rel = "noopener";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);

  return (
    <main className="container py-5 text-center">
      <h1 className="mb-3">Downloading your PDF…</h1>
      <p className="mb-4">
        If the download does not start automatically, use the button below.
      </p>
      <a className="btn btn-primary" href={resumeDownloadPath} download>
        Download PDF
      </a>
    </main>
  );
};

const PortfolioPage = () => {
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

const App = () => {
  if (window.location.pathname === resumeRoutePath) {
    return <DownloadResumeRoute />;
  }

  return <PortfolioPage />;
};

export default App;
