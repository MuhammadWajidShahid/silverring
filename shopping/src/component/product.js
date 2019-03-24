import React,{Component} from "react"
import "../style/product.css";
import {connect} from "react-redux"
import Item from "./item"
class Product extends Component{
    render(){
        const {products}=this.props;
        let n=0;
        let images;

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

            {
                    products.map((product,index)=>{
                        if(n<6)
                        {
                            if(product.disc)
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
            {/* <Item img={require("./pics/sox.jpg")} price="980" olprice="1098" dis="15" txt="BEST SHOES FOR SALE"></Item>
                    <Item img={require("./pics/ring.jpg")} price="980" olprice="1098" dis="15" txt="BEST SHOES FOR SALE"></Item>
                    <Item img={require("./pics/shoes.jpg")} price="980" olprice="1098" dis="15" txt="BEST SHOES FOR SALE"></Item>
                    <Item img={require("./pics/shoe.jpg")} price="980" olprice="1098" dis="15" txt="BEST SHOES FOR SALE"></Item>
                    <Item img={require("./pics/glasses.jpg")} price="980" olprice="1098" dis="15" txt="BEST SHOES FOR SALE"></Item>
                    <Item img={require("./pics/plring.jpg")} price="980" olprice="1098" dis="15" txt="BEST SHOES FOR SALE"></Item> */}

            </div>
            </div>
        )
    }
}
const mapStateToProps=(store)=>{
    return{
        products:store.productReducer
    }
}
export default connect(mapStateToProps)(Product);