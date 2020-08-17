import React, { Fragment, useState } from "react";
import AboutReact from "../aboutcard/Aboutreact";
import Spring from "../aboutcard/Spring";
import SystemImage from "../../images/System.png";
import Lightbox from "react-awesome-lightbox";
import "react-awesome-lightbox/build/style.css";
import ListOfTech from "../aboutcard/ListOfTech";
import Jenkins from "../aboutcard/Jenkins";
import RabbitMQ from "../aboutcard/RabbitMQ";
import Redis from "../aboutcard/Redis";

//react-awesome-lightbox

const About = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <Fragment>
      <h1> About this app </h1>

      <button
        className="btn btn-link"
        onClick={() => {
          setOpen(true);
        }}
      >
        System Design Diagram: {isOpen ? "Clicked" : "Click Me"}
      </button>
      <div>
        {isOpen && (
          <Lightbox
            image={SystemImage}
            title="System Design"
            onClose={() => {
              setOpen(false);
              console.log(isOpen);
            }}
          />
        )}
      </div>

      <h3>Technology used in project </h3>

      <ListOfTech />

      <AboutReact />

      <Spring />

      <Jenkins />

      <RabbitMQ />

      <Redis />
    </Fragment>
  );
};

export default About;

/*


*/
