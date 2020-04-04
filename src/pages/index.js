import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/seo';
import PostItem from '../components/PostItem';
const IndexPage = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query PostList {
        allMarkdownRemark {
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
    `
  );

  const posts = allMarkdownRemark.edges;

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

export default IndexPage;
