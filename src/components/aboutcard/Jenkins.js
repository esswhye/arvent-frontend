import React from "react";

const Jenkins = () => {
  return (
    <div>
      <br />
      <h2 id="jenkins">Jenkins</h2>
      <p>Generally use for CI/CD , automate build, test and deploy</p>
      <p>
        After a successful repo push to github, github will send a webhook to{" "}
        <a
          href="http://arvent.co:5000"
          target="_blank"
          rel="noopener noreferrer"
        >
          Jenkins
        </a>{" "}
        will pull the repo and start building it using jenkinsfile {">"}{" "}
        dockerfile
      </p>
    </div>
  );
};

export default Jenkins;
