import React, { Component } from "react";
import "../style/header.css";
// import Bootstrap from "bootstrap";
import onClickOutside from 'react-onclickoutside';
class Header extends Component {
    handleClickOutside = () => {
        this.back();
      }
    drop = () => {
        var droplist = document.getElementById("droplist")
        // droplist.style.display = "inline-block";

           if(droplist.style.display==="none")
           {
            droplist.style.display="inline-block";
           }
           else{
            droplist.style.display="none";
           }
        // setTimeout(this.back, 5000);
    }
    back = () => {
        var droplist = document.getElementById("droplist")
        if(droplist.style.display==="inline-block"){
        droplist.style.display = "none";
        }
    }
    render() {

        return (
            <div className="div1" >
                <div className="d1">
                    <div className="class">

                        <img src={require("./pics/phone.png")} className="phn"></img>
                        <p className="tocall">Call Us<p style={{ display: "inline", color: ""  }}> (041) 269-0699 </p></p>
                    </div>

                    <input type="button" value="Log In" className="login"></input>
                </div>
                <div className="d2">
                    {/* <h1 className="h1">RCH</h1> */}
                    <div className="d3">

                        <img src={require("./pics/heart.png")} className="favbut"></img>
                        <div className="d5 d6">10</div>
                        <div className="d4"></div>
                        <div className="d5">5</div>
                    </div>
                    <input type="button" className="searchbut"></input>
                    <input type="text" placeholder="Search your favorite Brands and Products" className="searchbox"></input>
                </div>
                    <div className="d1" style={{ backgroundColor: "orange" }}>
                    <div className="class" style={{ marginLeft: "270px" }}>

                        <p onClick={this.drop}  style={{ marginTop: "0px", color: "white", fontSize: "13px" }}>All Categories ▼</p>
                    </div>
                    <div className="class" style={{ marginLeft: "10px" }}>

                        <p style={{ marginTop: "0px", color: "white", fontSize: "13px" }}>Home</p>
                    </div>
                    <div className="class" style={{ marginLeft: "10px" }}>

                        <p style={{ marginTop: "0px", color: "white", fontSize: "13px" }}>Shop</p>
                    </div>
                    <div className="class" style={{ marginLeft: "10px" }}>

                        <p style={{ marginTop: "0px", color: "white", fontSize: "13px" }}>About</p>
                    </div>
                    <div className="class" style={{ marginLeft: "10px" }}>

                        <p style={{ marginTop: "0px", color: "white", fontSize: "13px" }}>Contact</p>
                    </div>
                </div>

                <div id="droplist" onMouseLeave={this.back} style={{ width: "270px", height: "400px",display:"none", backgroundColor: "#3b3838", position: "absolute", marginLeft: "213px", marginTop: "10px",borderBottom:"1px solid silver" }}>
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
export default onClickOutside(Header);




{/* <div className="div2">
    <p className="p1">Call Us  034543535435</p>
    <p className="p2"><a>Log In</a> / <a> Sign Up</a></p>
</div> */}













{/* <a className="search">Search</a> */ }
{/* <a className="search">All Categories</a> */ }
{/* <nav className="nav" onMouseLeave={this.back}>
    <ul>
        <li>
            <a>Search 	&#x2315; </a>
        </li>
    </ul>
    <ul style={{ marginLeft: "50px", marginRight: "50px" }}>
        <li>
            <a onMouseOver={this.drop}>All Categories ▼</a>
        </li>
    </ul>
   
    <ul>
        <li>
            <a>Home</a>
        </li>
    </ul>
    <ul>
        <li>
            <a>Shop</a>
        </li>
    </ul>
    <ul>
        <li>
            <a>About</a>
        </li>
    </ul>
    <ul>
        <li>
            <a>Blog</a>
        </li>
    </ul>
    <ul>
        <li>
            <a>Contact</a>
        </li>
    </ul>
</nav> 
<p className="heart">♡ &#128722;</p>
<div className="div3" id="droplist" onMouseOver={this.drop} onMouseLeave={this.back}>

<nav>
                <a className="nav2item">Men</a>
                <a className="nav2item">Women</a>
                <a className="nav2item">Bags</a>
                <a className="nav2item">Shoes</a>
                <a className="nav2item">Jewellery</a>
                <a className="nav2item">Accessories</a>
</nav>
           
    </div>*/}