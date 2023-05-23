import React from "react";
import Home from "./Home";
import { Route, Switch } from "react-router";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Service from "./pages/Service";
import ReactChartGraphs from "./ReactChartGraphs";
import Error from "./pages/Error";
import VideoPlay from "./VideoPlay";
import VideoBackground from "./VideoBackground";
import AllPopUpAlert from "./AllPopUpAlert";
import Accordion from "./Component/Accordion";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/contact" component={Contact}></Route>
        <Route path="/service" component={Service}></Route>
        <Route path="/graph" component={ReactChartGraphs}></Route>
        <Route path="/video" component={VideoPlay}></Route>
        <Route path="/videobackground" component={VideoBackground}></Route>
        <Route path="/alert" component={AllPopUpAlert}></Route>
        <Route path="/accordian" component={Accordion}></Route>
        <Route component={Error}></Route>
      </Switch>
    </>
  );
};

export default App;
