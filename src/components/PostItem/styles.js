import styled from 'styled-components';
import { Link } from 'gatsby';

export const PostItemLink = styled(Link)`
  color: var(--texts);
  display: flex;
  text-decoration: none;

  &:hover {
    color: var(--highlight);
  }
`;

export const PostItemWrapper = styled.div`
  align-items: center;
  border-bottom: 1px solid var(--borders);
  display: flex;
  padding: 1rem 1.5rem;
  width: 100%;
`;

export const PostItemTag = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => props.background};
  border-radius: 50%;
  color: var(--white);
  font-size: 1rem;
  font-weight: 700;
  min-height: 90px;
  min-width: 90px;
  text-transform: uppercase;
`;

export const PostItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
`;

export const PostItemDate = styled.time`
  font-size: 0.9rem;
`;

export const PostItemTitle = styled.h1`
  font-size: 1.25rem;
  font-weight: 700;
  margin: 0.2rem 0 0.5rem;
`;

export const PostItemDescription = styled.p`
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.2;
`;
