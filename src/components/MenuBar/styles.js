import styled from 'styled-components';
import { Link } from 'gatsby';

export const MenuBarWrapper = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  background: #192734;
  border-left: 1px solid #38444d;
  padding: 0.8rem 0;
  position: fixed;
  right: 0;
  width: 2.75rem;
  height: 100vh;
`;

export const MenuBarGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MenuBarLink = styled(Link)`
  display: block;
`;

export const MenuBarItem = styled.span`
  color: #8899a6;
  display: block;
  padding: 1.1rem;
  cursor: pointer;
  position: relative;
  height: 1.5rem;
  width: 1.5rem;
  &:hover {
    color: #1fa1f2;
  }
`;