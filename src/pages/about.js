import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/seo';
import * as S from '../components/Post/styles';
import SocialLinks from '../components/SocialLinks';

const description = `
Mussum Ipsum, cacilds vidis litro abertis. Não sou faixa preta cumpadi, sou preto inteiris, inteiris. Paisis, filhis, espiritis santis. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis. Copo furadis é disculpa de bebadis, arcu quam euismod magna.

A ordem dos tratores não altera o pão duris. Viva Forevis aptent taciti sociosqu ad litora torquent. Delegadis gente finis, bibendum egestas augue arcu ut est. Atirei o pau no gatis, per gatis num morreus.

`;
const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <S.PostHeader>
      <S.PostTitle>About me</S.PostTitle>
      <S.PostDescription>{description}</S.PostDescription>
    </S.PostHeader>
    <S.MainContent>
      <div>
        <h1>Skills</h1>
        <p></p>
        <ul>
          <li>Javascript</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>Node.js</li>
          <li>React.js</li>
          <li>PHP</li>
          <li>Vue.js</li>
        </ul>
      </div>
    </S.MainContent>
    <S.CenterWrapper>
      <h1>Contact me</h1>
      <SocialLinks isResponsive={false} />
    </S.CenterWrapper>
  </Layout>
);

export default AboutPage;
