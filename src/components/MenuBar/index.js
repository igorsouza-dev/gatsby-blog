import React from 'react';
import { Home } from '@styled-icons/boxicons-solid/Home';
import { SearchAlt2 as Search } from '@styled-icons/boxicons-regular/SearchAlt2';
import { UpArrowAlt as Arrow } from '@styled-icons/boxicons-regular/UpArrowAlt';
import { Bulb as Light } from '@styled-icons/boxicons-regular/Bulb';
import { Grid } from '@styled-icons/boxicons-solid/Grid';

import * as S from './styles';

const MenuBar = () => (
  <S.MenuBarWrapper>
    <S.MenuBarGroup>
      <S.MenuBarLink to="/" title="Back to home">
        <S.MenuBarItem>
          <Home />
        </S.MenuBarItem>
      </S.MenuBarLink>
      <S.MenuBarLink to="/search" title="Pesquisar">
        <S.MenuBarItem>
          <Search />
        </S.MenuBarItem>
      </S.MenuBarLink>
    </S.MenuBarGroup>
    <S.MenuBarGroup>
      <S.MenuBarItem title="Change theme">
        <Light />
      </S.MenuBarItem>
      <S.MenuBarItem title="Change view">
        <Grid />
      </S.MenuBarItem>
      <S.MenuBarItem title="Go to the top">
        <Arrow />
      </S.MenuBarItem>
    </S.MenuBarGroup>
  </S.MenuBarWrapper>
);

export default MenuBar;
