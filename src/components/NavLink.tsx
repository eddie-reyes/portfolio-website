import React from "react";

interface Props {
  content: string;
  textIcon: string;
  link: string;
}

const NavLink = ({ content, textIcon, link }: Props) => {
  return (
    <>
      <li className="list-group-item m-4">
        <a href={link} className="link-light text-decoration-none nav">
          <span className={"fa fa-fw mx-2 " + textIcon}></span>
          {content}
          <span className="fa fa-fw mx-2"></span>
        </a>
      </li>
    </>
  );
};

export default NavLink;
