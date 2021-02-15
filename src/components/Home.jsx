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
  const [query, setQuery] = useState("");
  const [staticQuery, setStaticQuery] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [news, setNews] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [reportError, setReportError] = useState("");
  const [loading, setLoading] = useState(false);
  const [searchError, setSearchError] = useState("");
  const [display, setDisplay] = useState(false);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    fetch(
      `https://newsapi.org/v2/everything?q=${query}&language=en&apiKey=4fe0675a739c43e79090044972a0eed5`
    )
      .then((response) => response.json())
      .then((result) => {
        setLoading(false);
        setStaticQuery(query);
        setSearchResult(result.articles);
        setDisplay(true);
      })
      .catch((error) => {
        setLoading(false);
        setSearchError(`${error}`);
      });
  };

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
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <div className="form-inline">
                <div
                  className="md-form"
                  style={{
                    margin: "0px 0px 0px 0px",
                  }}
                >
                  <form onSubmit={handleSubmit} autoComplete="off" netlify>
                    <label htmlFor="search">Search</label>
                    <input
                      type="text"
                      id="search"
                      className="form-control"
                      onChange={(e) => setQuery(e.target.value)}
                      value={query}
                    />
                    <button className="btn btn-primary btn-sm waves-effect">
                      <i className="fas fa-search"></i>
                    </button>
                  </form>
                </div>
              </div>
            </li>
            <li
              title="Reload"
              className="nav-item waves-effect p-2 text-center hover"
              onClick={() => window.location.reload(false)}
              style={{
                borderRadius: "50%",
                height: "40px",
                width: "40px",
                paddingTop: "10px",
              }}
            >
              <i className="fas fa-redo"></i>
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
          <div className="spinner-border text-primary d-block mx-auto mt-5"></div>
        </>
      ) : (
        ""
      )}
      {query !== "" ? (
        <div className="container-fluid mt-5">
          <p
            className="text-center"
            style={{ display: display ? "none" : "block" }}
          >
            Click <i className="fas fa-hand-pointer"></i> the search button to
            view search results. Clear the search bar to return to news
          </p>
          {searchResult === [] ? (
            <>
              <h3>No search results</h3>
            </>
          ) : (
            <>
              <p
                className="text-center"
                style={{ display: display === true ? "block" : "none" }}
              >
                <i>Showing results for </i> "{staticQuery}"
              </p>

              {loading === true ? (
                <div className="spinner-border text-primary d-block mx-auto mb-3"></div>
              ) : (
                ""
              )}
              {searchError === "" ? (
                <>
                  <Card articles={searchResult} />
                </>
              ) : (
                <ErrorCard reportError={searchError} />
              )}
            </>
          )}
        </div>
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
      {searchResult === [] ? (
        <div className="card">
          <div className="card-body">No search result</div>
        </div>
      ) : null}
      <Footer />
    </div>
  );
};

export default Home;
