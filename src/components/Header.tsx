import NavLink from "./NavLink";

const Header = () => {
  return (
    <header>
      <nav className="navbar">
        <ul className="d-flex flex-wrap d-rows justify-content-center p-0 bg position-fixed w-100">
          <NavLink
            content="Contact Me"
            textIcon="fa-envelope"
            link="#contact-section"
          />
          <NavLink
            content="Projects"
            textIcon="fa-diagram-project"
            link="#projects-section"
          />
          <NavLink
            content="GitHub"
            textIcon="fa-github"
            link="https://github.com/eddie-reyes"
          />
        </ul>
      </nav>
    </header>
  );
};

export default Header;
