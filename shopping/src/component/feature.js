import React, { Component } from "react";
import Item from "./item"
import {connect} from "react-redux";
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
        const {products}=this.props;
        let n=0;
        let images;

        return (
            <div style={{width:"100%",marginTop:"20px",display:"block", paddingTop:"20px"}} >
          <div style={this.div}>
                <h1 style={{ fontWeight: "600",textAlign:'center' }}>Featured Products</h1>
                <div style={this.flex}>
                {
                    products.map((product,index)=>{
                        if(n<8)
                        {
                            if(product.featured==="true")
                            {
                                n++;
                                images=JSON.parse(product.images);
                                return(
                                    <Item img={images[0]} price={product.price} disc={product.disc} txt={product.productName} id={product._id}></Item>                            
                                    )
                                }
                            }
                            else{
                                // break;
                            }
                    })
                }
                    {/* <Item img={require("./pics/glasses.jpg")} price="980" olprice="1098" dis="15" txt="BEST SHOES FOR SALE"></Item>
                    <Item img={require("./pics/ring.jpg")} price="980" olprice="1098" dis="15" txt="BEST SHOES FOR SALE"></Item>
                    <Item img={require("./pics/sox.jpg")} price="980" olprice="1098" dis="15" txt="BEST SHOES FOR SALE"></Item>
                    <Item img={require("./pics/plring.jpg")} price="980" olprice="1098" dis="15" txt="BEST SHOES FOR SALE"></Item>
                    <Item img={require("./pics/otg.jpg")} price="980" olprice="1098" dis="15" txt="BEST SHOES FOR SALE"></Item>
                    <Item img={require("./pics/shoes.jpg")} price="980" olprice="1098" dis="15" txt="BEST SHOES FOR SALE"></Item>
                    <Item img={require("./pics/shirt.jpg")} price="980" olprice="1098" dis="15" txt="BEST SHOES FOR SALE"></Item>
                    <Item img={require("./pics/shoe.jpg")} price="980" olprice="1098" dis="15" txt="BEST SHOES FOR SALE"></Item>                     */}
                </div>
            </div>
                <img src={require("./pics/layer.png")} style={{width:"1420px",width:"100%",marginBottom:"0px"}}></img>
                </div>
        )
    }
}
const mapStateToProps=(store)=>{
    return{
        products:store.productReducer
    }
}
export default connect(mapStateToProps)(Feature);