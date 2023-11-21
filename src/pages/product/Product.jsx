import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { semuaProduct } from '../../data/index'

import Hero from '../../components/hero/Hero'
import ProductImage from '../../assets/img/studio-blackthorns-XPwtasD-0cI-unsplash.jpg'

const Product = () => {
  return (
    <div className='product-page'>
      
      <Hero
        cName="hero-product"
        heroImg={ ProductImage }
        title="Product"
      />
      
      <div className="kelas">
        <Container>
          <Row>
            <Col>
              <h1 className='text-center fw-bold'>All Product</h1>
            </Col>
          </Row>
          <Row>
            {semuaProduct.map((kelas) =>{
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

export default Product