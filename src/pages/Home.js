import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import Hero from '../components/sections/Hero';

const StyledMainContainer = styled.main`
  counter-reset: section;
`;

const Home = () => {
  return (
    <Layout>
      <StyledMainContainer>
        <Hero />
      </StyledMainContainer>
    </Layout>
  );
};

export default Home;
