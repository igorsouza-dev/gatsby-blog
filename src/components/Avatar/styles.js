import styled from 'styled-components';
import media from 'styled-media-query';

import Img from 'gatsby-image';
export const AvatarImg = styled(Img)`
  border-radius: 50%;
  margin: auto;
  height: 3.75rem;
  width: 3.75rem;

  ${media.lessThan('large')`
    height: 1.75rem;
    width: 1.75rem;
  `}
`;
