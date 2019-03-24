import React, { Component } from "react"
import Item from "./item";
import {Link} from "react-router-dom"
import {connect} from "react-redux";
class Shopbar extends Component {
    constructor(props)
    {
    super(props);
        this.state={
            cat:""
        }
    }
    componentWillMount(){
        this.setState({cat:this.props.match.params.categorey})
    }
    componentWillReceiveProps(){
        this.setState({cat:this.props.match.params.categorey})  
    }
    h5={
        marginTop:"20px",
        marginBottom:"20px",
        fontWeight:"450" 
      }
      hr={
        //   marginLeft:"-30px",
        float:"left",
          backgroundColor:"#3b3838e",
          width:"70%"
      }
      input={
          width:"40%",
          marginTop:"10px",
          outlineColor:"orange",
          border:"none",
          border:"solid 1px #3b3838e",
          height:"25px",
          fontSize:"13px"
      }
    render() {
        const {cat}=this.state
        const {products}=this.props;
        let n=0;
        let images;
        return (
            <div >
                {/* <Slider/> */}
                <div style={{ width: "100%", paddingBottom:"50px", paddingTop: "20px" }}>
                    <div style={{ width: "75%", paddingBottom:"20px",minHeight:"1000px", margin: "auto" }}>
                        <div style={{ paddingBottom:"50px", width: "25%", float: "left",color:"#3b3838" }}>
                        <h5 style={this.h5}>Categories</h5>
                        <Link to="/shop/earring" style={{color:"black",textDecoration:"none"}}>
                        <p>Earrings</p>
                        </Link>
                        <Link to="/shop/women ring" style={{color:"black",textDecoration:"none"}}>
                        <p>Women Ring</p>
                        </Link>
                        <Link to="/shop/men ring" style={{color:"black",textDecoration:"none"}}>
                        <p>Men Ring</p>
                        </Link>
                        <Link to="/shop/chains" style={{color:"black",textDecoration:"none"}}>
                        <p>Chains</p>
                        </Link>
                        <Link to="/shop/bangles" style={{color:"black",textDecoration:"none"}}>
                        <p>Bangles</p>
                        </Link>
                        <Link to="/shop/stones" style={{color:"black",textDecoration:"none"}}>
                        <p>Stones</p>
                        </Link>
                        <hr style={this.hr}></hr>
                        <br></br>
                        <h5 style={this.h5}>Price</h5>
                        <input type="text" placeholder="Min Price" style={this.input}></input>
                        <br></br>
                        <input type="text" placeholder="Max Price" style={this.input}></input>
                        <br></br>  
                        <input type="button" value="Filter" className="login" style={{float:"left",marginTop:"10px"}}></input>                      
                        </div>
                        <div style={{ paddingBottom:"20px", width: "75%", float: "right" }}>
                            <div style={{ width: '100%', height: "50px", paddingTop: "20px", color: "" }}>
                                {/* <p style={{ marginLeft: "20px", display: "inline" }}>showing 1 to 12 of 199 total</p> */}
                                {/* <p style={{ float: "right", marginRight: "20px", display: "inline", marginBottom: "0px" }}>Defualt Sorting</p> */}
                            </div>
                            {
                    products.map((product,index)=>{
                        // if(n<8)
                        {
                            if(product.categorey===cat)
                            {
                                // n++;
                                images=JSON.parse(product.images);
                                return(
                                    <Item img={images[0]} price={product.price} disc={product.disc} txt={product.productName} id={product._id}></Item>                            
                                    )
                                }
                            }
                            // else{
                                // break;
                            // }
                    })
                }

                        </div>
                    </div>
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
export default connect(mapStateToProps)(Shopbar)