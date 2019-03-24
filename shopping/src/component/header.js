import React, { Component } from "react";
import "../style/header.css";
import { Link } from "react-router-dom";
import {connect} from "react-redux"

class Header extends Component {

    drop = () => {
        var droplist = document.getElementById("droplist")
        // droplist.style.display = "inline-block";

        if (droplist.style.display === "none") {
            droplist.style.display = "inline-block";
        }
        else {
            droplist.style.display = "none";
        }
        // setTimeout(this.back, 5000);
    }
    back = () => {
        var droplist = document.getElementById("droplist")
        if (droplist.style.display === "inline-block") {
            droplist.style.display = "none";
        }
    }
    render() {
const {wish,cart}=this.props
        return (
            <div className="div1" >
                <div className="d1">
                    <div className="class">

                        <img src={require("./pics/phone.png")} className="phn"></img>
                        <p className="tocall">Call Us </p><p className="tocall" style={{ display: "inline", color: "white" }} > &nbsp;(041) 264-3399 </p>
                    </div>
                    <Link to="/login">
                        <input type="button" value="Log In" className="login"></input>
                    </Link>
                </div>
                <div className="d2">
                    <img src={require("./pics/rc5.png")} style={{ width: "170px", height: "60px", marginLeft: "130px" }}></img>
                    {/* <h1 className="h1">RCH</h1> */}
                    <div className="d3">
                        <Link to="/wishlist" style={{ display: "inline-block" }}>
                            <img src={require("./pics/heart.png")} className="favbut"></img>
                            {
                                (wish.length>0)?
                                <div className="d5 d6">{wish.length}</div>
                                :<div></div>
                            }
                        </Link>
                        <Link to="/cart" style={{ float: "right" }}>
                            <div className="d4"></div>
                            {
                                (cart.length>0)?
                                <div className="d5">{cart.length}</div>
                                :<div></div>
                            }
                        </Link>
                    </div>
                    <input type="button" className="searchbut"></input>
                    <input type="text" placeholder="Search your favorite Brands and Products" className="searchbox"></input>
                </div>
                <div className="d1" style={{ backgroundColor: "orange" }}>
                <Link to="/home">
                    <div className="class" style={{ marginLeft: "50px" }}>

                        <p style={{ marginTop: "0px", color: "white", fontSize: "13px" }}>Home</p>
                    </div>
                    </Link>
                    <Link to="/shop/earrings">
                        <div className="class" style={{ marginLeft: "10px" }}>

                            <p style={{ marginTop: "0px", color: "white", fontSize: "13px" }}>Earrings</p>
                        </div>
                    </Link>
                    <Link to="/shop/women ring">
                    <div className="class" style={{ marginLeft: "10px" }}>

                        <p style={{ marginTop: "0px", color: "white", fontSize: "13px" }}>Women Ring</p>
                    </div>
                    </Link>
                    <Link to="/shop/men ring">
                    <div className="class" style={{ marginLeft: "10px" }}>

                        <p style={{ marginTop: "0px", color: "white", fontSize: "13px" }}>Men Ring</p>
                    </div>
                    </Link>
                    <Link to="/shop/chains">
                    <div className="class" style={{ marginLeft: "10px" }}>

                        <p style={{ marginTop: "0px", color: "white", fontSize: "13px" }}>Chains</p>
                    </div>
                    </Link>
                    <Link to="/shop/bangles">
                    <div className="class" style={{ marginLeft: "10px" }}>

                        <p style={{ marginTop: "0px", color: "white", fontSize: "13px" }}>Bangles</p>
                    </div>
                    </Link>
                    <Link to="/shop/stones">
                    <div className="class" style={{ marginLeft: "10px" }}>

                        <p style={{ marginTop: "0px", color: "white", fontSize: "13px" }}>Stones</p>
                    </div>
                    </Link>
                </div>

                <div id="droplist" onMouseLeave={this.back} style={{ width: "270px", height: "400px", display: "none", backgroundColor: "#3b3838", position: "absolute", marginLeft: "213px", marginTop: "10px", borderBottom: "1px solid silver" }}>
                    <div className="navdiv">
                        <p className="navitem">Men</p>
                    </div>
                    <div className="navdiv">
                        <p className="navitem">Women</p>
                    </div>
                    <div className="navdiv">
                        <p className="navitem">Bags</p>
                    </div>
                    <div className="navdiv">
                        <p className="navitem">Shoes</p>
                    </div>
                    <div className="navdiv">
                        <p className="navitem">Jewellery</p>
                    </div>
                    <div className="navdiv">
                        <p className="navitem">Accessories</p>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps=(store)=>{
    return{
        cart:store.cartReducer,
        wish:store.wishlistReducer
    }
}
export default connect(mapStateToProps)(Header);

