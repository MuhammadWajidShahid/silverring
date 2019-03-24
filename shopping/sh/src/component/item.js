import React,{Component} from "react"
import "../style/item.css"
class Item extends Component{
    render(){
        return(
            <div>
            <div className="div5">
            <img src={this.props.img} className="item"></img>
            <p className="p3">{this.props.txt}</p>
            <p className="p4">RS. {+this.props.price}</p>
            <p style={{marginTop:"0px", fontSize:"13px"}}><del className="p5">RS. {+this.props.olprice +" "} </del> -{+this.props.dis}%</p>
            </div>
            </div>
        )
    }
}
export default Item;