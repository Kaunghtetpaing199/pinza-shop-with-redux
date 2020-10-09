import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
// import { Link, animateScroll as scroll } from "react-scroll";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Shop from "./Pages/Shop";
import Pinza from "./Pages/Pinza";
import Error from "./Pages/Error";
import Contact from "./Pages/Contact";
import AOS from "aos";
import "aos/dist/aos.css";
import Hero from "./Components/Hero";
import Footer from "./Components/Footer";
import Cart from "./Components/Cart";
import Alert from "./Components/Alert";

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function App() {
  AOS.init({ duration: 800 });
  return (
    <React.Fragment>
      {/* <Link
        activeClass="active"
        spy={true}
        to="bottom"
        smooth={true}
        duration={5000}
      >
        To bottom
      </Link> */}
      <Provider store={store}>
        <Hero />
        <Cart />
        <Alert />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/shop/:slug" component={Pinza} />
          <Route exact path="/contact" component={Contact} />
          <Route path="*" component={Error} />
        </Switch>
        <Footer />
      </Provider>
    </React.Fragment>
  );
}
export default App;
