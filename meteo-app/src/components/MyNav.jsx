import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import { Link, useLocation } from 'react-router'

function MyNav() {
  const location = useLocation()
  console.log(location)

  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
          <img
            src="/assets/images/logo.jpg"
            alt="Logo"
            width="90px"
            className="me-3"
          />
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            className=" border-0"
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Link
                to="/"
                className={`nav-link ${
                  location.pathname === '/' ? 'active' : ''
                }`}
              >
                Home
              </Link>
              <Link
                to="/previsione"
                className={`nav-link ${
                  location.pathname === '/previsione' ? 'active' : ''
                }`}
              >
                Previsione
              </Link>
              <Nav.Link>Situazione</Nav.Link>
              <Nav.Link>Mappe</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link>Contatti</Nav.Link>
              <Button className="ms-3 btn-outline-warning bg-dark border-0">
                Accedi
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default MyNav
