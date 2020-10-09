import React, { Component } from "react";
import styled from "styled-components";
class Loading extends Component {
  render() {
    return (
      <React.Fragment>
        <Wrapper>
          <img src="/Images/loading.gif" alt="loading" />
        </Wrapper>
      </React.Fragment>
    );
  }
}

const Wrapper = styled.div`
  width: 100%;
  height: 600px;
  display: flex;
  img {
    margin: auto;
  }
`;

export default Loading;
