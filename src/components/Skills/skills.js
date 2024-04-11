import React from 'react'
import './skills.css';
import UIDesign from '../../assets/ui-design.png'
import WebDesign from '../../assets/website-design.png'
import AppDesign from '../../assets/app-design.png'


const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">What I do</span>
      <span className="skilldesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita ab ex
        tempore ipsa porro, quod velit doloribus blanditiis temporibus accusamus
        adipisci aliquid iusto earum debitis?
      </span>

      <div className="skillbars">
        <div className="skillbar">
          <img src={UIDesign} alt="" className="skillbarimg" />
          <div className="skillbartext">
            <h2>UI/UX Design </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
              cupiditate.
            </p>
          </div>
        </div>

        <div className="skillbar">
          <img src={WebDesign} alt="" className="skillbarimg" />
          <div className="skillbartext">
            <h2>Website Design</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
              cupiditate.
            </p>
          </div>
        </div>

        <div className="skillbar">
          <img src={AppDesign} alt="" className="skillbarimg" />
          <div className="skillbartext">
            <h2>App Design</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
              cupiditate.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills