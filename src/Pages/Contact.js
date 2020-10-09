import React from "react";
import styled from "styled-components";
const Contact = () => {
  return (
    <React.Fragment>
      <Wrapper>
        <img src="/Images/about-7.png" alt="about" data-aos="fade-right" />
        <div className="contact">
          <h3>Contact us</h3>
          <form>
            <input
              placeholder="First Name"
              type="text"
              data-aos="fade-left"
              data-aos-delay="100"
            />
            <input
              placeholder="Last Name"
              type="text"
              data-aos="fade-left"
              data-aos-delay="200"
            />
            <input
              placeholder="Email"
              type="email"
              data-aos="fade-left"
              data-aos-delay="300"
            />
            <input
              placeholder="Contact"
              type="text"
              data-aos="fade-left"
              data-aos-delay="400"
            />
            <input
              placeholder="Area of interest"
              type="text"
              data-aos="fade-left"
              data-aos-delay="500"
            />
            <textarea
              placeholder="Massage"
              data-aos="fade-left"
              data-aos-delay="600"
            />
          </form>
          <div>
            <button type="submit" data-aos="zoom-in-up" data-aos-delay="650">
              SUBMIT NOW
            </button>
          </div>
        </div>
      </Wrapper>
    </React.Fragment>
  );
};

const Wrapper = styled.div`
  background: var(--main-color);
  width: 100%;
  height: 600px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  img {
    width: 40%;
    height: 80%;
  }
  .contact {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 40%;
    height: 60%;

    h3 {
      font-size: 1.5rem;
    }

    form {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      height: 100%;
      input,
      textarea {
        border: none;
        width: 100%;
        margin: 0.5rem 0;
        padding: 10px;
        border-radius: 5px;

        &:focus::placeholder {
          color: transparent;
        }
      }
    }
    div {
      button {
        border: none;
        cursor: pointer;
        padding: 0.8rem 1.5rem;
        border-radius: 5px;
        transition: 0.5s ease-in-out;
        font-weight: 700;
        &:hover {
          color: var(--main-color);
          background: var(--white);
        }
      }
    }
  }

  @media only screen and (max-width: 400px) {
    height: 900px;
    padding: 1rem 0;
    flex-direction: column;
    img {
      width: 80%;
      height: 80%;
    }
    .contact {
      width: 80%;
    }
  }
`;

export default Contact;
