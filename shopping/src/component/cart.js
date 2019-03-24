import React ,{Component} from "react";
import Quantity from "./quantity";
import {connect} from "react-redux" 
class Cart extends Component{
    maindiv={
        width:"100%",
        height:"auto",
        // backgroundColor:"red",
        paddingTop:"50px",
        marginTop:"20px",
        paddingBottom:'50px',
        marginBottom:"50px"
    }
    img={
        height:"80px",
        width:"80px"
    }
    table={
        margin:"auto",
        width:"75%",
        cellPadding:"10px"
    }
    tr={
        borderBottom:"1px solid rgb(59,56,56)"
    }
    copon={
        width:"100px",
        height:"28px",
        outlineColor:"orange",
        paddingLeft:"5px",
        fontSize:'13px',
        marginRight:"2px"
    }
    coponadd={
        height:"30px",
        width:"50px",
        backgroundColor:"orange",
        border:"none",
        color:"white",
        position:"relative",
        outlineColor:"orange",
    }
    div2={
        width:'75%',
        margin:"auto",
        paddingLeft:"50px",
        // paddingTop:"0px",
        marginTop:"10px",
    }
    div3={
        width:"40%",
        height:"150px",
        marginLeft:"60%",
        textAlign:"center",
        paddingTop:"5%"
    }
    procced={
        width:"50%",
        height:"30px",
        color:"white",
        backgroundColor:"rgb(59,56,56)",
        border:"none",
        fontSize:"14px",
        marginTop:"10px",
        outlineColor:"orange"
    }
    crosbut={
        color:"rgb(59,56,56)",
        backgroundColor:"white",
        border:"none",
        outline:"none"
        // outlineColor:"orange"
    }
    render(){
        const {cart,products} =this.props;
        let images;
        let product,totalamount=0;
    return(
            <div style={this.maindiv}>
            <table style={this.table} cellPadding="10px">
            <tbody>
                <tr style={this.tr}>
                    <th>Product</th>
                    <th>Name&Description</th>
                    <th>Categorey</th>
                    {/* <th>Size</th> */}
                    <th>Quantity</th>
                    <th>Amount</th>
                    <th></th>
                </tr>
                {
                    cart.map(id=>{
                         products.map(iproduct=>{
                            if(iproduct._id===id)
                            {
                                 product=iproduct;
                            }
                        });
                        console.log(product)
                        if(product)
                        {
                            totalamount+=product.price;
                        images=JSON.parse(product.images);
                        return(
                            <tr style={this.tr}>
                    <td>

                        <img src={images[0]} style={this.img}/>
                        </td>
                        <td>{product.productName}</td>
                        <td>{product.categorey}</td>
                        {/* <td>10</td> */}
                        <td style={{display:"flex",justifyContent:"center",}}><Quantity/></td>
                        <td>{product.price}</td>
                        <td>
                        <input type="button" value="&#10006;" style={this.crosbut}/>
                        </td>

                </tr>
                        )}
                    })
                }
                <tr style={this.tr}>
                <td>
                    <input type="text" placeholder="Copon Code" style={this.copon}/>
                    <input type="button" value="Add" style={this.coponadd}/>
                </td>
                <td></td>
                <td></td>
                <td></td>
                {/* <td></td> */}
                <td></td>
                <td></td>
                </tr>
                </tbody>
                </table>
                <div style={this.div2}>
                <h6>Estimate Shipping:</h6>
                <div style={this.div3}>
                <h5>Total:{+totalamount}</h5>
                <input type="button" value="Proceed To Checkout" style={this.procced}/>
                </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (store) =>{                             
    return {
      cart: store.cartReducer,
      products: store.productReducer,
    }
}
export default connect(mapStateToProps)(Cart);