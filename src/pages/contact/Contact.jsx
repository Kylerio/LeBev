import React from 'react'
import { Container, Col, Row} from 'react-bootstrap'

import Hero from '../../components/hero/Hero'
import ContactImage from '../../assets/img/yesmore-content-aQQJYg6jwK4-unsplash.jpg'

const Contact = () => {
  return (
    <div className='contactpage'>
      
      
      <Hero
        cName="hero-contact"
        heroImg={ ContactImage }
        title="Contact"
      />

      <div className="contact py-5">
        <h1 className='fw-bold text-center py-4'>Contact Us</h1>

        <Container className='py-4'>
          <Row className='d-flex justify-content-between'>
            <Col lg='4 text-center py-3'>
              <h3 className=''>HOURS OF OPERATION</h3>
              <p className='desc'>09.00 to 17.00, Mon-Fri (Excluding Holidays)</p>
            </Col>
            <Col lg='4 text-center py-3'>
              <h3 className=''>PHONE</h3>
              <p className='desc'>+62 123456</p>
            </Col>
            <Col lg='4 text-center py-3'>
              <h3 className=''>GENERAL INQUIRIES</h3>
              <p className='desc'>null-email@gmail.com</p>
            </Col>
          </Row>
        </Container>


      </div>
      
    </div>
  )
}

export default Contact