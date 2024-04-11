
import React, { useRef } from "react";
import './contact.css'
import Walmart from '../../assets/walmart.png'
import Adobe from '../../assets/adobe.png'
import Microsoft from '../../assets/microsoft.png'
import Facebook from '../../assets/facebook.png'

import Facbookicon from'../../assets/facebook-icon.png'
import Twittericon from'../../assets/twitter.png'
import Youtubeicon from'../../assets/youtube.png'
import Instagramicon from'../../assets/instagram.png'

import emailjs from "@emailjs/browser";

const Contact = () => {
    const form = useRef();
      const sendEmail = (e) => {
        e.preventDefault();

        emailjs
          .sendForm(
            "service_4p70vao",
            "template_7abonf4",
            form.current,
            "tvYeo1jfAFLT8Y-45"
          )
          .then(
            (result) => {
              console.log(result.text);
            },
            (error) => {
              console.log(error.text);
            }
          );
          e.target.reset()
    };
  return (
    <section id="contactpage">
      <div className="clients">
        <h1 className="contactpagetitle">My Clients</h1>
        <p className="clientdescr">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda
          unde sapiente nam quod, consequatur aperiam.
        </p>
        desc
        <div className="clientimgs">
          <img src={Walmart} alt="" className="clientimg" />
          <img src={Adobe} alt="" className="clientimg" />
          <img src={Microsoft} alt="" className="clientimg" />
          <img src={Facebook} alt="" className="clientimg" />
        </div>
      </div>

      <div id="contact">
        <h1 className="contactpagetitle">Contact Me</h1>
        <span className="contactdesc">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum,
          sint unde molestiae voluptatum ut consectetur.
        </span>

        <form  className="contactform" ref={form} onSubmit={sendEmail}>
          <input type="text" className="name" placeholder="Your Name" name='user_name'/>
          <input type="email" className="email" placeholder="Your Email"  name='user_email'/>
          <textarea
            name="message"
            rows="5"
            className="msg"
            placeholder="Your Message"
          ></textarea>
          <button type="submit" value='Send' className="submitbtn">
            Submit
          </button>
          <div className="links">
            <img src={Facbookicon} alt="" className="link" />
            <img src={Twittericon} alt="" className="link" />
            <img src={Youtubeicon} alt="" className="link" />
            <img src={Instagramicon} alt="" className="link" />
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact