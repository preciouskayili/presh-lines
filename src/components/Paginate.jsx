import React from "react";
const Paginate = ({ newsPerPage, totalNews, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalNews / newsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <div className="container flex-center">
        <nav aria-label="...">
          <ul className="pagination pagination-md">
            {pageNumbers.map((number) => (
              <li
                className={
                  currentPage === number ? "page-item active" : "page-item"
                }
                aria-current="page"
                key={number}
              >
                <span
                  style={{ cursor: "pointer" }}
                  className="page-link"
                  onClick={() => {
                    paginate(number);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  {number}
                </span>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Paginate;
