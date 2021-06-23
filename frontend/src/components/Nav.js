import React from 'react'

import styled from 'styled-components'

import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <StyledNav>
            <h1><Link to='/'>Logo</Link></h1>
            <ul>
                <li><Link to='/'>About me</Link></li>
                <li><Link to='/portfolio'>Portfolio</Link></li>
                <li><Link to='/contact'>Contact Me</Link></li>
            </ul>
        </StyledNav>
    )
}

const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background: #282828;
  position: sticky;
  top: 0;
  ul {
    display: flex;
    list-style: none;
  }
  li {
    padding-left: 10rem;
  }
  a {
    color: #fff;
    text-decoration: none;
  }
`;

export default Nav;