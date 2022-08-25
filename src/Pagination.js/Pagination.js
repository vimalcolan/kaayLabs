import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Pagination = () => {
  const dispatch = useDispatch();
  const currentItems = useSelector((state) => state.pageSizeReducer);
  const currentPage = useSelector((state) => state.pageNumReducer);
 
  const pages = [];
  for (let i = 1;i <= Math.ceil(100 / currentItems);i++
  ) {
    pages.push(i);
  }
  const maxPageNumberLimit= 3;
  const minPageNumberLimit = 1;

  return (
    <>
      <div className="pagination-sec d-flex justify-content-between align-items-center mt-2">
        <div className="page-size d-flex align-items-center">
          <span>Show </span>
          <div className="custom-select">
            <select onChange={(e) => { dispatch({ type: "CHANGE", payload: e.target.value })}} name="pageSize" value={currentItems} >
              <option name="five" value="5">5</option>
              <option name="ten" value="10">10</option>
            </select>
          </div>
          <span> of Total Entries</span>
        </div>
        <div className="page-numbers">
          <ul>
            <li>
              <button className="pagination-prev-btn" onClick={() => {dispatch({ type: "DECREASE" })}} disabled={currentPage === pages[0] ? true : false}>
                Prev.
              </button>
            </li>
            {pages.map((num, index) => {
             if (num <= maxPageNumberLimit && num >= minPageNumberLimit) {
                return (
                  <li  key={index} id={num} onClick={() => { dispatch({ type: "PAGECHANGE", payload: index + 1 }) }} className={currentPage === num ? "active" : ""} >
                    <span> {num}</span>
                  </li>
                );
              }
            })}
            <li>
              <button className="pagination-next-btn" onClick={() => {dispatch({ type: "INCREASE" })}} disabled={currentPage === pages[pages.length - 1] ? true : false } >
                Next
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Pagination;
