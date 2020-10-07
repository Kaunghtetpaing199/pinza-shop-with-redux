import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { GoLocation } from "react-icons/go";
import {FaFacebookF} from 'react-icons/fa'
import {AiOutlineInstagram,AiOutlineTwitter} from 'react-icons/ai'
class Footer extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Footer1>
          <ul>
            <li>
              <h3>info@pinza.com | T: 800-PINZA(74692)</h3>
            </li>
            <li>
              <h3>
                Business Bay - Weekdays: 9:00 AM to 1:00 AM | Weekends : 1:00 AM
                closing
              </h3>
            </li>
            <li>
              <h3>
                JVC - Weekdays: 10:30 AM to 1:00 AM | Weekends: 1:00 AM closing
              </h3>
            </li>
            <li>
              <h3>
                Abu Dhabi - weekdays 11:00 AM to 12:00 AM | Weekends 12:00 AM
                Closing
              </h3>
            </li>
            <Link to="/">
              see all locations <GoLocation className="icon" />{" "}
            </Link>
          </ul>
        </Footer1>
        <Footer2>
          <ul>
            <li>
              © 2020- 2021 PINZA. All rights reserved.
            </li>
            <li className='icons'>
             <a href='www.facebook.com'>
                 <FaFacebookF/>
             </a>
             <a href='www.instagram.com'>
                 <AiOutlineInstagram/>
             </a>
             <a href='www.twitter.com'>
                 <AiOutlineTwitter/>
             </a>
            </li>
            <li>
                developed by <Link to='/'>Kaung Htet Paing</Link>
            </li>
          </ul>
        </Footer2>
      </React.Fragment>
    );
  }
}

const Footer1 = styled.footer`
  width: 100%;
  height: 400px;
  background-image: url("/Images/footer-bg.jpg");
  background-position: center;
  background-size: cover;
  ul {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: var(--white);
    li {
      background-color: var(--primary-color);
      height: 10%;
      padding: 0 1rem;
      border-radius: 5px;
      display: flex;
      margin: 0.5rem 0;
      h3 {
        margin: auto;
        font-size: 0.8rem;
      }
    }

    a {
      margin: 1rem 0;
      font-size: 1.5rem;
      .icon {
        color: var(--white);
        font-size: 2rem;
      }
      &:hover {
        color: var(--main-color);
      }
      &:hover .icon {
        color: var(--main-color);
      }
    }
  }
`;
const Footer2 = styled.footer`
    height:100px;
        width:100%;
    ul{
        width:100%;
        height:100%;
    display:flex;
    justify-content:space-around;
    align-items:center;

    @media only screen and (max-width:400px){
        flex-direction:column;
    }
    li{
        font-size:.8rem;
        a{
            color:var(--primary-color);
  font-style: italic;
            
        }
    }
    .icons{
        a{
            border:2px solid var(--black);
            margin:0 5px;
            border-radius:100%;
            padding:.5rem;
            color:var(--black);
            &:hover{
                background:var(--main-color);
                border-color: var(--main-color);
            }
        }
    }
    }
`;
export default Footer;
