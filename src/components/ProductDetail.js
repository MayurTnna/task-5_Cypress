import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Header from "./Header";
import { RiStarSFill } from "react-icons/ri";
import Badge from "react-bootstrap/Badge";
import "../assets/scss/main.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import axios from "axios";
import { useParams } from "react-router-dom";


function ProductDetail() {
  const [data, setData] = useState();
  const { id } = useParams();

  console.log(id);
  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.error(error.message);
      });
  }, []);

  return (
    <>
    <Header/>
 
    <div className=" bg-dark row">
      {data && (
        <Card className="text-dark col-lg-2 m-auto">
          <Carousel>
            {data.images.map((item) => (
              <div>
                <img src={item} />
              </div>
            ))}
          </Carousel>

          <Card.Body>
            <Card.Title>{data.title}</Card.Title>
            <Card.Text>{data.description}</Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush b-0">
            <ListGroup.Item>{data.brand}</ListGroup.Item>
            <ListGroup.Item>{data.category}</ListGroup.Item>
            <ListGroup.Item className="text-danger">
              {data.price}$
            </ListGroup.Item>
            <ListGroup.Item>
              <Badge pill bg="warning" text="dark">
                <div className="d-flex align-items-center justify-content-center">
                  {data.rating}
                  <RiStarSFill />
                </div>
              </Badge>
              {console.log(data)}
            </ListGroup.Item>
            <ListGroup.Item className="text-success">
              {data.discountPercentage}%
            </ListGroup.Item>
          </ListGroup>
        </Card>
      )}
    </div>
  </>
  );
}

export default ProductDetail;
