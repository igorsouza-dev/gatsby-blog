import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/seo';
import PostItem from '../components/PostItem';

const BlogList = ({ data }) => {
  const posts = data.allMarkdownRemark.edges;

  return (
    <Layout>
      <SEO title="Home" />
      {posts.map(
        ({
          node: {
            frontmatter: { background, category, title, description, date },
            timeToRead,
            fields: { slug },
          },
        }) => (
          <PostItem
            slug={slug}
            background={background}
            category={category}
            date={date}
            title={title}
            description={description}
            timeToRead={timeToRead}
            key={title}
          />
        )
      )}
    </Layout>
  );
};

export const query = graphql`
  query Posts($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          frontmatter {
            background
            category
            title
            description
            date(locale: "en-US", formatString: "DD MMMM[,] YYYY")
          }
          timeToRead
          fields {
            slug
          }
        }
      }
    }
  }
`;

export default BlogList;
