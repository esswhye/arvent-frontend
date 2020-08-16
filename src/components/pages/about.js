import React, { Fragment } from "react";
import Spring from "../aboutcard/spring";

const about = () => {
  return (
    <Fragment>
      <h1> About this app </h1>
      <p>Simple shopping app</p>
      <br />

      <h3>Technology used on this project </h3>
      <br />
      <div className="container">
        <ul style={style}>
          <li>React - FrontEnd</li>
          <li>Spring Boot - Web services</li>
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
      <Spring />
    </Fragment>
  );
};

const style = {
  listStyleType: "circle",
  color: "black",
};

export default about;
