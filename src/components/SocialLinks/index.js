import React from 'react';
import PropTypes from 'prop-types';

import Icons from './icons';
import Links from './content';

import * as S from './styles';

const SocialLinks = ({ isResponsive }) => (
  <S.SocialLinksWrapper isResponsive={isResponsive}>
    <S.SocialLinksList>
      {Links.map((link, i) => {
        const Icon = Icons[link.label];

        return (
          <S.SocialLinksItem key={i}>
            <S.SocialLinksLink
              href={link.url}
              title={link.label}
              target="_blank"
              rel="noopener noreferrer"
            >
              <S.IconWrapper>
                <Icon />
              </S.IconWrapper>
            </S.SocialLinksLink>
          </S.SocialLinksItem>
        );
      })}
    </S.SocialLinksList>
  </S.SocialLinksWrapper>
);
SocialLinks.propTypes = {
  isResponsive: PropTypes.bool,
};

SocialLinks.defaultProps = {
  isResponsive: true,
};

export default SocialLinks;
