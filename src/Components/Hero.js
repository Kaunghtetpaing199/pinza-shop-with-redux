import React, { Component } from "react";
import Nav from "./Nav";
import styled from "styled-components";
import { Link } from "react-router-dom";
class Hero extends Component {
  render() {
    return (
      <React.Fragment>
        <Nav />
        <Section>
          <img src="/Images/curl-banner.png" alt="banner" />
          <div>
            <h3>It's not pizza it's pinza!</h3>
            <Link to="/shop">see more</Link>
          </div>
        </Section>
      </React.Fragment>
    );
  }
}
const Section = styled.section`
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url("/Images/bg2.jpg");
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 700px;
  animation: animate 30s linear infinite;
  position: relative;
  transition: 1s ease-in-out;
  div {
    width: 80%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    text-transform: uppercase;
    h3 {
      font-size: 2.5rem;
      margin: 1rem 0;
      color: var(--white);
    }
    a {
      background: var(--main-color);
      padding: 0.6rem 1rem;
      transition: 0.5s ease-in-out;
      border-radius: 5px;
      &:hover {
        background: var(--primary-color);
      }
    }
  }
  @keyframes animate {
    0% {
      background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
        url("/Images/bg2.jpg");
    }
    20% {
      background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
        url("/Images/bg1.jpg");
    }
    40% {
      background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
        url("/Images/bg3.jpg");
    }
    60% {
      background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
        url("/Images/bg4.jpg");
    }
    80% {
      background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
        url("/Images/bg6.jpg");
    }
    100% {
      background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
        url("/Images/bg6.jpg");
    }
  }
  @media only screen and (max-width: 450px) {
    height: 400px;
    div {
      h3 {
        font-size: 2rem;
      }
    }

    img {
      width: 350px;
      height: 350px;
    }
  }
`;
export default Hero;
