import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Container from "./Styled";
const Order = ({ cart = [] }) => {
  return (
    <React.Fragment>
      <div className="container">
        <Container>
          {cart.map((item, index) => (
            <div
              className={item.fields.id % 2 === 0 ? "item reverse" : "item"}
              data-aos={item.fields.id % 2 === 0 ? "fade-left" : "fade-right"}
              key={index}
            >
              <div>
                <h3>{item.fields.name}</h3>
                <p>{item.fields.ingredients}</p>
                <h4>{item.fields.price}</h4>
                <Link to="/" className="btn btn-primary">
                  Order
                </Link>
              </div>
              <img
                src={
                  item.fields.id % 2 === 0
                    ? "/Images/m-arrow-up-left.svg"
                    : "/Images/m-arrow-up-right.svg"
                }
                className="arrow"
              />
              <img
                src={item.fields.featuredImg}
                alt="pinza1"
                className="pinza-img"
              />
            </div>
          ))}
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Order;
