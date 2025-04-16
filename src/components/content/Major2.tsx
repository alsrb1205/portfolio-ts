import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faMobile } from "@fortawesome/free-solid-svg-icons";
import { faServer } from "@fortawesome/free-solid-svg-icons";
import { Major } from "@interfaces/common";

interface Major2Props {
  major: Major;
}

const Major2: React.FC<Major2Props> = ({ major }) => {
  const { icon, title, subjects } = major;
  return (
    <>
      {icon === "html" && (
        <FontAwesomeIcon
          className="fa-brands fa-html5 major__icon"
          icon={faHtml5}
        />
      )}
      {icon === "mobile" && (
        <FontAwesomeIcon
          className="fa-brands fa-html5 major__icon"
          icon={faMobile}
        />
      )}
      {icon === "server" && (
        <FontAwesomeIcon
          className="fa-brands fa-html5 major__icon"
          icon={faServer}
        />
      )}
      <p className="major__title">{title}</p>
      <p>{subjects}</p>
    </>
  );
};

export default Major2;
