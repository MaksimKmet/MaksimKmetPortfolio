import React from "react";
import { useState } from "react";

// IMAGE AND LOGO DIRECTORY
import MainPic from './assets/main.picture.jpg'
import logoGithub from'./assets/github.png'
import logoLinkedIn from'./assets/linkedin.png'
import logoNodeJs from'./assets/DeWatermark.ai_1725988594015.png'
import ProfilePic from'./assets/about-pic .png'
import Project1 from './assets/Todolist.png'
import Project2 from './assets/project-2.png'
import Project3 from './assets/project-3.png'
import CheckedLogo from './assets/checkmark.png'
import logoEmail from './assets/email.png'
import ArrowLogo from './assets/arrow.png'

import AwardsLogo from './assets/experience.png'
import EducationLogo from './assets/education.png'
// IMAGE AND LOGO DIRECTORY


export default function Page() {


let [hamburgerIcon, setHamburgerIcon] = useState('hamburger-icon')
let [menuLinks, setMenuLinks] = useState('menu-links')


// let [hamburgerIcon, setHamburgerIcon] = useState('hamburger-icon')

  function toggle() {

      if (hamburgerIcon === 'hamburger-icon') {
        setHamburgerIcon(hamburgerIcon = 'hamburger-icon open')
        setMenuLinks(menuLinks = 'menu-links open')

      }else {
        setHamburgerIcon(hamburgerIcon = 'hamburger-icon')
        setMenuLinks(menuLinks = 'menu-links')

      }
    }
  
    return (

        <>
  <nav id="desktop-nav">
    <div className="logo" >MaxKmet.dev</div>
    <div>
      <ul className="nav-links">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  </nav>
  <nav id="hamburger-nav">
    <div className="logo">MaxKmet.dev  </div>
    <div className='hamburger-menu'>
      <div className={hamburgerIcon} onClick={toggle}>
        <span />
        <span />
        <span />
      </div>
      <div className={menuLinks}>
        <li>
          <a href="#about" onClick={toggle}>
            About 
          </a>
        </li>
        <li>
          <a href="#experience" onClick={toggle}>
            Experience
          </a>
        </li>
        <li>
          <a href="#projects" onClick={toggle}>
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" onClick={toggle}>
            Contact
          </a>
        </li>
      </div>
    </div>
  </nav>
  <section id="profile">
    <div className="section__pic-container">
      <img src={MainPic} alt="MainPic" />
    </div>
    <div className="section__text">
      {/* <p class="section__text__p1">Hello, I'm</p> */}
      <h1 className="title">
        Front-End React <br />
        Developer 👋
      </h1>
      <p className="section__text__p2">
        Hi I'm Max Kmet. A passionate Front-End <br />
        developer based in Gdansk, Poland 📌{" "}
      </p>
      <div className="btn-container">
        <button
          className="btn btn-color-2"
          onclick="window.open('./assets/resume-example.pdf')"
        >
          Download CV
        </button>
        <button
          className="btn btn-color-1"
          onclick="location.href='./#contact'"
          onClick={()=> window.location.href='./#contact'}

          
        >
          Contact Info
        </button>
      </div>
      <div id="socials-container">
        <img
          src={logoLinkedIn}
          alt="My LinkedIn profile"
          className="icon "
          onClick={()=> window.location.href='https://www.linkedin.com/in/maksym-kmet-8952a21a9/'}
        />
        <img
          src={logoGithub}
          alt="My Github profile"
          className="icon "
          onClick={()=> window.location.href='https://github.com/MaksimKmet'}
        />
      </div>
      <div className="technology-container">
        <h4 className="section__text__p3">My tech stack:</h4>
      </div>
      <div id="technology-container">
        <img
          src="https://cdn-icons-png.flaticon.com/512/11766/11766061.png"
          alt="Programming languages free icon"
          className="icon"
        />
        <img
          src="https://cdn-icons-png.flaticon.com/512/1199/1199124.png"
          alt="Java script free icon"
          className="icon"
        />
        <img
          src="https://cdn-icons-png.flaticon.com/512/1183/1183723.png"
          className="icon"
          alt="React free icon"
        />
        {/* <svg
          className="icon"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 256 256"
          version="1.1"
          preserveAspectRatio="xMidYMid"
        >
          <g>
            <path
              d="M119.616813,0.0688905149 C119.066276,0.118932037 117.314565,0.294077364 115.738025,0.419181169 C79.3775171,3.69690087 45.3192571,23.3131775 23.7481916,53.4631946 C11.7364614,70.2271045 4.05395894,89.2428829 1.15112414,109.384595 C0.12512219,116.415429 0,118.492153 0,128.025062 C0,137.557972 0.12512219,139.634696 1.15112414,146.665529 C8.10791789,194.730411 42.3163245,235.11392 88.7116325,250.076335 C97.0197458,252.753556 105.778299,254.580072 115.738025,255.680985 C119.616813,256.106338 136.383187,256.106338 140.261975,255.680985 C157.453763,253.779407 172.017986,249.525878 186.382014,242.194795 C188.584164,241.068861 189.00958,240.768612 188.709286,240.518404 C188.509091,240.36828 179.124927,227.782837 167.86393,212.570214 L147.393939,184.922273 L121.743891,146.965779 C107.630108,126.098464 96.0187683,109.034305 95.9186706,109.034305 C95.8185728,109.009284 95.7184751,125.873277 95.6684262,146.465363 C95.5933529,182.52028 95.5683284,183.971484 95.1178886,184.82219 C94.4672532,186.048207 93.9667644,186.548623 92.915738,187.099079 C92.114956,187.499411 91.4142717,187.574474 87.6355816,187.574474 L83.3063539,187.574474 L82.1552297,186.848872 C81.4044966,186.373477 80.8539589,185.747958 80.4785924,185.022356 L79.9530792,183.896422 L80.0031281,133.729796 L80.0782014,83.5381493 L80.8539589,82.5623397 C81.25435,82.0369037 82.1051808,81.3613431 82.7057674,81.0360732 C83.7317693,80.535658 84.1321603,80.4856165 88.4613881,80.4856165 C93.5663734,80.4856165 94.4172043,80.6857826 95.7434995,82.1369867 C96.1188661,82.5373189 110.007429,103.454675 126.623656,128.650581 C143.239883,153.846488 165.962072,188.250034 177.122972,205.139048 L197.392766,235.839522 L198.418768,235.163961 C207.502639,229.259062 217.112023,220.852086 224.719453,212.09482 C240.910264,193.504394 251.345455,170.835585 254.848876,146.665529 C255.874878,139.634696 256,137.557972 256,128.025062 C256,118.492153 255.874878,116.415429 254.848876,109.384595 C247.892082,61.3197135 213.683675,20.9362052 167.288368,5.97379012 C159.105376,3.32158945 150.396872,1.49507389 140.637341,0.394160408 C138.234995,0.143952798 121.693842,-0.131275573 119.616813,0.0688905149 L119.616813,0.0688905149 Z M172.017986,77.4831252 C173.219159,78.0836234 174.195112,79.2345784 174.545455,80.435575 C174.74565,81.0861148 174.795699,94.9976579 174.74565,126.348671 L174.670577,171.336 L166.73783,159.17591 L158.780059,147.01582 L158.780059,114.313685 C158.780059,93.1711423 158.880156,81.2862808 159.030303,80.7108033 C159.430694,79.3096407 160.306549,78.2087272 161.507722,77.5581875 C162.533724,77.0327515 162.909091,76.98271 166.837928,76.98271 C170.541544,76.98271 171.19218,77.0327515 172.017986,77.4831252 Z"
              fill="#000000"
            ></path>
          </g>
        </svg> */}
        <img
          src="https://cdn-icons-png.flaticon.com/512/5968/5968672.png"
          className="icon"
          alt="Bootstrap free icon"
          title="Bootstrap free icon"
        />
        <img
          className="icon"
          src={logoNodeJs}
          alt="Node Js framework, web development sign."
        />
        <img
          className="icon"
          src="https://cdn-icons-png.flaticon.com/512/5968/5968358.png"
          alt="Sass icon"
        />
        <img
          src="https://icon.icepanel.io/Technology/svg/Tailwind-CSS.svg"
          alt="Tailwind CSS icon"
          className="icon"
        />
      </div>
    </div>
    <img
      src={ArrowLogo}
      alt="Arrow icon"
      className="icon arrow rg-5rem"
      onClick={()=> window.location.href= '/#about'}
    />
  </section>
  
  <section id="about">
    <p className="section__text__p1">Get To Know More</p>
    <h1 className="title">About Me</h1>
    <div className="section-container">
      <div className="section__pic-container">
        <img
          src={ProfilePic}
          alt="ProfilePic"
          className="about-pic"
        />
      </div>
      <div className="about-details-container">
        <div className="about-containers">
          <div className="details-container">
            <img
              src={AwardsLogo}
              alt="Experience icon"
              className="icon"
            />
            <h3>Experience</h3>
            <p>
              {" "}
              1+ years <br />
              Frontend Development
            </p>
          </div>
          <div className="details-container">
            <img
              src={EducationLogo}
              alt="Education icon"
              className="icon"
            />
            <h3>Education</h3>
            <p>
              <strong> B.Sc. Bachelors Degree</strong> <br />
              Psychology in business. Human resource management
            </p>
          </div>
          {/* <div class="details-container">
        <img
          src="./assets/education.png"
          alt="Education icon"
          class="icon"
        />
        <h3>Education</h3>
        <p>B.Sc. Bachelors Degree <br/>psychology in business.
          human resource management 
      and In</p>
      </div> */}
        </div>
        <div className="text-container">
          <p>
            I am a self-motivated front-end developer with strong knowledge of
            HTML, CSS, JavaScript, React, and TypeScript, as well as frameworks
            like Tailwind, Sass, Bootstrap, and Next.js. I have created custom
            projects featuring responsive interfaces and API integration. I
            continuously develop my skills through self-study and participation
            in online courses. Additionally, I have practical experience with
            Git, Webpack, Figma, and Photoshop. I am eager to take on new tasks
            and challenges to further improve my skills in this field.
          </p>
        </div>
      </div>
    </div>
    <img
      src={ArrowLogo}
      alt="Arrow icon"
      className="icon arrow"
      onClick={()=> window.location.href= '/#experience'}

    />
  </section>
  <section id="experience">
    <p className="section__text__p1">Explore My</p>
    <h1 className="title">Experience</h1>
    <div className="experience-details-container">
      <div className="about-containers">
        <div className="details-container">
          <h2 className="experience-sub-title">Frontend Development</h2>
          <div className="article-container">
            <article>
              <img
                src={CheckedLogo}
                alt="Experience icon"
                className="icon"
              />
              <div>
                <h3>HTML</h3>
                <p>Experienced</p>
              </div>
            </article>
            <article>
              <img
                src={CheckedLogo}
                alt="Experience icon"
                className="icon"
              />
              <div>
                <h3>CSS</h3>
                <p>Experienced</p>
              </div>
            </article>
            <article>
              <img
                src={CheckedLogo}
                alt="Experience icon"
                className="icon"
              />
              <div>
                <h3>JavaScript</h3>
                <p>Basic</p>
              </div>
            </article>
            <article>
              <img
                src={CheckedLogo}
                alt="Experience icon"
                className="icon"
              />
              <div>
                <h3>TypeScript</h3>
                <p>Basic</p>
              </div>
            </article>
            <article>
              <img
                src={CheckedLogo}
                alt="Experience icon"
                className="icon"
              />
              <div>
                <h3>Git</h3>
                <p>Intermediate</p>
              </div>
            </article>
            <article>
              <img
                src={CheckedLogo}
                alt="Experience icon"
                className="icon"
              />
              <div>
                <h3>Material UI</h3>
                <p>Intermediate</p>
              </div>
            </article>
          </div>
        </div>
        <div className="details-container">
          <h2 className="experience-sub-title">Frontend Development</h2>
          <div className="article-container">
            {/* <article>
          <img
            src="./assets/checkmark.png"
            alt="Experience icon"
            class="icon"
          />
          <div>
            <h3>PostgreSQL</h3>
            <p>Basic</p>
          </div>
        </article> */}
            <article>
              <img
                src={CheckedLogo}
                alt="Experience icon"
                className="icon"
              />
              <div>
                <h3>Next JS</h3>
                <p>Basic</p>
              </div>
            </article>
            <article>
              <img
                src={CheckedLogo}
                alt="Experience icon"
                className="icon"
              />
              <div>
                <h3>Node JS</h3>
                <p>Intermediate</p>
              </div>
            </article>
            <article>
              <img
                src={CheckedLogo}
                alt="Experience icon"
                className="icon"
              />
              <div>
                <h3>SASS</h3>
                <p>Basic</p>
              </div>
            </article>
            <article>
              <img
                src={CheckedLogo}
                alt="Experience icon"
                className="icon"
              />
              <div>
                <h3>Bootstrap</h3>
                <p>Intermediate</p>
              </div>
            </article>
            <article>
              <img
                src={CheckedLogo}
                alt="Experience icon"
                className="icon"
              />
              <div>
                <h3>Tailwind</h3>
                <p>Intermediate</p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
    <img
      src={ArrowLogo}
      alt="Arrow icon"
      className="icon arrow"
      onClick={()=> window.location.href= '/#projects'}


      
    />
  </section>
  <section id="projects">
    <p className="section__text__p1">Browse My Recent</p>
    <h1 className="title">Projects</h1>
    <div className="experience-details-container">
      <div className="about-containers">
        <div className="details-container color-container">
          <div className="article-container">
            <img
              src={Project1}
              alt="Project 1"
              className="project-img"
            />
          </div>
          <h2 className="experience-sub-title project-title">Project One</h2>
          <div className="btn-container">
            <button
              className="btn btn-color-2 project-btn"
              onclick="location.href='https://github.com/'"
            >
              Github
            </button>
            <button
              className="btn btn-color-2 project-btn"
              onclick="location.href='https://github.com/'"
            >
              Live Demo
            </button>
          </div>
        </div>
        <div className="details-container color-container">
          <div className="article-container">
            <img
              src={Project2}
              alt="Project 2"
              className="project-img"
            />
          </div>
          <h2 className="experience-sub-title project-title">Project Two</h2>
          <div className="btn-container">
            <button
              className="btn btn-color-2 project-btn"
              onclick="location.href='https://github.com/'"
            >
              Github
            </button>
            <button
              className="btn btn-color-2 project-btn"
              onclick="location.href='https://github.com/'"
            >
              Live Demo
            </button>
          </div>
        </div>
        <div className="details-container color-container">
          <div className="article-container">
            <img
              src={Project3}
              alt="Project 3"
              className="project-img"
            />
          </div>
          <h2 className="experience-sub-title project-title">Project Three</h2>
          <div className="btn-container">
            <button
              className="btn btn-color-2 project-btn"
              onclick="location.href='https://github.com/'"
            >
              Github
            </button>
            <button
              className="btn btn-color-2 project-btn"
              onclick="location.href='https://github.com/'"
            >
              Live Demo
            </button>
          </div>
        </div>
      </div>
    </div>
    <img
      src={ArrowLogo}
      alt="Arrow icon"
      className="icon arrow"
      onClick={()=> window.location.href= '/#contact'}


    />
  </section>
  <section id="contact">
    <p className="section__text__p1">Get in Touch</p>
    <h1 className="title">Contact Me</h1>
    <div className="contact-info-upper-container">
      <div className="contact-info-container">
        <img
          src={logoEmail}
          alt="Email icon"
          className="icon contact-icon email-icon"
        />
        <p>
          <a href="mailto:kmetmaksim686@gmail.com">Send me a mail</a>
        </p>
      </div>
      <div className="contact-info-container">
        <img
          src={logoLinkedIn}
          alt="LinkedIn icon"
          className="icon contact-icon"
        />
        <p>
          <a
            href="https://www.linkedin.com/in/maksym-kmet-8952a21a9/"
          >
            LinkedIn
          </a>
        </p>
      </div>
    </div>
  </section>
  <footer>
    <nav>
      <div className="nav-links-container">
        <ul className="nav-links">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
    <p>Copyright © 2024 Maksym Kmet. All Rights Reserved.</p>
  </footer>
</>

    )
}