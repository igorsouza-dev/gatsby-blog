const postsQuery = `{
  posts: allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
    edges {
      node {
        objectID: id
        frontmatter {
          category
          title
          description
          date_timestamp: date
          date(locale: "en-US", formatString: "DD MMMM[,] YYYY")
        }
        fields {
          slug
        }
        excerpt(pruneLength: 5000)
      }
    }
  }
}

`;

const flatten = arr =>
  arr.map(({ node: { frontmatter, ...rest } }) => ({
    ...frontmatter,
    date_timestamp: parseInt(
      (new Date(frontmatter.date_timestamp).getTime() / 1000).toFixed(0)
    ),
    ...rest,
  }));

const queries = [
  {
    query: postsQuery,
    transformer: ({ data }) => flatten(data.posts.edges),
    indexName: 'Posts',
    settings: {
      attributesToSnippet: ['excerpt:20'],
    },
  },
];

module.exports = queries;
