import React from "react";

const ErrorCard = ({ reportError }) => {
  return (
    <div className="col-md-12">
      <div className="card z-depth-0">
        <div className="card-body text-muted">
          <i className="fas fa-file mb-2" style={{ fontSize: "40px" }}></i>
          <h4 className="text-dark">An error occurred</h4>
          <h6>There was an error loading the news.</h6>
          <p>Try:</p>
          <ul>
            <li>Checking the network cables, modem and router</li>
            <li>Reconnecting to Wi-Fi</li>
          </ul>
          <small>{reportError}</small>
        </div>
      </div>
    </div>
  );
};

export default ErrorCard;
