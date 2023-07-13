import mundos from '../images/mundos.gif';
import trendplots from '../images/trendplots.png';
import ProjectCard from './ProjectCard';

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
                    <ProjectCard
                        header="mundos.io - 2022"
                        image={mundos}
                        description="An online multiplayer game inspired by Katamari Damacy. Roll around and
                        collect mass in order to become the champion."
                        hyperlink="http://mundos.io"
                        toolTipDescription="Please wait for the AWS server to boot up, then refresh the page."
                    />
                    <ProjectCard
                        header="trendplots.com - 2023"
                        image={trendplots}
                        description="A real-time graphical visualization of global trend data from trends.google.com"
                        hyperlink="https://trendplots.com"
                        toolTipDescription=""
                    />
                </div>
            </div>
        </section>
    );
};

export default Projects;
