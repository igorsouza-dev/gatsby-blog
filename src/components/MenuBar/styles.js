import styled from 'styled-components';
import media from 'styled-media-query';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

export const MenuBarWrapper = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  background: var(--mediumBackground);
  border-left: 1px solid var(--borders);
  padding: 0.8rem 0;
  position: fixed;
  right: 0;
  width: 2.75rem;
  height: 100vh;
  transition: background 0.5s;

  ${media.lessThan('large')`
    border-top: 1px solid var(--borders);
    flex-direction: row;
    bottom: 0;
    width: 100vw;
    height: 2.75rem;
  `}
`;

export const MenuBarGroup = styled.div`
  display: flex;
  flex-direction: column;
  ${media.lessThan('large')`
    flex-direction: row;
  `}
`;

export const MenuBarLink = styled(AniLink)`
  display: block;
  &.active {
    span {
      color: var(--highlight);
    }
  }
`;

export const MenuBarItem = styled.span`
  color: var(--texts);
  display: block;
  padding: 1.1rem;
  cursor: pointer;
  position: relative;
  height: 1.5rem;
  width: 1.5rem;
  &.light {
    color: #d4d400;
    &:hover {
      color: #e2e240;
    }
  }
  &:hover {
    color: var(--highlight);
  }
  &.display {
    ${media.lessThan('large')`
      display: none;
    `}
  }
  ${media.greaterThan('large')`
    &:hover {
      color: var(--highlight);
    }
  `}
  ${media.lessThan('large')`
    padding: .9rem;
    position: relative;
    height: 1.8rem;
    width: 1.8rem;
  `}
`;
