import React, { useState, useEffect } from "react";
import Card from "./views/Card";
import ErrorCard from "./views/ErrorCard";
import InTheNews from "./InTheNews";
import Footer from "./Footer";
import { NavLink } from "react-router-dom";

const api = {
  base: `https://saurav.tech/NewsAPI/top-headlines/category/general/us.json`,
};

const Home = () => {
  const [news, setNews] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [reportError, setReportError] = useState("");

  const d = new Date();
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  useEffect(() => {
    fetch(`${api.base}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setNews(data.articles);
        setIsLoaded(true);
      })
      .catch((error) => {
        setIsLoaded(true);
        setReportError(`${error}`);
      });
  }, [isLoaded]);

  return (
    <div>
      <nav className="navbar navbar-expand-xl navbar-light bg-white sticky-top">
        <NavLink className="navbar-brand waves-effect" to="/">
          <img
            src="../ListIcon.svg"
            alt="Logo"
            style={{ marginRight: "7px" }}
          />
          <small>Presh Lines</small>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#basicExampleNav"
          aria-controls="basicExampleNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="basicExampleNav">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <NavLink to="/" className="nav-link waves-effect">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/business" className="nav-link waves-effect">
                Business
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/sports" className="nav-link waves-effect">
                Sports
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/entertainment" className="nav-link waves-effect">
                Entertainment
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/health" className="nav-link waves-effect">
                Health
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/science" className="nav-link waves-effect">
                Science
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/technology" className="nav-link waves-effect">
                Technology
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>

      <div className="card bg-dark text-white" style={{ borderRadius: "0px" }}>
        <div className="card-body">
          <p>
            <i className="fa fa-newspaper"></i> General Headlines
          </p>
          <small className="text-light">{`${day} ${date}, ${month} ${year}`}</small>
        </div>
      </div>

      {isLoaded === false ? (
        <>
          <div className="spinner-border text-primary d-block mx-auto mt-5 mb-5"></div>
        </>
      ) : (
        <div className="container-fluid mt-5">
          <div className="row">
            <div className="col-md-8 col-sm-8">
              <div className="row">
                {reportError === "" ? (
                  <Card articles={news} />
                ) : (
                  <ErrorCard reportError={reportError} />
                )}
              </div>
            </div>
            <div className="col-md-4 d-lg-block d-none">
              <div className="row">
                <div className="col-md-12">
                  <InTheNews />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Home;
