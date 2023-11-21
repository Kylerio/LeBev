import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { productNew } from '../../data/index'

import Hero from '../../components/hero/Hero'
import HomeImage from '../../assets/img/sean-sinclair-C_NJKfnTR5A-unsplash.jpg'

const Home = () => {
  return (
    <div className='home-page'>
      <Hero
        cName="hero"
        heroImg={ HomeImage }
        title="Explore a Symphony of Tastes and Find Bliss in Every Beverages"
        text="Discover Beverages Types and New Product From All Around World"
        buttonText="Explore Now"
        url="/Product"
        btnClass="show"
      />
      
      <div className="home-new">
        <Container>
          <Row>
            <Col>
              <h1 className='text-center fw-bold'>Best Product</h1>
            </Col>
          </Row>
          <Row>
            {productNew.map((kelas) =>{
              return (
                <Col key={kelas.id} className='shadow rounded'>
                  <img src={kelas.image} alt="unsplash.com" className='w-100 mb-5 rounded-top' />
                  <div className="star mb-2 px-3">
                    <i className={kelas.star1}></i>
                    <i className={kelas.star2}></i>
                    <i className={kelas.star3}></i>
                    <i className={kelas.star4}></i>
                    <i className={kelas.star5}></i>
                  </div>
                  <h5 className='mb-5 px-3'>{kelas.title}</h5>
                  <div className='ket d-flex justify-content-between align-items-center px-3 pb-3'>
                    <p className='m-0 text-primary fw-bold'>{kelas.price}</p>
                    <button className='btn btn-info rounded-1'>{kelas.buy}</button>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>

    </div>
  )
}

export default Home