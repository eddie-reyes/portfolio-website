import React from "react";
import mundos from "../images/mundos.gif";

const Projects = () => {
  return (
    <section className="section" id="projects-section">
      <h1 className="text-secondary">&lt;Projects/&gt;</h1>
      <div className="position-absolute text-secondary center-line"></div>

      <div className="d-flex flex-column align-items-center text-center text-white projects-layout">
        <h1>2021</h1>
        <h1>2022</h1>
        <h1>2023</h1>
        <h1>2024</h1>
        <h1 className="mb-0">2025</h1>
        <div className="d-flex flex-column align-items-center w-100 h-100 position-absolute project-cards">
          <div className="card text-white bg-dark mb-3 project-1">
            <h2 className="card-header bg-gradient">mundos.io - 2022</h2>
            <div className="card-body">
              <img className=" w-50 mb-3 rounded" src={mundos} alt="Mundos" />
              <p className="card-text">
                An online multiplayer game inspired by Katamari Damacy. Roll
                around and collect mass in order to become the champion.
              </p>
              <button className="btn btn-primary">
                <a
                  className="link-light text-decoration-none"
                  href="http://mundos.io"
                >
                  Play Now
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
