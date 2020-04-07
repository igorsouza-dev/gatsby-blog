import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { AvatarImg } from './styles';

const Avatar = () => {
  const { avatarImage } = useStaticQuery(graphql`
    query {
      avatarImage: file(relativePath: { eq: "profile-photo.png" }) {
        childImageSharp {
          fluid(maxWidth: 60) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `);

  return <AvatarImg fixed={avatarImage.childImageSharp.fluid} />;
};

export default Avatar;
