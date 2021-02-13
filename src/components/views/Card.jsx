import React, { useState } from "react";
import Paginate from "../Paginate";
import { v4 as uuidv4 } from "uuid";

const Card = ({ articles }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [newsPerPage] = useState(10);

  const indexOfLastNews = currentPage * newsPerPage;
  const indexOfFirstNews = indexOfLastNews - newsPerPage;
  const currentNews = articles.slice(indexOfFirstNews, indexOfLastNews);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      {currentNews.map((article) => (
        <div key={uuidv4()} style={{ overflowX: "hidden" }}>
          <div className="container-fluid">
            <div
              className="card col-md-12 mb-3 z-depth-0"
              style={{ border: "1px solid #ccc" }}
            >
              <div className="card-body">
                <div className="row">
                  <div className="col-md-9">
                    <a
                      href={article.url}
                      rel="noreferrer"
                      target="_blank"
                      className="text-dark"
                      style={{ fontWeight: "500" }}
                    >
                      {article.title}
                    </a>
                    <hr />
                    <br />
                    <p>{article.description}</p>
                    <small
                      className="text-muted"
                      style={{
                        paddingRight: "2px",
                      }}
                    >
                      Source: {article.source.name}
                    </small>
                    <small
                      style={{
                        paddingLeft: "2px",
                      }}
                      className="text-muted"
                    >
                      Author:{" "}
                      {article.author !== null
                        ? article.author
                        : "Not available"}
                    </small>
                  </div>
                  <div className="col-md-3">
                    <img
                      className="img-fluid img-fluid rounded w-100"
                      src={article.urlToImage}
                      alt=""
                    />
                  </div>
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      <Paginate
        newsPerPage={newsPerPage}
        totalNews={articles.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </>
  );
};

export default Card;
