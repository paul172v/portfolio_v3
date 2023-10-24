import React from "react";

import classes from "./ProjectCard.module.scss";

const ProjectCard = (props) => {
  return (
    <div className={classes.card}>
      <img
        className={classes.photo}
        src={`/imgs/${props.photo}`}
        alt="website screenshot"
      />
      <h2>{props.title}</h2>
      <a href={props.live}>Live Site</a>
      <a href={props.gitFront}>GitHub Frontend</a>
      {props.gitBack && <a href={props.gitBack}>GitHub Backend</a>}
      <p className={classes["u-bold"]}>Key Features:</p>
      <ul className={classes["key-features"]}>
        {props.keyFeatures.map((el) => (
          <li className={classes.li}>{el}</li>
        ))}
      </ul>
      <p className={classes.description}>{props.description}</p>
    </div>
  );
};

export default ProjectCard;
