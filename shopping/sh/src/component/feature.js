import React, { Component } from "react";
import Item from "./item"
class Feature extends Component {
    div = {
        margin: "auto",
        backgroundColor:"white",
        height: "820px",
        width: "1000px",
        // marginTop: "70px",
        // textAlign: "center",
        paddingTop:'10px',
        marginBottom:'20px',
        // backgroundColor:'red'
    }
    flex = {
        // display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",marginTop:"30px"

    }
    render() {
        return (
            <div style={{width:"100%",marginTop:"20px",display:"block", paddingTop:"20px"}} >
          <div style={this.div}>
                <h1 style={{ fontWeight: "600",textAlign:'center' }}>Featured Products</h1>
                <div style={this.flex}>
                    <Item img={require("./pics/glasses.jpg")} price="980" olprice="1098" dis="15" txt="BEST SHOES FOR SALE"></Item>
                    <Item img={require("./pics/ring.jpg")} price="980" olprice="1098" dis="15" txt="BEST SHOES FOR SALE"></Item>
                    <Item img={require("./pics/sox.jpg")} price="980" olprice="1098" dis="15" txt="BEST SHOES FOR SALE"></Item>
                    <Item img={require("./pics/plring.jpg")} price="980" olprice="1098" dis="15" txt="BEST SHOES FOR SALE"></Item>
                    <Item img={require("./pics/otg.jpg")} price="980" olprice="1098" dis="15" txt="BEST SHOES FOR SALE"></Item>
                    <Item img={require("./pics/shoes.jpg")} price="980" olprice="1098" dis="15" txt="BEST SHOES FOR SALE"></Item>
                    <Item img={require("./pics/shirt.jpg")} price="980" olprice="1098" dis="15" txt="BEST SHOES FOR SALE"></Item>
                    <Item img={require("./pics/shoe.jpg")} price="980" olprice="1098" dis="15" txt="BEST SHOES FOR SALE"></Item>                    
                </div>
            </div>
                <img src={require("./pics/layer.png")} style={{width:"1420px",width:"100%",marginBottom:"0px"}}></img>
                </div>
        )
    }
}
export default Feature;