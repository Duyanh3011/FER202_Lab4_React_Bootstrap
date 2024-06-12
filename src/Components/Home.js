import React from 'react'
import { Container } from 'react-bootstrap'
import Slider from './Slider'
import Footer from './Footer'
import Headers from './Headers'

export default function Home() {
  return (
    <>
    <Headers/>
    <Container>
      <Slider/>
    </Container>
    <Footer/>
    </>
  )
}
