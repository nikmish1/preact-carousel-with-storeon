import { h, Component } from "preact";
import { Router } from "preact-router";

import Header from "./header";

// Code-splitting is automated for routes
import Home from "../routes/home";
import Profile from "../routes/profile";
import Slider from "../routes/slider/slider";
import { StoreContext } from "storeon/preact";
import { store } from "../store/store";
import { Counter } from "./counter/counter";

export default class App extends Component {
  /** Gets fired when the route changes.
   *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
   *	@param {string} event.url	The newly routed URL
   */
  handleRoute = (e) => {
    this.currentUrl = e.url;
  };

  crousalWideProperties = {
    images: [
      "https://i.imgur.com/xcSsbVn.jpg",
      "https://i.imgur.com/xcSsbVn.jpg",
      "https://i.imgur.com/xcSsbVn.jpg",
      "https://i.imgur.com/xcSsbVn.jpg",
    ],
    height: 170,
    width: 289,
  };

  crousalSquareProperties = {
    images: [
      "https://i.imgur.com/xcSsbVn.jpg",
      "https://i.imgur.com/xcSsbVn.jpg",
      "https://i.imgur.com/xcSsbVn.jpg",
      "https://i.imgur.com/xcSsbVn.jpg",
    ],
    height: 87,
    width: 98,
  };

  render() {
    return (
      <StoreContext.Provider value={store}>
        <div id="app">
          {/* <Header /> */}
          <Router onChange={this.handleRoute}>
            <Home path="/" />
            <Profile path="/profile/" user="me" />
            <Profile path="/profile/:user" />
            <Slider path="slider" properties={this.crousalWideProperties} />
            <Slider path="slider" properties={this.crousalSquareProperties} />
            {/* <Counter path="/counter" /> */}
          </Router>
        </div>
      </StoreContext.Provider>
    );
  }
}
