import React from 'react';
import { useStaticQuery, StaticQuery, graphql } from 'gatsby';
import Avatar from '../Avatar';
import { Title } from './styles';
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
      <Avatar />
      <Title>{title}</Title>
      <h2>{position}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Profile;
