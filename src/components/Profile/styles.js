import styled from 'styled-components';
import { Link } from 'gatsby';

export const Title = styled.h1`
  color: #744366;
`;

export const ProfileWrapper = styled.section`
  color: var(--texts);
  display: flex;
  flex-direction: column;
`;

export const ProfileLink = styled(Link)`
  color: var(--texts);
  text-decoration: none;
  transition: color 0.5s;

  &:hover {
    color: var(--highlight);
  }
`;

export const ProfileAuthor = styled.h1`
  font-size: 1.6rem;
  margin: 0.5rem auto 1.5rem;
`;

export const ProfilePosition = styled.small`
  display: block;
  font-size: 1.2rem;
  font-weight: 300;
`;

export const ProfileDescription = styled.p`
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.4;
`;
