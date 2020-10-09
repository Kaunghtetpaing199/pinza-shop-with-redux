import styled from "styled-components";

const Container = styled.div`
  display: grid;
  width: 90%;
  grid-template-columns: repeat(2, minmax(350px, 1fr));
  grid-auto-rows: 180px;
  padding: 2rem 0;
  .item {
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover div {
      background-image: url("/Images/curl-y-3.png");
    }
    &:hover .arrow {
      visibility: hidden;
    }
    div {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      width: 50%;
      background-position: center;
      background-size: cover;
      height: 100%;
      text-align: center;
      p {
        margin: 0.7rem;
        width: 70%;
        font-size: 0.7rem;
      }
      a {
        margin: 10px 0;
      }
      h3 {
        font-size: 0.9rem;
      }
      h4 {
        font-size: 0.8rem;
      }
    }
    .arrow {
      width: 10%;
      height: 30px;
    }
    .pinza-link {
      width: 40%;
      height: 100%;
    }
    .pinza-img {
      width: 100%;
      height: 100%;
      cursor: pointer;
    }
  }
  .reverse {
    flex-direction: row-reverse;
  }

  @media only screen and (max-width: 800px) {
    grid-row-gap: 2rem;
  }

  @media only screen and (max-width: 400px) {
    width: 100%;
    grid-template-columns: 1fr;
    .item {
      div {
        width: 100%;
      }
      .arrow {
        display: none;
      }
      .pinza-img {
        display: none;
      }
    }
  }
`;
export default Container;
