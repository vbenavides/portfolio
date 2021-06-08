import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import FotoPerfil from '../../content/vbenavides.jpg';
import { srConfig } from '../../config';
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion';
import sr from '../../utils/sr';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;

const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);

    &:hover,
    &:focus {
      background: transparent;
      outline: 0;

      &:after {
        top: 15px;
        left: 15px;
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      /* background-color: var(--navy); */
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--green);
      top: 20px;
      left: 20px;
      z-index: -1;
    }
  }
`;

const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;

const skills = [
  'JavaScript (ES6+)',
  'React',
  'Eleventy',
  'Vue',
  'Node.js',
  'WordPress',
];

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <StyledAboutSection id='about' ref={revealContainer}>
      <h2 className='numbered-heading'>About Me</h2>

      <div className='inner'>
        <StyledText>
          <div>
            <p>
              Hello! My name is Vicente and I enjoy creating things that live on
              the internet. Lorem ipsum dolor sit, amet consectetur adipisicing
              elit. Perferendis ex, dolore accusamus earum esse corporis tempore
              quaerat praesentium culpa dolor. Voluptatum reiciendis at iste
              corporis quidem atque deleniti optio ducimus?
            </p>

            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut ullam
              dolor delectus voluptate harum unde dolorum eveniet perspiciatis,
              at temporibus optio corporis in illum sint, porro mollitia, facere
              nulla natus!
            </p>

            <p>Here are a few technologies I've been working with recently:</p>
          </div>

          <ul className='skills-list'>
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>

        <StyledPic>
          <div className='wrapper'>
            <img src={FotoPerfil} alt='vbenavides' />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
