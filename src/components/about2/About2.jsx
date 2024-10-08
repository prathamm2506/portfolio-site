import React from "react";
import "./About2.css";
import timelinepic from "../../assets/timelinepic.png";
import timelinepic2 from "../../assets/timelinepic2.png";
import { CiCalendar } from "react-icons/ci";
import { CgSandClock } from "react-icons/cg";
import { MdCurrencyRupee } from "react-icons/md";
import { IoLanguageOutline } from "react-icons/io5";
import { GiGraduateCap } from "react-icons/gi";
import { BsLinkedin } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";

const About2 = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container">
        <div className="maindivabout">
          <ul className="timeline">
            {/* <h3>Education</h3>

            <div className="timelinecard">
              <div className="cardimg">
                <img src={timelinepic2} alt="" />
              </div>

              <div className="carddata">
                <h4>
                  B.E. Artificial Intelligence and Data Science{" "}
                  <span className="dateyear">2023-2026</span>
                </h4>
                <h5>Vivekanand Education Society's Institute of Technology</h5>
                <p>
                  Currently pursuing BE in AI and DS at VESIT. Applying
                  theoretical knowledge to real-world problems, honing
                  programming skills, and collaborating on impactful projects.
                  Demonstrating adaptability and critical thinking in diverse
                  contexts.
                </p>
              </div>
            </div>

            <div className="timelinecard">
              <div className="cardimg">
                <img src={timelinepic} alt="" />
              </div>

              <div className="carddata">
                <h4>
                  Diploma in Information Technology{" "}
                  <span className="dateyear">2020-2023</span>
                </h4>
                <h5>Government Polytechnic Mumbai</h5>
                <p>
                  Completed Diploma in IT at Government Polytechnic Mumbai.
                  Acquired hands-on skills in programming, networking, and
                  systems analysis. Excelled in team projects, problem-solving,
                  and adapting to emerging technologies.
                </p>
              </div>
            </div>

            <div className="timelinecard">
              <div className="cardimg">
                <img src={timelinepic} alt="" />
              </div>

              <div className="carddata">
                <h4>
                  Secondary School Certificate{" "}
                  <span className="dateyear">2011-2020</span>
                </h4>
                <h5>Dominic Savio Vidyalaya</h5>
                <p>
                  Thrived academically and socially at Dominic Savio Vidyalaya.
                  Demonstrated leadership in student activities, achieved
                  academic excellence, and developed strong interpersonal skills
                  through collaborative projects.
                </p>
              </div>
            </div> */}
        {/* <h3 className="pb-8">Education</h3> */}
            <li class="timeline-event">
              <label class="timeline-event-icon"></label>
              <div class="timeline-event-copy">
                <p class="timeline-event-thumbnail">Sept 2023 - June 2026</p>
                <h3>B.E. Artificial Intelligence and Data Science</h3>
                <h4>Vivekanand Education Society's Institute of Technology</h4>
                <p>Currently pursuing BE in AI and DS at VESIT. Applying theoretical knowledge to real-world problems, honing programming skills, and collaborating on impactful projects. Demonstrating adaptability and critical thinking in diverse contexts.</p>
              </div>
            </li>
            <li class="timeline-event">
              <label class="timeline-event-icon"></label>
              <div class="timeline-event-copy">
                <p class="timeline-event-thumbnail">
                  Jan 2021 - June 2023
                </p>
                <h3>Diploma in Information Technology </h3>
                <h4>Government Polytechnic Mumbai</h4>
                <p>
                Completed Diploma in IT at Government Polytechnic Mumbai. Acquired hands-on skills in programming, networking, and systems analysis. Excelled in team projects, problem-solving, and adapting to emerging technologies.
                </p>
              </div>
            </li>
            <li class="timeline-event">
              <label class="timeline-event-icon"></label>
              <div class="timeline-event-copy">
                <p class="timeline-event-thumbnail">June 2011 - March 2020</p>
                <h3>Secondary School Certificate</h3>
                <h4>Dominic Savio Vidyalaya</h4>
                <p>
                  Thrived academically and socially at Dominic Savio Vidyalaya. Demonstrated leadership in student activities, achieved academic excellence, and developed strong interpersonal skills through collaborative projects.
                </p>
              </div>
            </li>
          </ul>
          <div className="boxybox">
            <div className="onepart">
              <div className="particon">
                <CiCalendar className="particonnn" />
              </div>
              <div className="partdata">
                <h4>Experience</h4>
                <p>0-1 years</p>
              </div>
            </div>

            <div className="onepart">
              <div className="particon">
                <CgSandClock className="particonnn" />
              </div>
              <div className="partdata">
                <h4>Age</h4>
                <p>20 years</p>
              </div>
            </div>

            {/* <div className="onepart">
              <div className="particon">
                <MdCurrencyRupee className="particonnn" />
              </div>
              <div className="partdata">
                <h4>Experience</h4>
                <p>0-2 years</p>
              </div>
            </div> */}

            <div className="onepart">
              <div className="particon">
                <IoLanguageOutline className="particonnn" />
              </div>
              <div className="partdata">
                <h4>Language</h4>
                <p>English, Hindi, Marathi</p>
              </div>
            </div>

            <div className="onepart">
              <div className="particon">
                <GiGraduateCap className="particonnn" />
              </div>
              <div className="partdata">
                <h4>Education Level</h4>
                <p>Undergraduate degree</p>
              </div>
            </div>
          </div>
        </div>

        <div className="maindivabout">
          <ul className="timeline">
            {/* <h3>Work & Experience</h3>

            <div className="timelinecard">
              <div className="cardimg">
                <img src={timelinepic2} alt="" />
              </div>

              <div className="carddata">
                <h4>
                  Web Developer <span className="dateyear">Mar24-Present</span>
                </h4>
                <h5>Rhyno Wheels Private Limited</h5>
                <p>
                In my internship at Rhyno Wheels Pvt Ltd, I have been actively involved in web development tasks. Design and develop a responsive website using React and AWS. Troubleshoot and debug technical issues. Great opportunity to put my skills to testing.
                </p>
              </div>
            </div>

            <div className="timelinecard">
              <div className="cardimg">
                <img src={timelinepic2} alt="" />
              </div>

              <div className="carddata">
                <h4>
                  Front-end Developer <span className="dateyear">Dec23-Dec23</span>
                </h4>
                <h5>The Fast Way</h5>
                <p>
                  I had the opportunity to work on several web development
                  projects, gaining valuable hands-on experience in front-end,
                  back-end, database management, testing & quality assurance,
                  project presentation & collaboration, & continuous learning.
                </p>
              </div>
            </div>


            <div className="timelinecard">
              <div className="cardimg">
                <img src={timelinepic} alt="" />
              </div>

              <div className="carddata">
                <h4>
                  Full Stack Web Developer <span className="dateyear">Jan23-June23</span>
                </h4>
                <h5>The Fast Way</h5>
                <p>
                  My 6 month internship at The Fast Way provided me with
                  valuable experience in web development, honed my coding
                  skills, and allowed me to contribute to the success of
                  multiple projects.
                </p>
              </div>
            </div> */}
            <li class="timeline-event">
              <label class="timeline-event-icon"></label>
              <div class="timeline-event-copy">
                <p class="timeline-event-thumbnail">March 2024 - August 2024</p>
                <h3>Web Developer Intern</h3>
                <h4>Rhyno Wheels Private Limited</h4>
                <p>
                Crafted the company’s official website, reducing load times by 15%, and leading to improved user engagement. Performed daily tasks including deployment, site optimization, and SEO.
                </p>
                <p>Skills - React JS, AWS, SEO.</p>
              </div>
            </li>
            <li class="timeline-event">
              <label class="timeline-event-icon"></label>
              <div class="timeline-event-copy">
                <p class="timeline-event-thumbnail">
                  May 2024 - July 2024
                </p>
                <h3>R & D Intern</h3>
                <h4>Indrones Solution Private Limited</h4>
                <p>
                Designed and implemented software solutions to enhance drone operations, reducing latency by 50% through streamlining processes. Collaborated with a team to develop applications, contributing to improved operational efficiency. 
                </p>
                <p>Skills - Python, Lua, BitBucket, AWS, HTML, CSS, Node JS.</p>
              </div>
            </li>
            <li class="timeline-event">
              <label class="timeline-event-icon"></label>
              <div class="timeline-event-copy">
                <p class="timeline-event-thumbnail">January 2023 - June 2023</p>
                <h3>Web Developer Intern </h3>
                <h4>The Fast Way</h4>
                <p>
                Delivered two major web projects, improving site responsiveness and usability by 30%. Implemented full-stack solutions within fast development cycles, getting hands-on experience with industry practices.
                </p>
                <p>Skills - HTML, CSS, React JS, PHP, Firebase, MySQL.</p>
              </div>
            </li>
          </ul>
          <div className="boxybox">
            <div className="onepart">
              <div className="particon">
                <BsLinkedin className="particonnn2" />
              </div>
              <div className="partdata">
                <h4>
                  <a
                    href="https://www.linkedin.com/in/pratham-matkar-a2bb77257/"
                    target="_blank"
                  >
                    LinkedIn
                  </a>
                </h4>
                {/* <p>0-2 years</p> */}
              </div>
            </div>

            <div className="onepart">
              <div className="particon">
                <BsInstagram className="particonnn2" />
              </div>
              <div className="partdata">
                <h4>
                  <a
                    href="https://www.instagram.com/pratham_2506_/"
                    target="_blank"
                  >
                    Instagram
                  </a>
                </h4>
                {/* <p>19 years</p> */}
              </div>
            </div>

            {/* <div className="onepart">
              <div className="particon">
                <MdCurrencyRupee className="particonnn" />
              </div>
              <div className="partdata">
                <h4>Experience</h4>
                <p>0-2 years</p>
              </div>
            </div> */}

            <div className="onepart">
              <div className="particon">
                <FaGithub className="particonnn2" />
              </div>
              <div className="partdata">
                <h4>
                  <a href="https://github.com/pratham2506" target="_blank">
                    Github
                  </a>
                </h4>
                {/* <p>English, Hindi, Marathi</p> */}
              </div>
            </div>

            <div className="onepart">
              <div className="particon">
                <FiMail className="particonnn2" />
              </div>
              <div className="partdata">
                <h4>
                  <a href="mailto:prathammatkar2506@gmail.com" target="_blank">
                    Mail
                  </a>
                </h4>
                {/* <p>Undergraduate degree</p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About2;
