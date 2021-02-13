import React from "react";
import Logo from "./404.png";

const NotFoundPage = () => {
  return (
    <>
      <img src={Logo} alt="404" className="d-block mx-auto img-fluid" />
      <p className="text-center" style={{ marginTop: "-5%" }}>
        The page you were looking for was not found. You are lost!
      </p>
      <button
        className="btn btn-primary rounded d-block mx-auto"
        onClick={() => window.location.replace("/")}
      >
        Go back to homepage
      </button>
    </>
  );
};

export default NotFoundPage;
