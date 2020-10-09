import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import Order from "../Components/Order";
import { Toggle } from "../actions";
const Shop = () => {
  const menu = useSelector((state) => state.menu);
  const dispatch = useDispatch();
  return (
    <React.Fragment>
      <Wrapper>
        <h1>MENU</h1>
        <ul>
          <li onClick={() => dispatch(Toggle("All"))}>
            <h3>ALL</h3>
          </li>
          <li onClick={() => dispatch(Toggle("meat"))}>
            <h3>MEAT</h3>
          </li>
          <li onClick={() => dispatch(Toggle("vegetarian"))}>
            <h3>VEGETARIAN</h3>
          </li>
          <li onClick={() => dispatch(Toggle("Vegan"))}>
            <h3>VEGAN</h3>
          </li>
          <li onClick={() => dispatch(Toggle("Dessert"))}>
            <h3>DESSERT</h3>
          </li>
          <li onClick={() => dispatch(Toggle("salad"))}>
            <h3>SALADS</h3>
          </li>
          <li onClick={() => dispatch(Toggle("drink"))}>
            <h3>DRINK</h3>
          </li>
          <li onClick={() => dispatch(Toggle("side"))}>
            <h3>Sides</h3>
          </li>
        </ul>
      </Wrapper>
      <Order cart={menu} />
    </React.Fragment>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  h1 {
    font-size: 2rem;
  }
  ul {
    display: flex;
    width: 80%;
    justify-content: space-around;
    align-items: center;
    height: 40%;
    li {
      margin: 0 1rem;
      cursor: pointer;
      font-weight: 400;
      background-position: center;
      background-size: cover;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      &:hover {
        background-image: url("/Images/curl-y.png");
      }
      h3 {
        font-size: 1rem;
      }
    }
  }
  @media only screen and (max-width: 400px) {
    height: 500px;
    ul {
      width: 100%;
      flex-wrap: wrap;
      li {
        height: 20%;
        width: 20%;
      }
    }
  }
`;

export default Shop;
