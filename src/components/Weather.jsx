import React, { useState, useEffect } from "react";
import ListIcon from "./ListIcon.svg";
import { v4 as uuidv4 } from "uuid";

const Weather = () => {
  const api = {
    base: "https://saurav.tech/NewsAPI/top-headlines/category/general/us.json",
  };
  const [headlines, setHeadlines] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [loadError, setLoadError] = useState("");

  useEffect(() => {
    fetch(`${api.base}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setHeadlines(data.articles);
        setIsLoaded(true);
        console.log(data);
        console.log(headlines);
      })
      .catch((error) => {
        setLoadError(`${error}`);
        setIsLoaded(true);
      });
  }, [isLoaded, api.base, headlines]);

  const newArray = headlines.splice(0, 10);
  return (
    <div
      className="card z-depth-0 mb-3 d-none d-md-block"
      style={{ border: "1px solid rgb(206, 212, 218)" }}
    >
      <div className="card-body">
        <h5>In the News Now</h5>
        <hr />
        {isLoaded === false ? (
          <div className="spinner-border text-primary d-block mx-auto"></div>
        ) : (
          ""
        )}
        {newArray.map((headline) => (
          <div key={uuidv4()}>
            <span>
              <img src={ListIcon} alt="List" />
            </span>
            <a href={headline.url} style={{ textDecoration: "none" }}>
              <small className="text-dark p-2" style={{ fontWeight: "bolder" }}>
                {headline.title}
              </small>
            </a>
            <p className="text-muted">
              <small>
                Author:{" "}
                {headline.author !== null ? headline.author : "Not available"}{" "}
                {" . "}
              </small>
              <small>Source: {headline.source.name}</small>
            </p>
          </div>
        ))}
        {isLoaded === true ? (
          <div style={{ display: loadError === "" ? "none" : "block" }}>
            <p>Unable to get headlines</p>
            <small className="text-muted">{loadError}</small>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Weather;
