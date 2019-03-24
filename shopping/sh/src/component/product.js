import React,{Component} from "react"
import "../style/product.css";
import Item from "./item"
class Product extends Component{
    render(){
        return(
            <div className="div7">
            <div className="div8">
            <img src={require("./pics/ban1.jpg")} style={{width:"100%",height:"270px"}}></img>
            </div>
            <div className="div9">
            <img src={require("./pics/ban2.jpg")} style={{width:"100%",height:"230px"}}></img>
            </div>
            <div className="div10">
            <img src={require("./pics/ban3.jpg")} style={{width:"100%",height:"270px"}}></img>
            </div>
            <div className="div12">
            <h1 className="headsale">Sale/Trending/Best Seller

            </h1>
            </div>
            <div className="div11">
            <Item img={require("./pics/sox.jpg")} price="980" olprice="1098" dis="15" txt="BEST SHOES FOR SALE"></Item>
                    <Item img={require("./pics/ring.jpg")} price="980" olprice="1098" dis="15" txt="BEST SHOES FOR SALE"></Item>
                    <Item img={require("./pics/shoes.jpg")} price="980" olprice="1098" dis="15" txt="BEST SHOES FOR SALE"></Item>
                    <Item img={require("./pics/shoe.jpg")} price="980" olprice="1098" dis="15" txt="BEST SHOES FOR SALE"></Item>
                    <Item img={require("./pics/glasses.jpg")} price="980" olprice="1098" dis="15" txt="BEST SHOES FOR SALE"></Item>
                    <Item img={require("./pics/plring.jpg")} price="980" olprice="1098" dis="15" txt="BEST SHOES FOR SALE"></Item>

            </div>
            </div>
        )
    }
}
export default Product;