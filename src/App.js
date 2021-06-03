import React from "react";
import GlobalStyle from "./components/GlobalStyle";
import AboutMe from "./pages/AboutMe";
import ContactUs from "./pages/ContactUs";
import MyWork from "./pages/MyWork";
import Nav from "./components/Nav";

//router dom
import { Route, Switch, useLocation } from "react-router-dom";
import MovieDetail from "./pages/MovieDetail";
//animation
import { AnimatePresence } from "framer-motion";
import ScrollTop from "./components/ScrollTop";

function App() {
  const location = useLocation();
  console.log(location);
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact component={AboutMe} />
          <Route path="/home" exact component={AboutMe} />
          <Route path="/work" exact component={MyWork} />
          <Route path="/work/:id" exact component={MovieDetail} />
          <Route path="/contact" exact component={ContactUs} />
        </Switch>
      </AnimatePresence>
      <ScrollTop />
    </div>
  );
}

export default App;
