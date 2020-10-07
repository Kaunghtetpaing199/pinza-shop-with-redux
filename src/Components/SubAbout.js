import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

class SubAbout extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Wrapper>
          <h3 data-aos="fade-right">
            It's all about <br />
            the dough
          </h3>
          <div className="wrap" data-aos="fade-left">
            <div data-aos="zoom-in" data-aos-delay="500">
              <h3>We always believe fresh is best</h3>
            </div>
          </div>
        </Wrapper>
      </React.Fragment>
    );
  }
}

const Wrapper = styled.div`
  height: 500px;
  display: flex;
  padding: 2rem;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h3 {
    font-size: 2rem;
  }
  .wrap {
    background-image: url("/Images/about-2.png");
    background-positon: center;
    background-size: cover;
    width: 50%;
    height: 100%;
    color: var(--white);
    display: flex;
    justify-content: flex-end;
    align-items: center;
    div {
      background-image: url("/Images/curl-b.png");
      background-positon: center;
      background-size: cover;
      width: 30%;
      height: 35%;
      display: flex;
      text-align: center;
    }
    h3 {
      margin: auto;
      font-size: 1rem;
    }
  }

  @media only screen and (max-width: 800px) {
    .wrap {
      width: 90%;
    }
  }
  @media only screen and (max-width: 400px) {
    .wrap {
      width: 80%;
      height: 50%;
      div {
        h3 {
          font-size: 0.5rem;
        }
      }
    }
  }
`;

export default SubAbout;
