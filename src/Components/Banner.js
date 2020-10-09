import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
class Banner extends Component {
  render() {
    return (
      <React.Fragment>
        <Wrapper>
          <div data-aos="fade-right">
            <h3>concept</h3>
            <h1>So, What is PINZA?</h1>
            <p>
              Not a pizza, not a flatbread, PINZA is in a class all of its own.
              Pinza is the modern foodie’s answer to a wholesome – and
              ridiculously delicious – hand-kneaded crust.
            </p>
            <p>
              Nourishing, wholesome and completely irresistible, Pinza is on a
              mission to introduce our uniquely healthful menu to Dubai’s
              community of thinkers, do-ers and lovers of life.
            </p>

            <Link to="/">
              <img src="/Images/arrow-right-l.svg" alt="arrow" />
              <span> see more</span>
            </Link>
          </div>
          <img data-aos="fade-up" src="/Images/pinza-1.png" alt="banner" />
        </Wrapper>
      </React.Fragment>
    );
  }
}

const Wrapper = styled.div`
  height: 600px;
  background: var(--primary-color);
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--white);
  div {
    width: 40%;
    height: 50%;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    padding: 2rem;
    h1 {
      font-size: 3rem;
      margin: 1rem 0;
    }
    p {
      margin: 0.5rem 0;
    }
    a {
      transition: 0.5s ease-in-out;
      display: flex;
      justify-content: center;
      flex-direction: column;
      img {
        transition: 0.5s ease-in-out;
        transform: translateY(1.3rem);
        width: 110px;
        height: 70px;
        display: inline-block;
      }
      &:hover {
        color: var(--main-color);
      }
      &:hover img {
        transform: translateY(1.3rem) translateX(1rem);
      }
    }
  }
  @media only screen and (max-width: 450px) {
    div {
      width: 100%;
    }
    img {
      display: none;
    }
  }
`;
export default Banner;
