import React from "react";
import classes from "./App.module.scss";

function App() {
  return (
    <React.Fragment>
      <div className={classes.background}>
        <div className={classes["header-desktop"]}>
          <div className={classes["details-wrapper"]}>
            <h1>Paul Harris</h1>
            <h1>Frontend Web Developer (MERN Stack)</h1>
            <p>Based in Glasgow</p>
            <p>Looking for work</p>
            <p>Willing to relocate</p>

            <a href="https://github.com/paul172v">My GitHub</a>
            <a href="mailto:paul172v@aol.com">Email Me</a>
            <a href="tel:+447375384303">Call Me</a>
          </div>
        </div>

        <div className={classes["header-mobile"]}>
          <div className={classes["details-wrapper"]}>
            <h1>Paul Harris</h1>
            <h1>Frontend Web Developer (MERN Stack)</h1>
            <p>Based in Glasgow</p>
            <p>Looking for work</p>
            <p>Willing to relocate</p>

            <a href="https://github.com/paul172v">My GitHub</a>
            <a href="mailto:paul172v@aol.com">Email Me</a>
            <a href="tel:+447375384303">Call Me</a>
          </div>
        </div>
      </div>
      <video
        className={classes.video}
        src="/vids/background.mp4"
        autoplay="true"
        loop="true"
      />
    </React.Fragment>
  );
}

export default App;
