import styled from 'styled-components';
import { Link } from 'gatsby';

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
`;

export const MenuBarGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MenuBarLink = styled(Link)`
  display: block;
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
`;
