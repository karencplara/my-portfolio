import React from 'react';
import styled from 'styled-components';

import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SocialNetworkSection = () => {
    return(
      <Network>  
        <Social href="" target='_blank'>
            <FontAwesomeIcon icon={faGithubSquare} size='4x'/>
            <h3>github.com/teste</h3>
        </Social>        
      </Network>
    )
}

const Network = styled.div `
  padding: 1rem 5rem;
`;

const Social = styled.a `
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border-radius: 15px 50px;
  padding-left: 2rem;
  text-decoration: none;
  &:hover {
    background-color: yellow;
    cursor: pointer;
  }
  h3{
    color: grey;
    margin: 2rem;
  }
  color: inherit;
`;

export default SocialNetworkSection;