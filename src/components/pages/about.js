import React, { Fragment } from "react";
import AboutReact from "../aboutcard/aboutreact";
import { HashLink as Link } from "react-router-hash-link";
import Spring from "../aboutcard/spring";
import SystemImage from "../../images/System.png";
import Lightbox from "react-awesome-lightbox";
import "react-awesome-lightbox/build/style.css";
//react-awesome-lightbox
var isOpen = false;

const handleEvent = (e) => {
  e.preventDefault();
  isOpen = true;
  console.log(isOpen);
};

const about = () => {
  return (
    <Fragment>
      <h1> About this app </h1>

      <button onClick={handleEvent}>{isOpen ? "On" : "Off"}</button>

      <h3>Technology used in project </h3>

      <div className="container">
        <ul style={style}>
          <li>
            <Link to="#react">React - FrontEnd</Link>
          </li>
          <li>
            <Link to="#spring-boot">Spring Boot - Web services</Link>
          </li>
          <li>Jenkins - Manage CI/CD</li>
          <li>RabbitMQ - Asynchronous Message </li>
          <li>Redis - Cached-Aside Pattern </li>
          <li>Consul - Service Discovery</li>
          <li>MySql - RDBMS - Store data</li>
          <li>Docker - docker swarm - deploy apps</li>
          <li>Digital Ocean - Cloud Storage</li>
        </ul>
      </div>
      <br />
      <AboutReact />
      <Spring />
    </Fragment>
  );
};

const style = {
  listStyleType: "circle",
  color: "black",
};

export default about;

/*
<div>
        {isOpen && (
          <Lightbox
            image={SystemImage}
            title="System Design"
            onClose={() => {
              isOpen = false;
              console.log(isOpen);
            }}
          />
        )}
      </div>

*/
