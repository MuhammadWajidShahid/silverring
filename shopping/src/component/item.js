import React,{Component} from "react"
import "../style/item.css";
import {Link} from "react-router-dom";
class Item extends Component{
    render(){
        return(
            <div>
            <Link to={"/productdetail/"+this.props.id}>
            <div className="div5">
            <img src={this.props.img} className="item"></img>
            <p className="p3">{this.props.txt}</p>
            <p className="p4">RS. {+this.props.price}</p>
            {
                            (this.props.disc)
                            ?(<p style={{marginTop:"0px", fontSize:"13px", color:"black"}}><del className="p5">RS. {+Number(this.props.price)*(Number(this.props.disc)/100) + " "} </del> -{+this.props.disc}%</p>)
                        :(<p></p>)
                        }
            {/* <p style={{marginTop:"0px", fontSize:"13px", color:"black"}}><del className="p5">RS. {+this.props.olprice +" "} </del> -{+this.props.dis}%</p> */}
            </div>
            </Link>
            </div>
        )
    }
}
export default Item;