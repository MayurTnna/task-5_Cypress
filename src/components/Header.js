import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../assets/scss/Header.scss";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdOutlineShoppingBag } from "react-icons/md";
import { useSelector } from "react-redux";
import { useState } from "react";
import ShoppingCart from "./ShoppingCart";

function Header() {
  const getData = useSelector((state) => state.cartReducer.data);
  const [showCard, setShowCard] = useState(false);

  const navigate = useNavigate();
  const handleShow = (e) => {
    e.preventDefault();
    setShowCard((prev) => !prev);
  };

  const handleNavigate = () => {
    navigate("/UserProfile");
  };

  return (
    <Navbar className=" indexz" variant="dark" expand="lg">
      <Container fluid>
        <Link to="/product" className="text-decoration-none">
          <Navbar.Brand href="/product" className="head-section ">
            Buzzzzarrrr
          </Navbar.Brand>
        </Link>

        <Nav
          className="me-auto my-2 my-lg-0  border-none"
          style={{ maxHeight: "100px" }}
          navbarScroll
        ></Nav>
        <Form className="d-flex">
          <div className="px-3 mt-2">
            <Button
              onClick={handleShow}
              className="float-start"
              variant="ghost"
            >
              <div id="showcartClick" class="icon-container">
                <MdOutlineShoppingBag className="text-danger fs-3" />
                <span class="badge_container  text-light">
                  {getData.length}
                </span>
              </div>
            </Button>
          </div>
          <Button href="" onClick={handleNavigate} variant="dark">
            <CgProfile className="text-info" />
          </Button>
        </Form>
        <div className="mt-5 mx-4">{showCard && <ShoppingCart />}</div>
      </Container>
    </Navbar>
  );
}

export default Header;
