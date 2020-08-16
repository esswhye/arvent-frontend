import React, { Fragment } from "react";

const spring = () => {
  return (
    <Fragment>
      <h2>Spring boot</h2>
      <p>
        I've created 5 Spring boot apps Gateway, OrderService, CustomerService,
        ProductService and AuthService as microservices.{" "}
      </p>
      <br />
      <div className="container">
        <ul style={style}>
          <li>
            Gateway - An API gateway takes all API calls from clients, then
            routes them to the appropriate microservice with request. library
            used netflix/zuul
          </li>
          <li>
            AuthService - Implement backend security , JWT implementation{" "}
          </li>
          <li>
            CustomerService - Customer Relationship Management * PSA contains
            ShoppingCart
          </li>
          <li>ProductService - Product Relationship Management</li>
          <li>OrderService - Order Relationship Management</li>
        </ul>
        <ul>
          <li>
            <a
              href="http://arvent.co/customer-service/swagger-ui.html"
              target="_blank"
            >
              Customer API end points{" "}
            </a>
          </li>
        </ul>
      </div>
      <br />
      <p>
        In my spring boot application, I have organize my directories as such.
      </p>
      <br />
      <div className="container">
        <ul style={style}>
          <li>config (Configuration)</li>
          <li>controller (Controller) </li>
          <li>entity (Model) </li>
          <li>dto (Data transfer object eg. json {">"} pojo)</li>
          <li>exception (Error handling) </li>
          <li>logger(Log each individual API on the server)</li>
          <li>repository (JPA data CRUD MYSQL)</li>
          <li>service (Business Logic)</li>
        </ul>
      </div>
    </Fragment>
  );
};

const style = {
  listStyle: "circle",
};

export default spring;
