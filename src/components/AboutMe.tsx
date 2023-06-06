import { useEffect, useState } from "react";
import headshot from "../images/headshot.png";

const devOptions = ["websites", "video games", "mobile apps", "software"];

// interface Props {
//   header: string;
//   content: string;
// }

const InfoSection = () => {
  const [variableText, setVariableText] = useState("");
  const [currChar, setCurrChar] = useState(0);
  const [currIndex, setCurrIndex] = useState(0);
  const [currString, setCurrString] = useState(devOptions[0]);
  const [isTyping, setIsTyping] = useState(false);
  const [isPaused, setPaused] = useState(false);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (currChar === currString.length) {
        setPaused(true);
        let pauseTimeout = setTimeout(() => {
          setPaused(false);
          clearTimeout(pauseTimeout);
        }, 2000);
      }
      if (!isPaused) {
        isTyping ? appendCharacters() : popCharacters();
      }
    }, 100);

    return () => {
      clearInterval(typingInterval);
    };
  });

  function appendCharacters() {
    if (variableText.length === currString.length) {
      setIsTyping(false);
      setCurrChar(0);
    } else {
      setCurrChar(currChar + 1);
      setVariableText(currString.slice(0, currChar));
    }
  }

  function popCharacters() {
    if (variableText.length === 0) {
      setCurrIndex(currIndex === devOptions.length - 1 ? 0 : currIndex + 1);
      setCurrString(devOptions[currIndex]);
      setIsTyping(true);
    } else {
      setVariableText(variableText.slice(0, -1));
    }
  }

  return (
    <section className="section">
      <h1 className="text-secondary">&lt;About Me/&gt;</h1>
      <h2 className="text-white descriptor">
        &gt; Hi, my name is Eddie and I develop&nbsp;
        {variableText}
        <span className="pipe">|</span>.
      </h2>
      <img
        className="headshot d-block position-relative float-right"
        src={headshot}
        alt="Headshot"
      />
    </section>
  );
};

export default InfoSection;
