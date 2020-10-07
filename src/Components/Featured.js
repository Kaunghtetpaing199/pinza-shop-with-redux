import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Order from "./Order";
const Featured = () => {
  const cart = useSelector((state) => state.featuredData);
  return (
    <React.Fragment>
      <div className="container">
        <Order cart={cart} />
        <Link to="/" className="btn btn-primary">
          see more
        </Link>
      </div>
    </React.Fragment>
  );
};

export default Featured;
