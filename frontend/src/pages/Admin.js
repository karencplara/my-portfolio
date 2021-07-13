import React from 'react';
import { Jumbotron, Tabs, Tab, Container } from 'react-bootstrap';
import PortfolioList from '../components/admin/PortfolioList';
import WelcomeTab from '../components/admin/WelcomeTab';

import { Redirect } from 'react-router-dom';
import Userfront from '@userfront/react';

import jwt_decode from 'jwt-decode';

Userfront.init('xbr4x4bw');

const Admin = ({location}) => {
    const projectId = 'xbr4x4bw';

    if(!Userfront.accessToken()) {
        return (
            <Redirect to={{
                pathname: '/login',
                state: { from: location }
            }}
            />
        )
    }
    const accessData = jwt_decode(Userfront.accessToken());

    const roles = accessData.authorization[projectId].roles;
    const isAdmin = roles.includes('admin');
    
    if(!isAdmin) {
        return (
            <Redirect to={{
                pathname: '/portfolio',
            }}
            />
        )
    }

    return(
        <Container fluid>
            <Jumbotron>
            <h1>Admin Panel</h1>
            </Jumbotron>
            <Tabs transition={false} defaultActiveKey="home" id="tab-navigation">
                <Tab eventKey="home" title="Home">
                   <WelcomeTab/>
                </Tab>
                <Tab eventKey="portfolio" title="Portfolio">
                   <PortfolioList />
                </Tab>
            </Tabs>
        </Container>
    )
}

export default Admin;