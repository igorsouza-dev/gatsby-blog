import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/seo';
import * as S from '../components/Post/styles';

const BlogPost = ({ data }) => {
  const {
    markdownRemark: {
      frontmatter: { title, date, description },
      html,
      timeToRead,
    },
  } = data;
  return (
    <Layout>
      <SEO title={title} />

      <S.PostHeader>
        <S.PostDate>
          {date} • {timeToRead} min of reading
        </S.PostDate>
        <S.PostTitle>{title}</S.PostTitle>
        <S.PostDescription>{description}</S.PostDescription>
      </S.PostHeader>
      <S.MainContent>
        <div dangerouslySetInnerHTML={{ __html: html }}></div>
      </S.MainContent>
    </Layout>
  );
};

export const query = graphql`
  query Post($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        description
        date(locale: "en-US", formatString: "DD MMMM[,] YYYY")
      }
      html
      timeToRead
    }
  }
`;

export default BlogPost;
