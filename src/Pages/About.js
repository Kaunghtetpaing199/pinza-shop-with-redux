import React from "react";
import styled from "styled-components";
const About = () => {
  return (
    <React.Fragment>
      <Wrapper1>
        <div data-aos="fade-right">
          <h3>Concept</h3>
          <h1>So, What is PINZA?</h1>
          <p>
            Not a pizza, not a flatbread, PINZA is in a class all of its own.
            Pinza is the modern foodie’s answer to a wholesome – and
            ridiculously delicious – hand-kneaded crust.
          </p>
          <p>
            Nourishing, wholesome and completely irresistible, Pinza is on a
            mission to introduce our uniquely healthful menu to Dubai’s
            community of thinkers, do-ers and lovers of life.
          </p>
        </div>
        <img data-aos="fade-left" src="/Images/about-img.jpg" alt="about" />
      </Wrapper1>
      <Wrapper1 style={{ background: "var(--main-color)" }}>
        <img data-aos="fade-right" src="/Images/about-7.png" alt="about" />
        <div data-aos="fade-left">
          <h3>About Pinza!</h3>
          <h1>Our Story</h1>
          <p>
            December in 2015 as a DXB home-grown concept, we spent countless
            hours kneading, baking, and taste testing flour blends in Rome
            before landing on our signature 30 hour-fermented base. We scour
            Italy for the best cured meats such as our bresaola and beef
            pepperoni, our Italian tomatoes, and all of our cheeses. Our
            vegetables are sourced locally when possible, ensuring that we
            select only the freshest GMO-free veggies and herbs for our
            toppings. Now you can join us for a Pinza, cooked to order in our
            lively Business Bay kitchen and delivered straight to your doorstep.
          </p>
        </div>
      </Wrapper1>

      <Wrapper1>
        <div data-aos="fade-right">
          <h3>Dough</h3>
          <h1>Less Calories for Your Dough</h1>
          <p>
            Simply put, Pinza’s dough is lighter, crispier, tastier and better
            for you. How? We use an 80% water per kilo ratio, compared to the
            standard 30-60%, then ferment our dough for a full 24-30 hours
            before baking. This results in a base that is lower in calories,
            with just the right amount of crunch in the crust, and a light and
            fluffy center. We use only a small amount of yeast and minimal
            gluten in our special dough recipe, so you can wave goodbye to
            feeling bloated.
          </p>
        </div>
        <img data-aos="fade-left" src="/Images/about-1.png" alt="about" />
      </Wrapper1>
      <Wrapper1 style={{ background: "var(--primary-color)" }}>
        <img data-aos="fade-right" src="/Images/about-2.png" alt="about" />
        <div data-aos="fade-left">
          <h3>Base</h3>
          <h1>Powered by Flour</h1>
          <p>
            We use a unique blend of four different types of GMO Free and no
            chemical additives flours to make sure your Pinza is perfectly
            balanced for maximum enjoyment.
          </p>
        </div>
      </Wrapper1>
      <Wrapper1>
        <div data-aos="fade-right">
          <h3>Thickness</h3>
          <h1>Our unique base</h1>
          <p>
            Crisp and crunchy around the edges, light and bubbly in the middle,
            Pinza’s bases are the perfect thickness. And if you’re sharing your
            Pinza with mates, our signature hand-tossed oval shape is designed
            to be enjoyed between friends.
          </p>
        </div>
        <img data-aos="fade-left" src="/Images/about-4.png" alt="about" />
      </Wrapper1>
      <Wrapper1>
        <img data-aos="fade-right" src="/Images/about-6.png" alt="about" />
        <div data-aos="fade-left">
          <h3>Design</h3>
          <h1>Dine With Us Or We'll Deliver To You!</h1>
          <p>
            Light, bright and full of good vibes, Pinza’s Business Bay location
            houses the central kitchen for our speedy deliveries, ensuring your
            Pinza is piping hot when it arrives at your door. Inside, we offer a
            cozy and chilled space where you can enjoy your lunch break or pose
            for happy snaps in front of our custom-painted brick wall – don’t
            forget to tag us. Our intimate dining area is designed to reflect
            Pinza’s globalized roots, with sunshine yellow and Italian turquoise
            detailing.
          </p>
        </div>
      </Wrapper1>
    </React.Fragment>
  );
};

const Wrapper1 = styled.div`
  width: 100%;
  height: 600px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  img {
    width: 50%;
    height: 90%;
  }
  div * {
    font-family: "Roboto" !important;
  }
  div {
    width: 30%;
    h3 {
      font-weight: 400;
      margin-bottom: 0.5rem;
    }
    h1 {
      font-size: 2rem;
    }
    p {
      font-size: 1rem;
      margin: 1rem 0;
      line-height: 25px;
    }
  }

  @media only screen and (max-width: 800px) {
    height: 800px;
    img {
      width: 40%;
      height: 50%;
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
      width: 70%;
      height: 70%;
    }
  }
`;
export default About;
