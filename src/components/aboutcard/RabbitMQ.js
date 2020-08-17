import React, { Fragment } from "react";

const RabbitMQ = () => {
  return (
    <Fragment>
      <br />
      <h2 id="rabbitmq">RabbitMQ</h2>
      <p>
        <a
          href="http://arvent.co:15672/"
          target="_blank"
          rel="noopener noreferrer"
        >
          RabbitMQ
        </a>{" "}
        is lightweight and easy to deploy on premises and in the cloud. It
        supports multiple messaging protocols.
      </p>
      <p>
        Asynchronous so Users does not have to wait for long. Producer will
        publish message for consumer to consume. Use case, Payment process,
        Sending SMS verfication, Uploading Products.
      </p>
    </Fragment>
  );
};

export default RabbitMQ;
