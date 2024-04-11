import React from "react";
import "./intro.css";
import bg from "../../assets/image.png";
import {Link } from 'react-scroll';
import btnimg from '../../assets/hireme.png'

const intro = () => {
  return (
    <section id="intro">
      <div className="introcontent">
        <span className="hello">Hello, </span>

        <span className="introtext">
          I am <span className="introname">Pranay Prasoon</span>
          <br />
          Web Developer 
        </span>

        <p className="intropara">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id iure modi<br/>
         reprehenderit explicabo obcaecati sunt error veritatis praesentium distinctio? Praesentium!</p>
        <Link>
        <button className="btn">
            <img src={btnimg} className="btnimg" alt="" />Hire Me
        </button>
        </Link>
      </div>
      <img src={bg} alt="Profile" className="bg" />
    </section>
  );
};

export default intro;
