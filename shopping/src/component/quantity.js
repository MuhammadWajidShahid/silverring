import React ,{Component} from "react"
class Quantity extends Component{
    div={
        width:"120px",
        height:"30px",
        backgroundColor:"rgb(59,56,56)",
        color:"white",
        marginTop:"25px"
        // paddingLeft:"0px"
    }
    button={
        width:"20px",
        height:"25px",
        backgroundColor:"rgb(59,56,56)",
        border:"none",
        outline:"none",
        color:"white",
        fontSize:"15px",
        fontWeight:"bold"
    }
    text={
        display:"inline-block",
        color:"white",
        width:"40px",
        textAlign:"center"
    }
    render()
    {
        return(
            <div style={this.div}>
            <input type="button" value="-" style={this.button}/>
            <p style={this.text}>2</p>
            <input type="button" value="+" style={this.button}/>
            </div>
        )
    }
}
export default Quantity;