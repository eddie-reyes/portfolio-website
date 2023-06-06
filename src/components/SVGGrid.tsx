import React, { useState, useEffect } from "react";
import computerSVG from "../images/computer.svg";
import cpuSVG from "../images/cpu.svg";
import htmlSVG from "../images/html.svg";
import cogSVG from "../images/cog.svg";
import arrowsSVG from "../images/arrows.svg";
import gamepadSVG from "../images/gamepad.svg";
import codingSVG from "../images/coding.svg";
import serverSVG from "../images/server.svg";
import brackets from "../images/brackets.svg";

const NUM_OF_SVGS: number = 119;
const svgArr = [
  computerSVG,
  cpuSVG,
  htmlSVG,
  cogSVG,
  arrowsSVG,
  gamepadSVG,
  codingSVG,
  serverSVG,
  brackets,
];

const grid = [...Array(NUM_OF_SVGS)].map((value) => {
  return svgArr[Math.floor(Math.random() * svgArr.length)];
});

const DotGrid = () => {
  return (
    <ul className="d-flex flex-wrap p-0 position-absolute justify-content-center top-0 svg-bg">
      {grid.map((value, index) => (
        <li key={index} className="svg list-group-item">
          <img
            src={value}
            alt="BG SVG Image"
            style={{
              transform: `rotate(${(Math.random() - 0.5) * 45}deg) translate(${
                (Math.random() - 0.5) * 150
              }%,
              ${(Math.random() - 0.5) * 150}%)`,
            }}
          />
        </li>
      ))}
    </ul>
  );
};

export default DotGrid;
