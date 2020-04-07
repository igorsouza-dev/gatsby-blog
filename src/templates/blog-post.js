import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/seo';
import * as S from '../components/Post/styles';
import RecommendedPosts from '../components/RecommendedPosts';
import Comments from '../components/Comments';

const BlogPost = ({ data, pageContext }) => {
  const {
    markdownRemark: {
      frontmatter: { title, date, description, image },
      html,
      timeToRead,
      fields: { slug },
    },
  } = data;
  const next = pageContext.nextPost;
  const previous = pageContext.previousPost;
  return (
    <Layout>
      <SEO title={title} description={description} image={image} />

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
      <RecommendedPosts next={next} previous={previous} />
      <Comments title={title} url={slug} />
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
        image
      }
      fields {
        slug
      }
      html
      timeToRead
    }
  }
`;

export default BlogPost;
