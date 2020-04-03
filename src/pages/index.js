import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>My blog</h1>
    <div>
      <ul>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </div>
  </Layout>
);

export default IndexPage;
