import React from "react";
import styled from "styled-components";
const Error = () => {
  return (
    <React.Fragment>
      <Wrapper>
        <img src="/Images/error.svg" alt="error" />
        <h3>Page not found</h3>
      </Wrapper>
    </React.Fragment>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h3 {
    font-size: 2rem;
    color: var(--gray);
  }
  @media only screen and (max-width: 400px) {
    height: 400px;
  }
`;

export default Error;
