import React, { useEffect, useState } from "react";
import Project2 from "./Project2";
import axios from "axios";
import { Project } from "@interfaces/common";

const Projects2: React.FC = () => {
  const [projectList, setProjectList] = useState<Project[]>([]);
  useEffect(() => {
    axios
      .get("/data/project.json")
      .then((res) => {
        setProjectList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <ul className="projects">
      {projectList &&
        projectList.map((project) => (
          <li className="project">
            <Project2 project={project} />
          </li>
        ))}
    </ul>
  );
};

export default Projects2;
