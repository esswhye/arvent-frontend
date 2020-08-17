import React from "react";
import { HashLink as Link } from "react-router-hash-link";

const ListOfTech = () => {
  return (
    <div>
      <div className="container">
        <ul style={style}>
          <li>
            <Link to="#react">React - FrontEnd</Link>
          </li>
          <li>
            <Link to="#spring-boot">Spring Boot - Web services</Link>
          </li>
          <li>
            <Link to="#jenkins">Jenkins - Manage CI/CD</Link>
          </li>
          <li>
            <Link to="#rabbitmq">RabbitMQ - Asynchronous Message </Link>
          </li>
          <li>
            <Link to="#redis">Redis - Cached-Aside Pattern </Link>
          </li>
          <li>Consul - Service Discovery</li>
          <li>MySql - RDBMS - Store data</li>
          <li>Docker - docker swarm - deploy apps</li>
          <li>Digital Ocean - Cloud Storage</li>
        </ul>
      </div>
    </div>
  );
};

const style = {
  listStyleType: "circle",
  color: "black",
};

export default ListOfTech;
