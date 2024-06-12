import React from 'react'
import { Col, Nav, NavItem, NavLink, Row } from 'react-bootstrap'
import { Cloud, HouseFill, ThreeDotsVertical } from 'react-bootstrap-icons'

export default function Footer() {
  return (
    <div>
      <Row>
        <Col sm={6} lg={3}>
                <Nav.Item className="d-flex flex-column align-items-center">
                    <Cloud size={24} />
                    <Nav.Link href="#home">Logo</Nav.Link>
                </Nav.Item>
            <Nav/>
        </Col>
        <Col sm={6} lg={3}>
                <Nav.Item className="d-flex flex-column align-items-center">
                    <Cloud size={24} />
                    <Nav.Link href="#home">Logo</Nav.Link>
                </Nav.Item>
            <Nav/>
        </Col>
        <Col sm={6} lg={3}>
                <Nav.Item className="d-flex flex-column align-items-center">
                    <Cloud size={24} />
                    <Nav.Link href="#home">Logo</Nav.Link>
                </Nav.Item>
            <Nav/>
        </Col>
        <Col sm={6} lg={3}>
                <Nav.Item className="d-flex flex-column align-items-center">
                    <Nav.Link href="#home">© 2023 Author</Nav.Link>
                </Nav.Item>
            <Nav/>
        </Col>
    </Row>
        
    </div>
  )
}
