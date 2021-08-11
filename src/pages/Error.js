import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="section error-page">
      <div className="error-container">
        <h3>Oops!.. you hit a dead end. Do not drink and drive</h3>
        <Link to="/" className="btn btn-primary">
          Back home
        </Link>
      </div>
    </section>
  );
};

export default Error;
