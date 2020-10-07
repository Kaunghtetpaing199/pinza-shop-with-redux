import React, { useEffect } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import { Link, animateScroll as scroll } from "react-scroll";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Shop from "./Pages/Shop";
import Error from "./Pages/Error";

const store = createStore(reducer);

function App() {
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
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/shop" component={Shop} />
          <Route path="*" component={Error} />
        </Switch>
      </Provider>
    </React.Fragment>
  );
}
export default App;
