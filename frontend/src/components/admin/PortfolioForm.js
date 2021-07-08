import React from 'react';

import { Form, Container, CardColumns, Card, Button, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PortfolioForm = ({title, setTitle, shortDescription, setShortDescription,longDescription,setLongDescription,image,setImage,slug,tech, setTech}) => {
    const handleRemoveItem = (id) => {
        const newTech = tech.filter(el => el._id !== id);
        setTech(newTech);
    }
    return(
        <Container>
            <Form>
                <Form.Group>
                    <Form.Label>Title</Form.Label>
                    <Form.Control 
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Short Description</Form.Label>
                    <Form.Control 
                        type="text"
                        value={shortDescription}
                        onChange={(e) => setShortDescription(e.target.value)}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Long Description</Form.Label>
                    <Form.Control 
                        as="textarea" 
                        rows={5} 
                        value={longDescription}
                        onChange={(e) => setLongDescription(e.target.value)}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Image</Form.Label>
                    <Form.Control 
                        type="text"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                    />
                </Form.Group>
            </Form>
            <CardColumns>
                {
                    tech?.map(technology => {
                        return(
                            <Card>
                                <Card.Body>
                                    <Card.Text>
                                        <FontAwesomeIcon icon={[technology.iconType, technology.icon]} size='3x' /> {technology.label}
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <Button 
                                        size='sn'
                                        variant="danger" 
                                        block 
                                        onClick={() => handleRemoveItem(technology._id)}
                                    >
                                        remove
                                    </Button>
                                </Card.Footer>
                            </Card>
                        )
                    })
                }
            </CardColumns>
            <Form inline>
                <Form.Row>
                    <Col xs="auto">
                        <Form.Control 
                            placeholder="Type: fab"
                        />
                    </Col>
                    <Col xs="auto">
                        <Form.Control 
                            placeholder="Icon: github..."
                        />
                    </Col> 
                    <Col xs="auto">
                        <Form.Control 
                            placeholder="Label: GitHub..."
                        />
                    </Col>
                    <Col xs="auto">
                        <Button className="mb-2">Add</Button>
                    </Col>
                </Form.Row>
            </Form>
        </Container>
    )
}

export default PortfolioForm;