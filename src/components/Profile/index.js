import React from 'react';
import { useStaticQuery, StaticQuery, graphql } from 'gatsby';
const Profile = () => {
  const {
    site: {
      siteMetadata: { title, position, description },
    },
  } = useStaticQuery(graphql`
    query getSiteMeta {
      site {
        siteMetadata {
          title
          description
          position
        }
      }
    }
  `);
  return (
    <div className="profile-wrapper">
      <h1>{title}</h1>
      <h2>{position}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Profile;
