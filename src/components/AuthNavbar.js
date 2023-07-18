import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import WebFont from 'webfontloader';


function AuthNavbar() {

  return (
    <Navbar expand="lg" className="bg-body-tertiary"bg="dark" data-bs-theme="dark">
      <Container >
        <h1 class='scratchy' style={{color: 'white'}}>CRY WOLF</h1>
        <Navbar.Brand href={`/`}></Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <div class='cleanSans'>
            <Nav className="me-auto">
                <Nav.Link href={`/`}><h4>Home</h4></Nav.Link>
                <NavDropdown title="USER" id="basic-nav-dropdown">
                <NavDropdown.Item href={`/Login`}><h4>Login</h4></NavDropdown.Item>
                <NavDropdown.Item href={`/Signup`}><h4>Sign Up</h4></NavDropdown.Item>
                </NavDropdown>
            </Nav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AuthNavbar;