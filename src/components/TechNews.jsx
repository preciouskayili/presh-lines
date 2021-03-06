import React, { useState, useEffect } from "react";
import Navbar from "./views/Navbar";
import Card from "./views/Card";
import ErrorCard from "./views/ErrorCard";
import InTheNews from "./InTheNews";
import Footer from "./Footer";

const api = {
  base: `https://saurav.tech/NewsAPI/top-headlines/category/technology/us.json`,
};
const TechNews = ({ location }) => {
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
    <div className="App">
      <Navbar location={location} />
      <div className="container-fluid mt-3">
        <h5 className="mb-3">
          <div className="col-md-9">
            <small className="text-muted">Technology </small>
            <br />
            <i
              className="fas fa-lightbulb text-white text-center z-depth-1 bg-warning"
              style={{
                width: "40px",
                height: "40px",
                fontSize: "20px",
                borderRadius: "50%",
                paddingTop: "10px",
              }}
            ></i>{" "}
            Today's Headlines
            <br />
            <small className="text-muted">{`${day} ${date}, ${month} ${year}`}</small>
          </div>
        </h5>
        {isLoaded === false ? (
          <>
            <div className="spinner-border text-warning d-block mx-auto"></div>
          </>
        ) : (
          ""
        )}
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8">
              <div className="row">
                {reportError === "" ? (
                  <Card articles={news} />
                ) : (
                  <ErrorCard reportError={reportError} />
                )}
              </div>
            </div>
            <div className="col-md-4">
              <div className="row">
                <div className="col-md-12">
                  <InTheNews />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TechNews;
