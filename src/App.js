import React from "react";
import classes from "./App.module.scss";

import ProjectCard from "./components/project-card/ProjectCard";

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

        <img
          className={classes["photo-desktop"]}
          src="/imgs/p1.jpg"
          alt="paul"
        />

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

            <img
              className={classes["photo-mobile"]}
              src="/imgs/p2.jpg"
              alt="paul"
            />
          </div>
        </div>

        <div className={classes["about-me-wrapper"]}>
          <div className={classes["about-me"]}>
            <h2>About Me</h2>

            <p>
              👋 Hello there! I'm <span className="highlight">Paul</span>, a
              passionate and self-taught web developer with three years of
              hands-on experience. I have a deep-rooted love for coding and am
              skilled in a range of technologies that span both front-end and
              back-end development.
            </p>

            <h3>🛠️ Skills & Technologies</h3>
            <ul>
              <li>
                <strong>Front-end</strong>: HTML, CSS, JavaScript, React.js
              </li>
              <li>
                <strong>Back-end</strong>: Node.js
              </li>
              <li>
                <strong>Full Stack Applications</strong>: Proficient in building
                end-to-end web solutions
              </li>
            </ul>

            <h3>🌱 Continuous Learning</h3>
            <p>
              I believe in lifelong learning and have recently expanded my skill
              set to include Node.js. I'm currently honing my abilities by
              creating full-stack applications that solve real-world problems.
            </p>

            <h3>🌍 Availability & Flexibility</h3>
            <p>
              I'm actively seeking my first role in the industry and am
              available to start immediately. Open to both remote work and
              relocation, I'm flexible and willing to adapt to different work
              environments.
            </p>

            <h3>🤝 Let's Connect!</h3>
            <p>
              I'm eager to bring my dedication and technical skills to a dynamic
              team. If you're interested in collaborating or have any
              opportunities, feel free to contact me.
            </p>
          </div>
        </div>

        <div className={classes["projects-wrapper"]}>
          <ProjectCard
            photo="kayleigh-parks-art.jpg"
            title="Kayleigh Parks Art"
            live="https://kayleigh-parks-art.netlify.app/"
            gitFront="https://github.com/paul172v/kayleigh-parks-art"
            gitBack=""
          />

          <ProjectCard
            photo="view.png"
            title="The View Online Menus"
            live="https://172v-view-online-menus.netlify.app/"
            gitFront="https://github.com/paul172v/view_menus"
            gitBack="https://github.com/paul172v/view-backend-server"
          />

          <ProjectCard
            photo="view-interface.png"
            title="The View Interface Form"
            live="https://172v-view-interface-form.netlify.app/"
            gitFront="https://github.com/paul172v/view-menu-interface-form"
            gitBack="https://github.com/paul172v/view-backend-server"
          />
        </div>
      </div>
      <video
        className={classes.video}
        src="/vids/background.mp4"
        autoplay="true"
        loop="true"
        mute="true"
      />
    </React.Fragment>
  );
}

export default App;
