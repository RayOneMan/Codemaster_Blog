import React from "react";
import { getPagesArray } from "../../../utils/pages";

import "./Pagination.scss";

const Pagination = ({ totalPages, page, changePage }) => {
  let pagesArray = getPagesArray(totalPages);
  return (
    <div className="pagination">
      {pagesArray.map(p =>
        <button
          onClick={() => changePage(p)}
          key={p}
          className={page === p ? "pagination__btn_active" : "pagination__btn"}
        >
          {p}
        </button>
      )}
    </div>
  );
};

export default Pagination;
