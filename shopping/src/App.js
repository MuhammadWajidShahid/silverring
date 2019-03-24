import React, { Component } from 'react';

import { Link, Route, BrowserRouter, Switch } from "react-router-dom"
import './App.css';
import Main from "./component/main";
import Addproduct from './component/addproduct';
import Admin from './component/admin';
import {connect} from "react-redux";
import { orange } from "@material-ui/core/colors";
import { createMuiTheme, MuiThemeProvider} from "@material-ui/core"



class App extends Component {
  componentWillMount(){
    fetch("/getproducts")
    .then(data=>data.json())
      .then(dat=>{
        if(dat.success){
          this.props.dispatch({type:"SET_PRODUCTS",payload:dat.products});
        }
      })
      .catch(err=>console.log(err))
    }
    render() {
      const ntheme = createMuiTheme(
        {
            palette: {
                primary: orange,
                secondary: {
                    light: "#625f5f",
                    main: "#3B3838",
                    dark: "#292727"
                },
                error: {
                    main: "#ffffff",
                }
            },
            typography: {
                h6: {
                    color: "#ffffff"
                }
            }
        })
    return (
      <div>
            <MuiThemeProvider theme={ntheme}>
        <BrowserRouter>
          <Switch>
            <Route path="/admin" component={Admin}/>
            <Route path="/" component={Main} />
          </Switch>
        </BrowserRouter>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default connect()(App);
