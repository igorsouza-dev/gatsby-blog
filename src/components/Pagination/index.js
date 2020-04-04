import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import * as S from './styles';

const Pagination = ({
  isFirst,
  isLast,
  currentPage,
  numPages,
  prevPage,
  nextPage,
}) => (
  <S.PaginationWrapper>
    {!isFirst && <Link to={prevPage}>← Previous page</Link>}
    <p>
      {currentPage} of {numPages}
    </p>
    {!isLast && <Link to={nextPage}>Next Page →</Link>}
  </S.PaginationWrapper>
);

Pagination.propTypes = {
  isFirst: PropTypes.bool.isRequired,
  isLast: PropTypes.bool.isRequired,
  currentPage: PropTypes.number.isRequired,
  numPages: PropTypes.number.isRequired,
  prevPage: PropTypes.string,
  nextPage: PropTypes.string,
};

export default Pagination;
