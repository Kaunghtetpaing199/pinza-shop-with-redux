import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { DELETE } from "../actions";
import { connect } from "react-redux";
class Nav extends Component {
  state = {
    isScrolled: false,
    isOpend: false,
  };

  scrolling = () =>
    window.scrollY > 200
      ? this.setState({ isScrolled: true })
      : this.setState({ isScrolled: false });

  componentDidMount() {
    window.addEventListener("scroll", this.scrolling);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrolling);
  }
  handleClick = () => {
    console.log(this.state.isOpend);
    this.setState({ isOpend: !this.state.isOpend });
  };
  render() {
    const toggle = this.props.toggle;
    return (
      <React.Fragment>
        <Navbar>
          <div
            className={
              this.state.isScrolled ? "nav-list scroll-list" : "nav-list"
            }
          >
            <div className="nav ">
              <div>
                <span className="open">OPEN</span>
                <div onClick={this.handleClick} className="nav-icon">
                  <span className={this.state.isOpend ? "cross" : null}></span>
                </div>

                <span className="time">UNTIL 12:00 pm</span>
              </div>
            </div>
            <ul className={this.state.isOpend ? "nav opening" : "nav"}>
              <li>
                <Link to="/">home</Link>
              </li>
              <li>
                <h3 onClick={toggle}>order online</h3>
              </li>
              <li>
                <Link to="/">
                  <img src="/Images/logo.svg" alt="logo" className="logo" />
                </Link>
              </li>
              <li>
                <Link to="/about">about</Link>
              </li>
              <li>
                <Link to="/shop">menu</Link>
              </li>
            </ul>
            <div className="nav nav-list3">
              <Link to="/contact">franchising</Link>
            </div>
          </div>
        </Navbar>
      </React.Fragment>
    );
  }
}
const Navbar = styled.nav`
  width: 100%;
  height: 100px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;

  .nav-list {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    transition: 0.3s ease-in-out;
    .nav-icon {
      display: none;
    }
    div {
      width: 30%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      &:nth-child(1) {
        div {
          width: 100%;
          color: var(--white);
          .open {
            background: var(--primary-color);
            margin: 0 0.5rem;
            padding: 0.2rem 0.5rem;
            border-radius: 5px;
          }
        }
      }
      &:nth-child(3) {
        a {
          background: var(--main-color);
          color: var(--black);
          padding: 0.5rem;
          border-radius: 5px;
          transition: 0.3s linear;
          &:hover {
            color: var(--white);
          }
        }
      }
    }
    ul {
      display: flex;
      justify-content: space-around;
      align-items: center;
      transform: translateY(10rem);
      transition: 0.3s linear;
      width: 100%;

      li {
        padding: 0.5rem;
        border-radius: 5px;
        color: var(--black);
        a,
        h3 {
          color: var(--white);
          cursor: pointer;
          transition: 0.3s linear;
        }
        &:nth-child(3):hover {
          background: transparent;
        }
        &:hover {
          background: var(--primary-color);
          a,
          h3 {
            color: var(--white);
          }
        }
      }
    }
  }

  .scroll-list {
    background: var(--gray);
    ul {
      height: 100%;
      transform: scale(0.9);
      width: 100%;
      li {
        &:hover {
          background: transparent;
        }
        a,
        h3 {
          color: var(--white);
          &:hover {
            color: var(--main-color);
          }
        }
        .logo {
          width: 100px;
          height: 100px;
        }
      }
    }
  }

  @media only screen and (max-width: 800px) {
    .nav-list {
      div {
        width: 50%;
      }

      .time {
        display: none;
      }
      ul {
        width: 100%;
      }
      .nav-list3 {
        justify-content: flex-start;
        width: 100%;
      }
    }
  }

  @media screen and (max-width: 420px) {
    background: var(--gray);
    ul {
      flex-direction: column;
      justify-content: center !important;
      background: var(--black);
      height: 100vh;
      min-height: 100vh;
      width: 100vw;
      position: fixed;
      top: 0;
      transform: translateY(0rem) scale(0) !important;
      transform-origin: bottom center;
      li {
        transform: translateX(-2rem);
        &:hover {
          background: transparent;
        }
        a,
        h3 {
          color: var(--white) !important;
          font-size: 1.2rem;
          &:hover {
            color: var(--main-color);
          }
        }
        .logo {
          width: 100px;
          height: 100px;
        }
      }
    }
    .nav-list3 {
      justify-content: center !important;
      width: 100%;
    }

    .nav-icon {
      width: 30px !important;
      height: 50px !important;
      display: flex !important;
      cursor: pointer;
      z-index: 999;
      position: fixed;
      span {
        background: var(--main-color);
        width: 100%;
        height: 4px;
        margin: auto;
        position: relative;
        transition: 0.5s ease-in-out;
        &:before,
        &:after {
          content: "";
          background: var(--main-color);
          width: 100%;
          height: 4px;
          position: absolute;
          top: 8px;
          transition: 0.5s ease-in-out;
        }
        &:after {
          top: -8px;
        }
      }
      .cross {
        background: transparent;
        &:before,
        &:after {
          top: 0;
        }
        &:after {
          transform: rotate(45deg);
        }
        &:before {
          transform: rotate(-45deg);
        }
      }
    }
    .open {
      display: none;
    }
    .scroll-list {
      ul {
        transform: scale(0) !important;
        height: 100vh;
        min-height: 100vh;
      }
    }
  }
  .opening {
    transform: translateY(0rem) scale(1) !important;
  }
`;

const mapDispatchToProps = (dispatch) => {
  return {
    toggle: () => dispatch({ type: DELETE }),
  };
};

export default connect(null, mapDispatchToProps)(Nav);
