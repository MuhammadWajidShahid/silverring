import React, {Component} from "react"
import "../style/joinpage.css"
class Joinpage extends Component{
    render(){
        return(
                <div className="div6">
                <h1 className="headjoin">Join Our Newsletter</h1>
                <p className="headbefirst">Be the first to know our special offers for you</p>
                <input type="text" placeholder="Enter your email adress" className="email"></input>
                <input type="button" value="Subscribe" className="subbut"></input>
                </div>
                
        )
    }
}
export default Joinpage;