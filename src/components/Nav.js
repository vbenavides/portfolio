import React from 'react';
import styled, { css } from 'styled-components';
import { navLinks } from '../config';
import { Link } from 'react-router-dom';
// import mixins from '../styles/mixins';

const StyledHeader = styled.header`
  ${({ theme }) => theme.mixins.flexBetween}
  position: fixed;
  top: 0;
  z-index: 11;
  padding: 0px 50px;
  width: 100%;
  height: 70px;
  background-color: rgba(10, 25, 47, 0.85);
  filter: none !important;
  pointer-events: auto !important;
  user-select: auto !important;
  backdrop-filter: blur(10px);
  transition: var(--transition);

  @media (max-width: 1080px) {
    padding: 0 40px;
  }
  @media (max-width: 768px) {
    padding: 0 25px;
  }

  /* @media (prefers-reduced-motion: no-preference) {
    ${(props) =>
    props.scrollDirection === 'up' &&
    !props.scrolledToTop &&
    css`
      height: var(--nav-scroll-height);
      transform: translateY(0px);
      background-color: rgba(10, 25, 47, 0.85);
      box-shadow: 0 10px 30px -10px var(--navy-shadow);
    `};

    ${(props) =>
    props.scrollDirection === 'down' &&
    !props.scrolledToTop &&
    css`
      height: var(--nav-scroll-height);
      transform: translateY(calc(var(--nav-scroll-height) * -1));
      box-shadow: 0 10px 30px -10px var(--navy-shadow);
    `};
  } */
`;

const StyledNav = styled.nav`
  ${({ theme }) => theme.mixins.flexBetween}
  position: relative;
  width: 100%;
  color: var(--lightest-slate);
  font-family: var(--font-mono);
  counter-reset: item 0;
  z-index: 12;

  .logo {
    ${({ theme }) => theme.mixins.flexCenter}

    a {
      color: var(--green);
      width: 42px;
      height: 42px;

      &:hover,
      &:focus {
        svg {
          fill: var(--green-tint);
        }
      }

      svg {
        fill: none;
      }
    }
  }
`;

const Styledlinks = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }

  ol {
    ${({ theme }) => theme.mixins.flexBetween}
    padding: 0;
    margin: 0;
    list-style: none;

    li {
      margin: 0 5px;
      position: relative;
      counter-increment: item 1;
      font-size: var(--fz-xs);

      a {
        padding: 10px;

        &:before {
          content: '0' counter(item) '.';
          margin-right: 5px;
          color: var(--green);
          font-size: var(--fz-xxs);
          text-align: right;
        }
      }
    }
  }

  .resume-button {
    ${({ theme }) => theme.mixins.smallButton}
    margin-left: 15px;
    font-size: var(--fz-xs);
  }
`;

const Nav = () => {
  const Logo = (
    <div className='logo' tabIndex='-1'>
      <a href='/' aria-label='home'>
        vbenavides
      </a>
    </div>
  );

  const ResumeLink = (
    <a
      className='resume-button'
      href='/resume.pdf'
      target='_blank'
      rel='noopener noreferrer'
    >
      Resume
    </a>
  );

  return (
    <StyledHeader>
      <StyledNav>
        {Logo}
        <Styledlinks>
          <ol>
            {navLinks.map(({ url, name }, i) => {
              return (
                <li key={i}>
                  <Link to={url}>{name}</Link>
                </li>
              );
            })}
          </ol>
          <div>{ResumeLink}</div>
        </Styledlinks>
      </StyledNav>
    </StyledHeader>
  );
};

export default Nav;
