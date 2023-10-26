import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import Userfront from "@userfront/react";
import WebFont from 'webfontloader';

if (!Userfront.tokens.accessToken) {
    console.log("Not logged in!!");
} else if (Userfront.tokens.accessToken) {
    console.log("Thinks it's logged in");
}

function AuthNavbar() {

  return (
    <Navbar expand="lg" className="bg-body-tertiary"bg="dark" data-bs-theme="dark">
      <Container >
        <Link to={`/`} style={{textDecoration: 'none'}}><h1 class='scratchy' style={{color: 'white'}}>CRY WOLF</h1></Link>
        <Navbar.Brand href={`/`}></Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <div class='cleanSans'>
            <Nav className="me-auto">
                <Nav.Link href={`/`}><h4>Home</h4></Nav.Link>
                <NavDropdown title="USER" id="basic-nav-dropdown">
                {!Userfront.tokens.accessToken &&
                    <NavDropdown.Item href={`/Login`}><h4>Login</h4></NavDropdown.Item>
                }
                <NavDropdown.Item href={`/Signup`}><h4>Sign Up</h4></NavDropdown.Item>
                <NavDropdown.Item href={`/Reset`}><h4>Reset Password</h4></NavDropdown.Item>
                {Userfront.tokens.accessToken &&
                    <NavDropdown.Item onClick={Userfront.logout} href={`/`}><h4>Logout</h4></NavDropdown.Item>
                }
                </NavDropdown>
            </Nav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AuthNavbar;