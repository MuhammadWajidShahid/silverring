import React ,{Component} from "react"
import Item from "./item"
class Shopbar extends Component{
    render(){
        return(
            <div >
                {/* <Slider/> */}
                <div style={{width:"100%",height:'1650px',paddingTop:"20px"}}>
<div style={{width:"1000px",height:"1600px",margin:"auto",backgroundColor:"blue"}}>
<div style={{height:"1600px",width:"25%",backgroundColor:"black",float:"left"}}></div>
                <div style={{height:"1600px",width:"75%",backgroundColor:"red",float:"right"}}>
<div style={{width:'100%',height:"50px",backgroundColor:"green",paddingTop:"20px",color:""}}>
<p style={{marginLeft:"20px",display:"inline"}}>showing 1 to 12 of 199 total</p>
 <p style={{float:"right",marginRight:"20px",display:"inline",marginBottom:"0px"}}>Defualt Sorting</p>
</div>
                    <Item/>
                    <Item/>
                    <Item/>
                    <Item/>
                    <Item/>
                    <Item/>
                    <Item/>
                    <Item/>
                    <Item/>
                    <Item/>
                    <Item/>
                    <Item/>

                </div>
</div>
                </div>


                </div>
        )
    }
}
export default Shopbar