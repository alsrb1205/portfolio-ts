import React from "react";
import { Job } from "@interfaces/common";

type Job2Props = {
  job: Job;
};

const Job2: React.FC<Job2Props> = ({ job }) => {
  const { img, alt, name, period } = job;
  return (
    <>
      <img src={img} alt={alt} />
      <div>
        <p className="job__name">{name}</p>
        <p className="job__period">{period}</p>
      </div>
    </>
  );
};

export default Job2;
