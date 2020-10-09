import React from "react";
import styled from "styled-components";
import { ImCross } from "react-icons/im";
import { useSelector, useDispatch } from "react-redux";
import { ALERT } from "../actions";
const Alert = () => {
  const { isCarted } = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <React.Fragment>
      <Wrapper style={isCarted ? { display: "flex" } : null}>
        <div className={isCarted ? "box show-box" : "box"}>
          <div>
            <p>something wrong!</p>
            <ImCross
              className="icon"
              onClick={() => dispatch({ type: ALERT })}
            />
          </div>
          <div>
            <h3>This item is already exists</h3>
          </div>
        </div>
      </Wrapper>
    </React.Fragment>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: none;
  background: var(--gray);
  z-index: 9999;
  .box {
    margin: auto;
    width: 300px;
    background: var(--white);
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    border-radius: 5px;
    opacity: 0;
    .icon {
      cursor: pointer;
    }
    p {
      font-size: 1.3rem;
      text-transform: capitalize;
    }
    div {
      display: flex;
      justify-content: space-around;
      align-items: center;
      h3 {
        text-align: center;
        text-transform: capitalize;
        font-weight: lighter;
      }
    }
  }
  .show-box {
    opacity: 1;
  }
`;

export default Alert;
