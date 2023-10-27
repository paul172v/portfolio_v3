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
              src="/imgs/p1.jpg"
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
            keyFeatures={["React.js", "React-Scroll", "Modal Gallery"]}
            description="This is a basic one page brochure website that uses a real-world design. It's not very complicated but it is responsive, uses simple components and props. It uses a library called react-scroll to scroll to anchors and there is a hand coded modal gallery."
          />

          <ProjectCard
            photo="view.png"
            title="The View Online Menus"
            live="https://172v-view-online-menus.netlify.app/"
            gitFront="https://github.com/paul172v/view_menus"
            gitBack="https://github.com/paul172v/view-backend-server"
            keyFeatures={[
              "FullStack",
              "React.js",
              "Node.js",
              "Responsive",
              "Filter",
              "SCSS",
            ]}
            description="This is an online menu for a restaurant, based on a real menu from a real restaurant. It gets all of the different menus as arrays from a backend and database shared with 'The View Interface' meaning the menu can be updated elsewhere. Once it gets the menu arrays the site will automatically generate itself based on the information it has thanks to conditional rendering and good use of components. This project is light on hooks but I have coded a filter that will only show menu items that meet selected dietary requirements."
          />

          <ProjectCard
            photo="view-interface.png"
            title="The View Interface Form"
            live="https://172v-view-interface-form.netlify.app/"
            gitFront="https://github.com/paul172v/view-menu-interface-form"
            gitBack="https://github.com/paul172v/view-backend-server"
            keyFeatures={[
              "FullStack",
              "React.js",
              "Good use of Hooks and Props",
              "Conditional Rendering",
              "Node.js",
              "Express",
              "Mongoose",
              "CRUD Operations",
            ]}
            description="This is the sister site of The View Online Menus. It is basically a giant form that will allow users to update the menu arrays on a database. This project made frequent use of useState, useReducer, useEffect, useRef, useContext and the usePortal hooks. As well as good use of components and props. The backend uses Express and Mongoose, does basic CRUD operations and also has some error handling and a handler factory to make the CRUD operations more streamlined. It uses over 20 models and the routes and controllers are divided between the main, kids and drinks menus. This is my first time making a 'proper' fullstack application but I am pleased with the results. This is also mobile friendly."
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
