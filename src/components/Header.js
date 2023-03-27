import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Navbar className="text-light" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0  border-none"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link to={"/product"}>
            <Nav.Link href="#action1">Home</Nav.Link>
            </Link>
          </Nav>
          <Form className="d-flex">
            <Button variant="dark">
              <CgProfile />
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
