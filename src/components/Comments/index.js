import React from 'react';
import ReactDisqusComments from 'react-disqus-comments';
import PropTypes from 'prop-types';
import * as S from './styles';

const Comments = ({ url, title }) => {
  const completeURL = `${process.env.GATSBY_APP_URL}${url}`;
  return (
    <S.CommentsWrapper>
      <S.CommentsTitle>Comments</S.CommentsTitle>
      <ReactDisqusComments
        shortname={process.env.GATSBY_DISQUS_SHORTNAME}
        identifier={completeURL}
        title={title}
        url={completeURL}
      />
    </S.CommentsWrapper>
  );
};
Comments.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Comments;
