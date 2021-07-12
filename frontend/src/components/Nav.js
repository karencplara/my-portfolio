import React from 'react'

import styled from 'styled-components'

import { Link } from 'react-router-dom'
import { LogoutButton } from './auth/Authentication'
import Userfront from "@userfront/react";

const Nav = () => {
	Userfront.init('xbr4x4bw');

    return (
        <StyledNav>
            <h1><Link to='/'>Logo</Link></h1>
            <ul>
                <li><Link to='/'>About me</Link></li>
                <li><Link to='/portfolio'>Portfolio</Link></li>
                <li><Link to='/contact'>Contact Me</Link></li>
                {
				  !Userfront.accessToken() && (
					<>
						<li><Link to='/login'>Login</Link></li>
						<li><Link to='/signup'>Signup</Link></li>
					</>
				  )
                }
				{Userfront.accessToken() && <li><LogoutButton /></li>}
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
  z-index: 10;
  ul {
    display: flex;
    list-style: none;
  }
  li {
    padding-left: 5rem;
  }
  a {
    color: #fff;
    text-decoration: none;
  }
`;

export default Nav;