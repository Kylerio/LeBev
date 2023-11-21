import React from 'react'

import { Container, Row, Col } from 'react-bootstrap'
import Hero from '../../components/hero/Hero'
import ServiceImage from '../../assets/img/mildlee-fMveBTz2qWw-unsplash.jpg'

const Service = () => {
  return (
    <div className='servicepage'>
      <Hero
        cName="hero-service"
        heroImg={ ServiceImage }
        title="Service"
      />
      
      <div className='service py-5'>
        <h1 className='fw-bold text-center py-4'>Subscription Box</h1>

        <Container className='pt-4'>
          <Row className='d-flex justify-content-between'>
            <Col lg='3'>
              <h3 className='fw-bold'>For Yourself</h3>
              <p className='desc'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio sint voluptates eligendi veritatis exercitationem inventore labore eveniet, harum optio, officia, culpa facilis cumque totam adipisci! Quia quod odio vero dolorum!</p>
            </Col>
            <Col lg='3'>
              <h3 className='fw-bold'>As a Gift</h3>
              <p className='desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio magni laboriosam exercitationem repellat accusantium molestiae, modi reprehenderit alias iste, ab, suscipit consequatur? Excepturi magnam omnis reiciendis quia sit. Vel, deserunt?</p>
            </Col>
            <Col lg='3'>
              <h3 className='fw-bold'>For Party</h3>
              <p className='desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam excepturi et nesciunt quod? Autem temporibus necessitatibus mollitia eligendi illo nemo vero reiciendis tenetur sit facilis explicabo natus odio, officiis totam.</p>
            </Col>
          </Row>

          <h1 className='fw-bold text-center pt-5'>Choose Plan</h1>
          <Row className='p-5 text-center d-flex justify-content-between'>
            <Col className='kolom py-5' lg='3'>
              <p>Classic</p>
              <h5>IDR 99.000 <span>only</span></h5>
              <ul>
                <li>Free Delivery</li>
                <li>Best for a Budget</li>
                <li>Mug with first delivery</li>
                <li>Save up to 25%</li>
              </ul>
              <div className="button">
                <button className="btn btn-dark">Select</button>
              </div>
            </Col>
            <Col className='kolom py-5' lg='3'>
              <p>Seasonal</p>
              <h5>IDR 149.000 <span>/ month</span></h5>
              <ul>
                <li>Free Delivery</li>
                <li>Best Seller Product</li>
                <li>Mug with first delivery</li>
                <li>Save up to 30%</li>
              </ul>
              <div className="button">
                <button className="btn btn-dark">Select</button>
              </div>
            </Col>
            <Col className='kolom py-5' lg='3'>
            <p>Luxe</p>
            <h5>IDR 249.000 <span>/ year</span></h5>
              <ul>
                <li>Free Delivery</li>
                <li>Premium Brands</li>
                <li>Mug with first delivery</li>
                <li>Save up to 35%</li>
              </ul>
              <div className="button">
                <button className="btn btn-dark">Select</button>
              </div>
            </Col>
          </Row>
        </Container>

      </div>

    </div>
  )
}

export default Service