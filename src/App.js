import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";
import Navigation from "./routes/Navigation";
import MovieDetail from "./routes/MovieDetail";

function App() {
  return <BrowserRouter>
    <Navigation />
    <Route path="/" exact={true} component={Home} />
    <Route path="/about" exact={true} component={About} />
    <Route path="/Home" exact={true} component={Home} />
    <Route path="/moviedetail" exact={true} component={MovieDetail} />
  </BrowserRouter>
}

export default App;