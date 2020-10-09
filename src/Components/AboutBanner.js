import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
class Dough extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Wrapper>
          <img data-aos="fade-right" src="/Images/about-7.png" alt="about" />

          <div data-aos="zoom-in-up">
            <h3>{this.props.title}</h3>
            <p>{this.props.letter}</p>
            {this.props.link ? (
              <Link className="btn btn-primary" to="/shop">
                online order
              </Link>
            ) : null}
          </div>
        </Wrapper>
      </React.Fragment>
    );
  }
}

Dough.defaultProps = {
  title: "Build your own pinza!",
  letter: `Go crazy and build your own Pinza.We won't judge!`,
};

const Wrapper = styled.div`
  background-color: var(--main-color);
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  height: 500px;
  div {
    color: var(--white);
    h3 {
      font-size: 2.5rem;
    }
    p {
      font-size: 1rem;
      margin: 2rem 0;
    }
  }
  @media only screen and (max-width: 400px) {
    img {
      display: none;
    }
    justify-content: center;
  }
`;

export default Dough;
