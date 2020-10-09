import React, { useState, useEffect } from "react";
import Loading from "../Components/Loading";
import { useSelector, useDispatch } from "react-redux";
import { FindItem, GetItems } from "../actions";
import styled from "styled-components";

const Pinza = ({ match }) => {
  const [slug] = useState(match.params.slug);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(FindItem(slug));
  }, [dispatch, slug]);
  const { cartItem: item } = useSelector((state) => state);

  if (item.length === 0) {
    return <Loading />;
  }

  return (
    <React.Fragment>
      {item.map((item, index) => (
        <Wrapper key={index}>
          <img
            data-aos="fade-right"
            src={item.fields.featuredImg}
            alt={item.fields.name}
          />
          <div data-aos="fade-left">
            <h3>{item.fields.name}</h3>
            <h1>Dine With Us Or We'll Deliver To You!</h1>
            {item.fields.ingredients ? (
              <p>
                <span>Ingredients : </span>
                <span>{item.fields.ingredients}</span>
              </p>
            ) : null}
            <button
              onClick={() => dispatch(GetItems(item.fields.id))}
              className="btn btn-main"
            >
              order
            </button>
          </div>
        </Wrapper>
      ))}
    </React.Fragment>
  );
};

export default Pinza;

const Wrapper = styled.div`
  width: 100%;
  height: 600px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  img {
    width: 30%;
    height: 50%;
  }
  div * {
    font-family: "Roboto" !important;
  }
  div {
    width: 30%;
    h3 {
      font-weight: 400;
      margin: 0.8rem 0;
    }
    h1 {
      font-size: 2rem;
    }
    p {
      font-size: 1rem;
      margin: 1rem 0;
      line-height: 25px;
    }
    button {
      margin: 1rem 0;
    }
  }

  @media only screen and (max-width: 800px) {
    height: 800px;
    img {
      width: 40%;
      height: 30%;
    }
    div {
      width: 50%;
    }
  }

  @media only screen and (max-width: 400px) {
    flex-direction: column;
    height: 1000px;
    justify-content: center;
    div {
      width: 80%;
      height: 50%;
      padding: 1rem;
    }
    img {
      width: 50%;
      height: 20%;
    }
  }
`;
