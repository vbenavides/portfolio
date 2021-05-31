import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  padding: 0px 50px;
  height: var(--nav-height);
  background-color: rgba(10, 25, 47, 0.85);
`;

const Nav = () => {
  return (
    <StyledHeader>
      <nav>
        <div>Logo</div>
        <div>
          <ol>
            <li>
              <a href='/'>About</a>
            </li>
            <li>
              <a href='/'>Experience</a>
            </li>
            <li>
              <a href='/'>Work</a>
            </li>
            <li>
              <a href='/'>Contact</a>
            </li>
            <li>
              <a href='/'>Resume</a>
            </li>
          </ol>
        </div>
      </nav>
    </StyledHeader>
  );
};

export default Nav;
