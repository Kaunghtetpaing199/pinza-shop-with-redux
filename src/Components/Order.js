import React from "react";
import { Link } from "react-router-dom";
import Container from "./Styled";
import { useDispatch } from "react-redux";
import { GetItems } from "../actions";

const Order = ({ cart = [] }) => {
  const dispatch = useDispatch();
  return (
    <React.Fragment>
      <div className="container">
        <Container>
          {cart.map((item, index) => (
            <div
              className={index % 2 !== 0 ? "item reverse" : "item"}
              data-aos={index % 2 !== 0 ? "fade-left" : "fade-right"}
              key={index}
            >
              <div>
                <h3>{item.fields.name}</h3>
                <p>
                  {item.fields.ingredients ? item.fields.ingredients : null}
                </p>
                <h4>{item.fields.price}</h4>
                <button
                  onClick={() => dispatch(GetItems(item.fields.id))}
                  className="btn btn-primary"
                >
                  Order
                </button>
              </div>

              <img
                src={
                  index % 2 === 0
                    ? "/Images/m-arrow-up-left.svg"
                    : "/Images/m-arrow-up-right.svg"
                }
                className="arrow"
                alt="arrow"
              />
              <Link to={`/shop/${item.fields.name}`} className="pinza-link">
                <img
                  src={item.fields.featuredImg}
                  alt="pinza1"
                  className="pinza-img"
                />
              </Link>
            </div>
          ))}
        </Container>
      </div>
    </React.Fragment>
  );
};
export default Order;
