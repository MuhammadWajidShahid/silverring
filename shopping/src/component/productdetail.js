import React, { Component } from "react";
import Item from "./item";
import {connect} from "react-redux";
class Productdetail extends Component {
    constructor(props)
    {
        super(props)
        this.state={
            product:{},
            images:[],
            main:0
        }
    }
    componentWillMount(){
        let id=this.props.match.params.id;
        this.props.products.map(product=>{
            if(product._id===id)
            {
                this.setState({images:JSON.parse(product.images)})
                console.log(product)
                this.setState({product:product});
            }
        })
    }
    componentWillReceiveProps(){
        let id=this.props.match.params.id;
        this.props.products.map(product=>{
            if(product._id===id)
            {
                this.setState({images:JSON.parse(product.images)})
                console.log(product)
                this.setState({product:product});
            }
        })
    }
    addtocart=()=>{
        this.props.dispatch({type:"ADD_CART",payload:this.props.match.params.id})
    }
    addtowishlist=()=>{
        this.props.dispatch({type:"ADD_WISHLIST",payload:this.props.match.params.id})
    }
    maindiv = {
        marginTop: "20px",
        height: "1000px",
        width: "100%",
    }
    innerdiv = {
        height: "950px",
        width: "75%",
        // backgroundColor: "gray",
        margin: "auto"
    }
    imagesdiv = {
        height: "400px",
        width: "50%",
        // backgroundColor:"green",
        display: "inline-block",
        float: "left"
        // margin:"0px"
    }
    mainimg = {
        width: "100%",
        height: "80%",
        // marginLeft:"10%",
        // backgroundColor:"blue",
        display: "flex",
        justifyContent: "center",
        verticalAlign: "center",
        borderStyle: "solid",
        borderWidth: "1px"
    }
    downimage = {
        height: "10%",
        width: "10%",
        marginLeft: '2.5%',
        marginTop: "2.5%",
        // backgroundColor: "gray",
        display: "inline-block",
        borderStyle: "solid",
        borderWidth: "1px"
    }
    img = {
        height: "100%",
        width: "100%"
    }
    name = {
        marginLeft: "30px",
        fontWeight: "400"
    }
    prodes = {
        marginLeft:"30px"
    }
    addcart={
        float:'left',
        marginLeft:"30px",
        width:"100px",
        marginRight:"0px"
    }
    addwishlist={
        float:'left',
        marginLeft:"10px",
        width:"130px",
        backgroundColor:"rgb(59,56,56)"
    }
    relateddiv={
        height:"500px",
        width:"100%",
        // backgroundColor:"red",
        float:"right",
        marginTop:"10px",
        paddingTop:"20px",
        textAlign:"center"
    }
    render() {
        const {product,main,images} =this.state
        const {products}=this.props;
        let n=0;
        let imagess;
        return (
            <div style={{width:"100%",top:"0px"}}>

            <div style={this.maindiv}>
                <div style={this.innerdiv}>
                    <div style={this.imagesdiv}>
                        <div style={this.mainimg}>
                        {

                            images.map((img,index)=>{
                                if(index===main)
                                return(
                                <img src={img} ></img>)
                            })
                        }
                        </div>
                        <div style={this.downimage}>
                            {/* <img src={product.images[1]} style={this.img}></img> */}
                        </div>
                        <div style={this.downimage}>
                            {/* <img src={product.images[2]} style={this.img}></img> */}
                        </div>
                        <div style={this.downimage}>
                            {/* <img src={product.images[2]} style={this.img}></img> */}
                        </div>

                    </div>
                    <div style={this.imagesdiv} >
                        <h3 style={this.name}>{product.productName}</h3>
                        <p style={this.prodes}>{product.des}</p>
                        <p className="p4" style={this.prodes}>RS. {+product.price}</p>
                        {
                            (product.disc)
                            ?(<p style={{ marginTop: "0px", fontSize: "13px",marginLeft:"27px"}}><del className="p5">RS. {+product.price*(product.disc/100) + " "} </del> -{+product.disc}%</p>)
                        :(<p></p>)
                        }
                    <input type="button" value="Add To Cart" className="login" style={this.addcart} onClick={this.addtocart}/>
                    <input type="button" value="Add To Wishlist" className="login" style={this.addwishlist} onClick={this.addtowishlist}/>
                    
                    </div>
                    <div style={this.relateddiv}>
                    <h2  style={{marginBottom:"40px"}}>Related Products</h2>
                    {
                    products.map((product,index)=>{
                        if(n<4)
                        {
                            if(product.categorey===this.state.product.categorey)
                            {
                                n++;
                                imagess=JSON.parse(product.images);
                                return(
                                    <Item img={imagess[0]} price={product.price} disc={product.disc} txt={product.productName} id={product._id}></Item>                            
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
                            <Item img={require("./pics/shoe.jpg")} price="980" olprice="1098" dis="15" txt="BEST SHOES FOR SALE"></Item> */}
                    </div>
                </div>
            </div>
            </div>
        )
    }
}
const mapStateToProps = (store) =>{                             
    return {
      products: store.productReducer,
    }
}
export default connect(mapStateToProps)(Productdetail);