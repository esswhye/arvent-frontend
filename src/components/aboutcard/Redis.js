import React, { Fragment } from "react";

const Redis = () => {
  return (
    <Fragment>
      <br />
      <h2 id="redis">Redis</h2>
      <p>
        Redis is an in-memory data structure, in-memory key–value database with
        optional durability and it's blazingly fast
      </p>
      <img
        src="https://docs.microsoft.com/en-us/azure/architecture/patterns/_images/cache-aside-diagram.png"
        atl="redis image"
        style={style}
      />
      <p>
        Using redis to store cache(Cache Aside Pattern) Load data on demand into
        a cache from a data store. This can improve performance and also helps
        to maintain consistency between data held in the cache and data in the
        underlying data store. Use case : Top 10 products
      </p>
    </Fragment>
  );
};

const style = {
  maxHeight: "360",
  maxWidth: "417px",
};

export default Redis;
