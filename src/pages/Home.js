import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import About from '../components/sections/About';
import Contact from '../components/sections/Contact';
import Hero from '../components/sections/Hero';
import Jobs from '../components/sections/Jobs';
import Projects from '../components/sections/Projects';

const StyledMainContainer = styled.main`
  counter-reset: section;
`;

const Home = () => {
  return (
    <Layout>
      <StyledMainContainer className='fillHeight'>
        <Hero />
        <About />
        <Jobs />
        <Projects />
        <Contact />
      </StyledMainContainer>
    </Layout>
  );
};

export default Home;
