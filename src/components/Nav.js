import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { loaderDelay } from '../utils/index';
import useScrollDirection from '../hooks/useScrollDirection';
import Menu from '../components/Menu';
import PropTypes from 'prop-types';
import { navLinks } from '../config';
import { Link } from 'react-router-dom';

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

  @media (prefers-reduced-motion: no-preference) {
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
  }
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
      display: flex;
      align-items: center;
      color: var(--green);
      width: 161px;
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

const Nav = ({ isHome }) => {
  const [isMounted, setIsMounted] = useState(!isHome);
  const scrollDirection = useScrollDirection('down');
  const [scrolledToTop, setScrolledToTop] = useState(true);

  const handleScroll = () => {
    setScrolledToTop(window.pageYOffset < 50);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsMounted(true);
    }, 100);

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const timeout = isHome ? loaderDelay : 0;
  const fadeClass = isHome ? 'fade' : '';
  const fadeDownClass = isHome ? 'fadedown' : '';

  const Logo = (
    <div className='logo' tabIndex='-1'>
      <a href='/' aria-label='home'>
        {`<vbenavides/>`}
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
    <StyledHeader
      scrollDirection={scrollDirection}
      scrolledToTop={scrolledToTop}
    >
      <StyledNav>
        <TransitionGroup component={null}>
          {isMounted && (
            <CSSTransition classNames={fadeClass} timeout={timeout}>
              <div className='logo' tabIndex='-1'>
                {isHome ? (
                  <a href='/' aria-label='home'>
                    {Logo}
                  </a>
                ) : (
                  <a href='/' aria-label='home'>
                    {Logo}
                  </a>
                )}
              </div>
            </CSSTransition>
          )}
        </TransitionGroup>

        {/* {Logo} */}
        <Styledlinks>
          <ol>
            <TransitionGroup component={null}>
              {isMounted &&
                navLinks &&
                navLinks.map(({ url, name }, i) => (
                  <CSSTransition
                    key={i}
                    classNames={fadeDownClass}
                    timeout={timeout}
                  >
                    <li key={i}>
                      <a href={url}>{name}</a>
                    </li>
                  </CSSTransition>
                ))}
            </TransitionGroup>
          </ol>

          <TransitionGroup component={null}>
            {isMounted && (
              <CSSTransition classNames={fadeDownClass} timeout={timeout}>
                <div
                  style={{
                    transitionDelay: `${isHome ? navLinks.length * 100 : 0}ms`,
                  }}
                >
                  {ResumeLink}
                </div>
              </CSSTransition>
            )}
          </TransitionGroup>
        </Styledlinks>

        <TransitionGroup component={null}>
          {isMounted && (
            <CSSTransition classNames={fadeClass} timeout={timeout}>
              <Menu />
            </CSSTransition>
          )}
        </TransitionGroup>
      </StyledNav>
    </StyledHeader>
  );
};

Nav.propTypes = {
  isHome: PropTypes.bool,
};

export default Nav;
