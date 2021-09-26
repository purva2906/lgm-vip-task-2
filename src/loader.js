import React, { Fragment } from "react";
import loader from "./load.gif";
const Loader = () => (
  <Fragment>
    <img
      src={loader}
      alt="Loading..."
      style={{ width: "150px", margin: "auto", display: "block" }}
    />
  </Fragment>
);
export default Loader;
