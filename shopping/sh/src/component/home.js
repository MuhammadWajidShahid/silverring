import React ,{Component} from "react"

import Slider from "./slider";
import Feature from "./feature";
import Joinpage from "./joinpage";
import Product from "./product";

class Home extends Component{
    render(){
        return(
            <div style={{display:"flex",flexWrap:"wrap"}}>
                <Slider></Slider>
                <Feature/>
                <Joinpage/>
                <Product/>
            </div>

        );
    }
}


export default Home;