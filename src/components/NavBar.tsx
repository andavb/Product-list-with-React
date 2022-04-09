import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <>
      <Navbar bg="light" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand href="/">Product list with React</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="navbar-mega-menu">
            <Nav className="me-auto">
              <NavDropdown
                id="nav-dropdown-dark-example"
                title="Dropdown"
                menuVariant="light"
                className="mega-menu-dropdown"
              >
                <div className="menu-outer-section">
                  <div className="menu-section">
                    <Nav.Link href="/">Home</Nav.Link>
                  </div>
                  <div className="menu-section">
                    <Nav.Link href="/">Home</Nav.Link>
                  </div>
                  <div className="menu-section">
                    <Nav.Link href="/">Home</Nav.Link>
                  </div>
                  <div className="menu-section">
                    <Nav.Link href="/">Home</Nav.Link>
                  </div>
                </div>
                <div className="menu-outer-section">
                  <div className="menu-section">
                    <Nav.Link href="/">Home</Nav.Link>
                  </div>
                  <div className="menu-section">
                    <Nav.Link href="/">Home</Nav.Link>
                  </div>
                  <div className="menu-section">
                    <Nav.Link href="/">Home</Nav.Link>
                  </div>
                  <div className="menu-section">
                    <Nav.Link href="/">Home</Nav.Link>
                  </div>
                </div>
                <div className="menu-outer-section">
                  <div className="menu-section">
                    <Nav.Link href="/">Home</Nav.Link>
                  </div>
                  <div className="menu-section">
                    <Nav.Link href="/">Home</Nav.Link>
                  </div>
                  <div className="menu-section">
                    <Nav.Link href="/">Home</Nav.Link>
                  </div>
                  <div className="menu-section">
                    <Nav.Link href="/">Home</Nav.Link>
                  </div>
                </div>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
