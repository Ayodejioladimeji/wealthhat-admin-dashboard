import React from "react";
// PACKAGES
import PropTypes from "prop-types";
import classnames from "classnames";

// COMPONENTS
import { usePagination, DOTS } from "./usePagination";
// import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";

const Paginate = (props) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    className,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];

  return (
    <ul
      className={classnames("pagination-container", { [className]: className })}
    >
      <li
        className={classnames("pagination-item", {
          disabled: currentPage === 1,
        })}
        onClick={onPrevious}
        disabled={currentPage === 1}
      >
        <div className="arrow left" />
      </li>

      {paginationRange.map((pageNumber, key) => {
        if (pageNumber === DOTS) {
          return (
            <li key={key} className="pagination-item dots">
              &#8230;
            </li>
          );
        }

        return (
          <li
            key={key}
            className={classnames("pagination-item", {
              selected: pageNumber === currentPage,
            })}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </li>
        );
      })}

      <li
        className={classnames("pagination-item", {
          disabled: currentPage === lastPage,
        })}
        onClick={onNext}
      >
        <div className="arrow right" />
      </li>
    </ul>
  );
};

Paginate.propTypes = {
  onPageChange: PropTypes.func,
  totalCount: PropTypes.any,
  siblingCount: PropTypes.any,
  currentPage: PropTypes.any,
  pageSize: PropTypes.any,
  className: PropTypes.any,
};

export default Paginate;
