import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer py-5'>
      <Container>
        <Row className='d-flex justify-content-between'>
          <Col lg='5'>
            <h3 className='fw-bold text-white'>LeBev</h3>
            <p className='desc text-white'>Discover Beverages Types and New Product From All Around World</p>
            <div className='no mb-1 mt-4'>
              <Link className='text-decoration-none'>
                <i className='fa-brands fa-whatsapp'></i>
                <p className='m-0'>+62 123456</p>
              </Link>
            </div>
            <div className='mail'>
              <Link className='text-decoration-none'>
                <i className='fa-regular fa-envelope'></i>
                <p className='m-0'>null-email@gmail.com</p>
              </Link>
            </div>
          </Col>
          <Col className='d-flex flex-column col-lg-2 col mt-lg-0 mt-5'>
            <h5 className='fw-bold text-white'>Menu</h5>
            <Link to="Home">Home</Link>
            <Link to="About">About</Link>
            <Link to="Product">Product</Link>
            <Link to="Service">Service</Link>
            <Link to="Contact">Contact</Link>
          </Col>
          <Col lg='4' className='mt-lg-0 mt-5'>
            <h5 className='fw-bold text-white'>Follow Us</h5>
            <div className="social mt-3">

              <Link to="https://www.facebook.com">
                <i className='fa-brands fa-facebook'></i>
              </Link>
              <Link to="https://www.X.com">
                <i className='fa-brands fa-x-twitter'></i>
              </Link>
              <Link to="https://www.instagram.com">
                <i className='fa-brands fa-instagram'></i>
              </Link>
              <Link to="https://www.youtube.com">
                <i className='fa-brands fa-youtube'></i>
              </Link>
              
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className='text-center text-white px-md-0 px-3'>© Copyright 2023 by LeBev, All Right Reserved</p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Footer