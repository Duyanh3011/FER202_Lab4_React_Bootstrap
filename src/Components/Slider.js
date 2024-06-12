import React from 'react'
import { Button, Card, Carousel, Col, Container, ListGroup, Row } from 'react-bootstrap'

export default function Slider() {
  return (
    <div>
      <Container fluid>
           <Row>
                <Col md={3} className='bg-light p-3'>
                    <ListGroup className='flex-column'>
                        <ListGroup.Item href="#category1">Category1</ListGroup.Item>
                        <ListGroup.Item href="#category2">Category2</ListGroup.Item>
                        <ListGroup.Item href="#category3">Category3</ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={9} className='bg-light p-3 full-height'>
                    <Carousel className='mb-4 full-height' >
                        <Carousel.Item className='full-height'> <img className='d-block w-100 h-10' 
                        src="https://images.unsplash.com/photo-1682905926517-6be3768e29f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                        alt='First-Slider'
                        /></Carousel.Item>
                        <Carousel.Item className='full-height'> <img className='d-block w-100' 
                        src="https://images.unsplash.com/photo-1682905926517-6be3768e29f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                        alt='Second-Slider'
                        /></Carousel.Item>
                        <Carousel.Item className='full-height'> <img className='d-block w-100' 
                        src="https://images.unsplash.com/photo-1682905926517-6be3768e29f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                        alt='Third-Slider'
                        /></Carousel.Item>
                    </Carousel>
                </Col>
           </Row>

           <Row className='mt-5'>
            <Col sm={6} md={4} lg={3} className='mb-4'>
                <Card>
                    <Card.Img variant="top" src="https://images.unsplash.com/photo-1682905926517-6be3768e29f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="outline-primary">Add To Cart</Button>
                    </Card.Body>
                </Card>
            </Col>
            <Col sm={6} md={4} lg={3} className='mb-4'>
                <Card>
                    <Card.Img variant="top" src="https://images.unsplash.com/photo-1682905926517-6be3768e29f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="outline-primary">Add To Cart</Button>
                    </Card.Body>
                </Card>
            </Col>
            <Col sm={6} md={4} lg={3} className='mb-4'>
                <Card>
                    <Card.Img variant="top" src="https://images.unsplash.com/photo-1682905926517-6be3768e29f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="outline-primary">Add To Cart</Button>
                    </Card.Body>
                </Card>
            </Col>
            <Col sm={6} md={4} lg={3} className='mb-4'>
                <Card>
                    <Card.Img variant="top" src="https://images.unsplash.com/photo-1682905926517-6be3768e29f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="outline-primary">Add To Cart</Button>
                    </Card.Body>
                </Card>
            </Col>
           </Row>
      </Container>
    </div>
  )
}
