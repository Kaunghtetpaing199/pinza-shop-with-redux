import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { DELETE } from "../actions";
import { connect } from "react-redux";
class Navbar extends Component {
  state = {
    isScrolled: false,
    isClicked: false,
  };
  scrolling = () => {
    if (window.innerWidth > 600) {
      window.scrollY > 200
        ? this.setState({ isScrolled: true })
        : this.setState({ isScrolled: false });
    }
  };
  componentDidMount() {
    window.addEventListener("scroll", this.scrolling);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrolling);
  }
  handleClick = () => this.setState({ isClicked: !this.state.isClicked });
  render() {
    const toggle = this.props.toggle;
    return (
      <React.Fragment>
        <Wrapper>
          <ul
            className={
              this.state.isScrolled ? "navbar scrool-navbar" : "navbar"
            }
          >
            <li className="nav-link1">
              <h3>
                <span>OPEN</span>{" "}
                {this.state.isScrolled ? null : "UNTIL 01:00 am |"} Call
                800-PINZA(74692)
              </h3>
            </li>
            <div onClick={this.handleClick}>
              <span className={this.state.isClicked ? "cross" : null}></span>
            </div>
            <Link to="/" className="phone-logo">
              <img src="/Images/logo.svg" alt="logo" />
            </Link>
            <li
              className={
                this.state.isScrolled
                  ? "nav-link2 scroll"
                  : this.state.isClicked
                  ? "click nav-link2"
                  : "nav-link2"
              }
            >
              <ul>
                <li>
                  <Link to="/">menu</Link>
                </li>
                <li>
                  <h3 onClick={toggle} to="/">
                    order online
                  </h3>
                </li>
                <li>
                  <Link to="/" className="logo-link">
                    <img src="/Images/logo.svg" alt="logo" className="logo" />
                  </Link>
                </li>
                <li>
                  <Link to="/about">about</Link>
                </li>
                <li>
                  <Link to="/shop">popular pinza</Link>
                </li>
              </ul>
            </li>
            <li className="nav-link3">
              <Link to="/contact">franchising</Link>
            </li>
          </ul>
        </Wrapper>
      </React.Fragment>
    );
  }
}

const Wrapper = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  height: 150px;
  transition: 0.5s ease;
  z-index: 9999;
  .phone-logo{
    display:none;
  }
  .navbar {
    width: 100%;
    height: 100%;
    display: flex;
    transition: 0.5s ease-in-out;
  }
  .navbar.scrool-navbar {
    height: 80px;
    background: var(--gray);
  }
  .nav-link1 {
    width: 15%;
    height: 100%;
    position: relative;
    h3 {
      transition: 0.5s ease;
      position: absolute;
      top: 50%;
      left: 50%;
      width: 500px;
      color: var(--white);
      font-size: 1rem;
      span {
        background: var(--primary-color);
        padding: 5px;
        margin: 0 5px;
        border-radius: 5px;
      }
    }
    @media only screen and (max-width: 850px) {
      h3 {
        left: 10%;
        font-size: 0.7rem !important;
        span {
          display: none;
        }
      }
      .nav-link1{
        h3{
          span{
            display:none;
          }
        }
      }
    }
  }
  .navbar.scrool-navbar .nav-link1 {
    h3 {
      font-size: 0.8rem;
    }
  }
  .navbar.scrool-navbar .nav-link3 {
    align-items: center;
  }
  .nav-link3 {
    transition: 0.5s ease-out;
    height: 100px;
    width: 15%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    a {
      background: var(--main-color);
      padding: 0.5rem 1rem;
      border-radius: 5px;
      color: var(--black);
      transition: 0.5s ease-out;
      &:hover {
        color: var(--white);
      }
    }
  }
  .nav-link2 {
    height: 100px;
    width: 70%;
    transform: translateY(8rem);
    transition: 0.5s ease;
  }
  .nav-link2.scroll {
    height: 100%;
    transform: translateY(10px);
  }
  .nav-link2.scroll ul {
    transition: 0.5s ease-in-out;
    justify-content: center;
    transform: scale(0.8);
    & *:hover {
      background: transparent;
      color: var(--main-color);
    }
  }
  .nav-link2.scroll img {
    width: 80px;
    height: 80px;
    transition: 0.5s ease-in-out;
  }
  .nav-link2 ul {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .nav-link2 ul li {
    display: flex;
    align-items: center;
    &:nth-child(3) a:hover {
      background: transparent !important;
    }
    
  }
  .nav-link2 ul li a,.nav-link2 h3{
    font-size: 1.2rem;
    letter-spacing: 1px;
    transition: 0.5s ease-in-out;
    padding: 0.3rem 0.8rem;
    border-radius: 5px;
    cursor:pointer;
    color:var(--white);
    &:hover {
      background: var(--primary-color);
    }
  }
  @media only screen and (max-width: 810px) {
    .nav-link2.scroll ul {
      transform: scale(0.7) !important;
    }
    .nav-link3 {
      width: 5%;

      a{
      position:fixed;
      right:5%;
      transform:scale(.7);
      }
    }
  }

  @media only screen and (max-width: 700px) {
    width: 100vw;
    height: 70px;
    div{
      width:30px;
      height:50px;
      display:flex;
      position:fixed;
      top:2%;
      left:5%;
      cursor:pointer;
      z-index:999;
      margin:auto;
      span{
          background:var(--main-color);
        width:100%;
        height:4px;
        margin:auto;
        position:relative;
        transition:.5s ease-in-out;
        &:before,
        &:after{
          content:'';
          background:var(--main-color);
          width:100%;
          height:4px;
          position:absolute;
          top:8px;
        transition:.5s ease-in-out;
        }
        &:after{
          top:-8px;
        }
      }
      .cross{
        background:transparent;
        &:before,
        &:after{
          top:0;
        }
        &:after{
          transform: rotate(45deg);
        }
        &:before{
          transform:rotate(-45deg);
        }
      }
    }
    .phone-logo{
      display:block;
      position:fixed;
      top:2%;
      left:40%;
      transform:translateX(-50%);
      z-index:999;
      img{
      width:50px;
      height:50px;
      }
    }
    .navbar {
      background: var(--gray);
      flex-direction:space-around;
    .nav-link1 {
      display: none;
    }
    .nav-link3{
      a{
      right:10%;
      top:2.5%;
      }
    }
    }
    .nav-link2.click{
      transform: translateY(0rem) scale(1);
    }
    .nav-link2 {
      background: var(--black);
      height: 100vh;
      width: 100%;
      transform: translateY(0rem) scale(0);
      transform-origin:bottom center;
      transition: 0.4s ease-in-out;
      display: flex;
      align-items:center;
      ul {
        width: 100vw;
        height: 50%;
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        align-items: center;
        li:nth-child(3) {
          display:none;
          }
        }
      }
    }
  }
`;

const mapDispatchToProps = (dispatch) => {
  return {
    toggle: () => dispatch({ type: DELETE }),
  };
};

export default connect(null, mapDispatchToProps)(Navbar);
