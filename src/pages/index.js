import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/seo';
import PostItem from '../components/PostItem';
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <PostItem
      slug="/slug"
      background="blue"
      category="misc"
      date="30 june, 2019"
      timeToRead="4"
      title="Test"
      description="Lorem ipsum amet"
    />
  </Layout>
);

export default IndexPage;
