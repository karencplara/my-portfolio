import React from 'react';
import styled from 'styled-components';

import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { About, Description, Image } from '../styles';

const ServicesSection = () => {
    return (
       <Services>
           <Image>
               <img src="https://www.lojavirtual.com.br/wp-content/uploads/2017/09/produtos-servi%C3%A7os.png"/>
           </Image>
           <ServiceDescription>
             <h2>Things I do</h2>
             <Cards>
               <Card>
                <div className="icon">
                    <FontAwesomeIcon icon={faGithubSquare} size="4x"/>
                    <h3>Portfolio</h3>
                </div>
                <p>Check my work </p>
               </Card>
             </Cards>
           </ServiceDescription>
       </Services>
    )
}

const Services = styled(About)`
  h2{
      padding-top: 5rem;
  }
  p {
      width: 70%;
      padding: 2rem 0rem 4rem 0rem;
  }
`;

const ServiceDescription = styled(Description)`
  flex: 2;
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 1rem;
`;

const Card = styled.div`
  padding: 0.5rem;
  flex-basis: 20rem;
  .icon{
      display: flex;
      align-items: center;
  }
  h3{
      margin-left: 1rem;
      background: #fff;
      color: #000;
      padding: 1rem;
  }
`;
export default ServicesSection;