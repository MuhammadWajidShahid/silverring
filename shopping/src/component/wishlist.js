import React ,{Component} from "react";
import {connect} from "react-redux"
class Wishlist extends Component{
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
    crosbut={
        color:"rgb(59,56,56)",
        backgroundColor:"white",
        border:"none",
        outline:"none"
        // outlineColor:"orange"
    }
    addcart={
        float:'left',
        marginLeft:"30px",
        width:"150px",
        // marginRight:"-150px",
        marginLeft:"150px",
        outlineColor:"orange"
    }
    render(){
        const {wishlist,products} =this.props;
        let images;
        let product;
    return(
            <div style={this.maindiv}>
            <table style={this.table} cellPadding="10px">
            <tbody>
                <tr style={this.tr}>
                    <th >Product</th>
                    <th>Name&Description</th>
                    <th>Amount</th>
                    <th>Add To Shopping Cart</th>
                    <th></th>
                </tr>
                {
                    wishlist.map(id=>{
                         products.map(iproduct=>{
                            if(iproduct._id===id)
                            {
                                 product=iproduct;
                            }
                        });
                        console.log(product)
                        if(product)
                        {
                        images=JSON.parse(product.images);
                        return(
                            <tr style={this.tr}>
                            <td>
                                <img src={images[0]} style={this.img}/>
                                </td>
                                <td>{product.productName}</td>
                                <td>{product.price}</td>
                                <td>
                            <input type="button" value="Add To Cart" className="login" style={this.addcart}/>
        
                                </td>
                                <td>
                                <input type="button" value="&#10006;" style={this.crosbut}/>
                                </td>
        
                        </tr>
                        )}
                    })
                }
               
                </tbody>
                </table>
            </div>
        )
    }
}
const mapStateToProps = (store) =>{                             
    return {
      wishlist: store.wishlistReducer,
      products: store.productReducer,
    }
}
export default connect(mapStateToProps)(Wishlist);