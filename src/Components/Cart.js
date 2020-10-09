import React, { useEffect } from "react";
import styled from "styled-components";
import { BsFillCaretUpFill } from "react-icons/bs";
import { BsFillCaretDownFill } from "react-icons/bs";
import { ImCross } from "react-icons/im";
import { useSelector, useDispatch } from "react-redux";
import { DELETE, GET_TOTALS, CLEAR_CART, getType } from "../actions";
const Cart = () => {
  const { isClosed, addToCard, total } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: GET_TOTALS });
  }, [addToCard, dispatch]);
  return (
    <React.Fragment>
      <Wrapper className={isClosed ? "transparentBcg" : null}>
        <div className={isClosed ? "cart showCart" : "cart"}>
          <span
            className="close-cart"
            onClick={() => dispatch({ type: DELETE })}
          >
            <ImCross />
          </span>
          <h2>your cart</h2>
          <div className="cart-content">
            {addToCard.map((item, index) => (
              <div
                className="cart-item"
                key={index}
                data-aos="fade-left"
                data-aos-delay="400"
              >
                <img src={item.featuredImg} alt="" />
                <div className="cart-child2">
                  <div className="cart-item1">
                    <h4>{item.name}</h4>
                    <h5>${item.pirce * item.amount}</h5>
                    <span
                      className="remove-item"
                      onClick={() => dispatch(getType("remove", item.id))}
                    >
                      remove
                    </span>
                  </div>
                  <div className="cart-item2">
                    <BsFillCaretUpFill
                      className="fas fa-chevron-up"
                      onClick={() => dispatch(getType("inc", item.id))}
                    />
                    <p className="item-amount">{item.amount}</p>
                    <BsFillCaretDownFill
                      className="fas fa-chevron-down"
                      onClick={() => {
                        if (item.amount === 1) {
                          return dispatch(getType("remove", item.id));
                        } else {
                          return dispatch(getType("dec", item.id));
                        }
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-footer">
            <h3>
              your total : $ <span className="cart-total">{total}</span>
            </h3>
            <button
              onClick={() => dispatch({ type: CLEAR_CART })}
              className="clear-cart banner-btn"
            >
              clear cart
            </button>
          </div>
        </div>
      </Wrapper>
    </React.Fragment>
  );
};

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  transition: 0.4s linear;
  background: var(--gray);
  z-index: 9999;
  visibility: hidden;
  .cart {
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    overflow: scroll;
    z-index: 3;
    background: rgb(231, 226, 221);
    transition: 0.4s linear;
    transform: translateX(100%);
  }

  @media screen and (min-width: 768px) {
    .cart {
      width: 30vw;
      min-width: 450px;
      padding: 1.2rem;
    }
  }

  .close-cart {
    font-size: 1.7rem;
    cursor: pointer;
    margin: 1rem;
  }
  .cart h2 {
    text-transform: capitalize;
    text-align: center;
    letter-spacing: 0.2rem;
    margin-bottom: 2rem;
  }
  .cart-content {
    width: 100%;
  }
  .cart-item {
    width: 100%;
    display: grid;
    justify-content: space-around;
    align-items: center;
    grid-template-columns: auto 1fr auto;
    grid-column-gap: 1.5rem;
    margin: 1.5rem 0;
    .cart-child2 {
      display: flex;
      align-items: center;
      .cart-item2 {
        margin-left: auto;
      }
    }
  }
  .cart-item img {
    width: 75px;
    height: 75px;
  }
  .cart-item h4 {
    font-size: 0.85rem;
    text-transform: capitalize;
    letter-spacing: 0.2rem;
  }
  .cart-item h5 {
    margin: 0.5rem 0;
    letter-spacing: 0.2rem;
  }
  .item-amount {
    text-align: center;
  }
  .remove-item {
    color: grey;
    cursor: pointer;
  }
  .fa-chevron-up,
  .fa-chevron-down {
    color: var(--cart-color);
    cursor: pointer;
  }

  .cart-footer {
    margin-top: 2rem;
    letter-spacing: 0.2rem;
    text-align: center;
  }
  .cart-footer h3 {
    text-transform: capitalize;
    margin-bottom: 1rem;
  }
  @media screen and (max-width: 800px) {
    .cart-item2 {
      margin: auto;
    }
  }
`;
export default Cart;
