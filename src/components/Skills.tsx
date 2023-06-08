import React from "react";

const Skills = () => {
  return (
    <section className="section">
      <h1 className="text-secondary">&lt;Skills/&gt;</h1>

      <div className="d-flex flex-column text-white descriptor">
        <div className="skills-section">
          <h2 className="mb-3">&gt; Web</h2>
          <li className="ps-5 mb-2">
            Front-end: Javascript, Typescript, CSS, HTML, React, Bootstrap
          </li>
          <li className="ps-5 ">
            Back-end: PostgreSQL, GraphQL, Apollo, Node.js, TypeORM, Redis,
            Next.js
          </li>
        </div>
        <div className="skills-section">
          <h2 className="mb-3">&gt; Game Development</h2>
          <li className="ps-5 ">Unreal Engine, Unity, GameMaker</li>
        </div>
        <div className="skills-section">
          <h2 className="mb-3">&gt; General Purpose</h2>
          <li className="ps-5 ">Python, C, C++, C#, Java</li>
        </div>
      </div>
    </section>
  );
};

export default Skills;
