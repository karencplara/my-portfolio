import React from 'react';
import { Jumbotron, Tabs, Tab, Container } from 'react-bootstrap';
import PortfolioList from '../components/admin/PortfolioList';
import PortfolioForm from '../components/admin/PortfolioForm';

const Admin = () => {
    return(
        <Container fluid>
            <Jumbotron>
            <h1>Admin Panel</h1>
            </Jumbotron>
            <Tabs defaultActiveKey="home" id="tab-navigation">
                <Tab eventKey="home" title="Home">
                   <h2>welcome</h2>
                </Tab>
                <Tab eventKey="portfolio" title="Portfolio">
                   <PortfolioList />
                </Tab>
                <Tab eventKey="tech" title="Technologies">
                   <h2>Technologies</h2>
                </Tab>
                <Tab eventKey="form" title="Form">
                   <PortfolioForm />
                </Tab>
            </Tabs>
        </Container>
    )
}

export default Admin;