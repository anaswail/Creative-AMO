import React from "react";
import "../../styles/Error.css";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="error-page">
      {" "}
      <h1 className="error-title">
        {" "}
        <span>4</span> <span className="text-[#ffac15]">0</span> <span>4</span>{" "}
      </h1>{" "}
      <p className="error-message">
        Oops! We can't find the page you're looking for.
      </p>{" "}
      <Link to="/" className="error-link">
        Go Back Home
      </Link>{" "}
    </div>
  );
};
export default Error;
