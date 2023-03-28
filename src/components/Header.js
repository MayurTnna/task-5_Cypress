import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate()
  const handleNavigate = () =>{
    navigate("/UserProfile")
  }
  return (
    <Navbar className="text-light" variant="dark" expand="lg">
      <Container fluid>
        <Link to="/product">
        
        <Navbar.Brand href="#">Buzzzz-arrrr</Navbar.Brand>
        </Link>
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
          <Form className="d-flex">
            <Button href="" onClick={handleNavigate} variant="dark" >
              <CgProfile className="text-info" />
            </Button>
          </Form>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
