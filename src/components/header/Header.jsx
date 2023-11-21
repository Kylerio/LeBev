import { Navbar, Container, Nav } from "react-bootstrap"
import { NavLink } from "react-router-dom";
import { navLinks } from "../../data";

const Header = () => {
  return (
    <Navbar expand="lg" bg="light">
      <Container>
        <Navbar.Brand className="logo" href="/Home">LeBev</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="collapse" id="basic-navbar-nav">
          <Nav className="mx-auto">
            {navLinks.map((link) => {
              return (
                <div className="nav-link" key={link.id}>
                  <NavLink to={link.path} className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "active" : "")}>
                    {link.text}</NavLink>
                </div>
              );
            })}
          </Nav>

          <div className="button">
            <button className="btn btn-outline-info">Sign Up</button>
          </div>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header