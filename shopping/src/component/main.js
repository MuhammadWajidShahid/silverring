import React,{Component} from "react"
import {Route,Switch} from "react-router-dom"
import Header from "./header";
import Footer from "./footer";
import Productdetail from "./productdetail";
import Cart from "./cart";
import Wishlist from "./wishlist";
import Home from "./home";
import Shopbar from "./shopbar";
import Login from "./login";
import Signup from "./signup";
import Checkout from "./checkout"

class Main extends Component{
    render()
    {
        return(
            <div>
                <Header/>
                <Switch>
                <Route path="/checkout" component={Checkout}/>
                <Route path="/signup" component={Signup}/>
                <Route path="/login" component={Login}/>
                <Route path="/productdetail/:id" component={Productdetail}/>
                <Route path="/shop/:categorey" component={Shopbar}/>
                <Route path="/cart" component={Cart}/>
                <Route path="/wishlist" component={Wishlist}/>
                <Route path="/" component={Home}/>
                </Switch>
                <Footer/>
            </div>
        )
    }
}
export default Main;