import React, { Component } from 'react';

import {Link,Route,BrowserRouter,Switch} from "react-router-dom"
import Home from "./component/home"
import Shopbar from "./component/shopbar"
import './App.css';
import Footer from "./component/footer";
import Header from "./component/header";



class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <BrowserRouter>
<Switch>

         <Route path="/shopbar" component={Shopbar}/>
        <Route path="/" component={Home}/>
</Switch>
        </BrowserRouter>
        <Footer/>
      </div>
    );
  }
}

export default App;
