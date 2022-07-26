/* eslint-disable */
import "./about.css";
import A1 from "../../assets/A1.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscProject } from "react-icons/vsc";

function about() {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={A1} alt="ABout Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>Learning Full Stack</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>World Wide Clients</small>
            </article>

            <article className="about__card">
              <VscProject className="about__icon" />
              <h5>Projects</h5>
              <small>Worked on 30+ small and Large Projects</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            excepturi corporis a adipisci impedit, nam dolorem sunt alias
            deleniti cupiditate necessitatibus quibusdam iusto provident earum
            est eum totam quia et!
          </p>

          <a href="#contact" className="btn btn-primary">
            {" "}
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}

export default about;
