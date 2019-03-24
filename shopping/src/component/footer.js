import React, { Component } from "react"
import "../style/footer.css";
import {Link} from "react-router-dom"
class Footer extends Component {
    link = {
        width: "30px",
        height: "30px",
        marginLeft: "25px"
        , cursor: "pointer",
        marginTop: "35px",
        // float:"right"
        // backgroundcolor:"red"
    }
    link2 = {
        width: "30px",
        height: "30px",
        marginLeft: "0px"
        , cursor: "pointer",
        marginTop: "35px"
    }
    img1={ 
        width: "20px",
     height: "20px",
      marginLeft: "5px",
       cursor: "pointer" 
    }
    img2={ 
        width: "20px",
     height: "20px",
      marginLeft: "5px",
       marginTop: '20px', 
       cursor: "pointer",
       float:"left"
     }
     logos=0;
     componentDidMount(){
         var div=document.getElementsByClassName("div17");
        //  console.log(div[0].children);
         this.logos=div[0].children;
     }
     over=(chilno)=>{
         switch(chilno)
         {
            case 0:{
                this.logos[0].src=require("./pics/facebook2.png");
                break;
            }
             case 1:{
                this.logos[1].src=require("./pics/instagram.png");
                break;
             }
             case 2:{
                this.logos[2].src=require("./pics/googleplus2.png");
                break;
             }
             case 3:{
                this.logos[3].src=require("./pics/twitter2.png");
                break;
            }
            case 4:{

               this.logos[4].src=require("./pics/youtube-logo.png");
               break;
            }

         }
     }
     out=(chilno)=>{
         switch(chilno)
         {
            case 0:{
                this.logos[0].src=require("./pics/facebook.png");
                break;
            }
            case 1:{
                this.logos[1].src=require("./pics/insta.png");
                break;
            }
            case 2:{
                this.logos[2].src=require("./pics/googleplus.png");
                break;
            }
            case 3:{
                this.logos[3].src=require("./pics/twitter.png");
                break;
            }
            case 4:{

              this.logos[4].src=require("./pics/youtube.png");
              break;
            }
         }
    }
    render() {
        return (
            <div className="div13">
                <div className="div14">
                    <div className="div15">
                        <h1 className="headrch">RCH</h1>
                        <img src={require("./pics/phone.png")} style={this.img1}></img>
                        <p className="callus"> Call Us<p className="phone"> 06575675556755</p></p>
                        <br></br>
                        <img src={require("./pics/location.png")} style={this.img2}></img>
                        <p className="callus" style={{float:"left",marginTop:"25px"}}>p9873 st# 20 razabad newyork</p>
                        <div className="div17">
                            <img src={require("./pics/facebook.png")} style={this.link2} onMouseOver={()=>{this.over(0)}} onMouseLeave={()=>this.out(0)}></img>
                            <img src={require("./pics/insta.png")} style={this.link} onMouseOver={()=>{this.over(1)}} onMouseLeave={()=>this.out(1)}></img>
                            <img src={require("./pics/googleplus.png")} style={this.link} onMouseOver={()=>{this.over(2)}} onMouseLeave={()=>this.out(2)}></img>
                            <img src={require("./pics/twitter.png")} style={this.link} onMouseOver={()=>{this.over(3)}} onMouseLeave={()=>this.out(3)}></img>
                            <img src={require("./pics/youtube.png")} style={this.link} onMouseOver={()=>{this.over(4)}} onMouseLeave={()=>this.out(4)}></img>
                        </div>
                    </div>
                    {/* <div className="div16">
                    <h5 className="headfo">FOOTER MENU</h5>
                    <p className="navlink">Home</p>
                    <p className="navlink">Shop</p>
                    <p className="navlink">About</p>
                    <p className="navlink">Pages</p>
                    <p className="navlink">Blogs</p>
                    <p className="navlink">Contact</p>
                    </div> */}
                    {/* <div className="div16">
                    <h5 className="headfo">USEFUL LINKS</h5>
                    <p className="navlink">Privacy Policy</p>
                    <p className="navlink">Returns</p>
                    <p className="navlink">Terms &amp; Condition</p>
                    <p className="navlink">Contact Us</p>
                    <p className="navlink">Latest News</p>
                    <p className="navlink">Our Sitemap</p>
                    </div> */}
                    <div className="div16">
                    <h5 className="headfo">SHOP</h5>
                    <Link to="/shop/earring" style={{color:"black",textDecoration:"none"}}>
                        <p className="navlink">Earrings</p>
                        </Link>
                        <Link to="/shop/women ring" style={{color:"black",textDecoration:"none"}}>
                        <p className="navlink">Women Ring</p>
                        </Link>
                        <Link to="/shop/men ring" style={{color:"black",textDecoration:"none"}}>
                        <p className="navlink">Men Ring</p>
                        </Link>
                        <Link to="/shop/chains" style={{color:"black",textDecoration:"none"}}>
                        <p className="navlink">Chains</p>
                        </Link>
                        <Link to="/shop/bangles" style={{color:"black",textDecoration:"none"}}>
                        <p className="navlink">Bangles</p>
                        </Link>
                        <Link to="/shop/stones" style={{color:"black",textDecoration:"none"}}>
                        <p className="navlink">Stones</p>
                        </Link>
                    </div>
                    {/* <div className="div16">
                    <h5 className="headfo">COUSTOMER SERVICES</h5>
                    <p className="navlink">Orders and Returns</p>
                    <p className="navlink">Contact Us</p>
                    <p className="navlink">Help &amp; FAQs</p>
                    <p className="navlink">Consultants</p>
                    </div> */}
                </div>
                <p className="textcopy">Copyright &copy; 2017 Created by Wajid Shahid. All rights reserved</p>
                <div className="paymet">
                <img src={require("./pics/mastercard.png")} className="logo"></img>
                <img src={require("./pics/paypal.png")} className="logo"></img>
                <img src={require("./pics/american-express.png")} className="logo"></img>
                <img src={require("./pics/visa.png")} className="logo"></img>
                </div>
            </div>
        )
    }
}
export default Footer;