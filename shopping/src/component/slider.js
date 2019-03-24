import React, { Component } from "react";
import banner from "./pics/banner.png"
import banner2 from "./pics/banner2.jpg"
import banner3 from "./pics/banner3.jpg"
import "../style/slider.css";

import Carousel from 'react-bootstrap/Carousel';
import {Link} from "react-router-dom"


class Slider extends Component {
    render() {
        return (

            <div style={{ width: "70%", margin: "auto", marginTop: "10px", display: "block" }}>
                <div style={{ width: "30%", height: "400px", float: "left" }}>
                    <div style={{ width: "270px", height: "400px", backgroundColor: "#3b3838", marginLeft: "0px", borderBottom: "1px solid silver" }}>
                       <Link to="/shop/earring">
                        <div className="navdiv">
                            <p className="navitem">Earrings</p>
                        </div>
                       </Link>
                       <Link to="/shop/women ring">
                        <div className="navdiv">
                            <p className="navitem">Women Ring</p>
                        </div>
                       </Link>
                       <Link to="/shop/men ring">
                        <div className="navdiv">
                            <p className="navitem">Men Ring</p>
                        </div>
                       </Link>
                       <Link to="/shop/chains">
                        <div className="navdiv">
                            <p className="navitem">Chains</p>
                        </div>
                       </Link>
                       <Link to="/shop/bangles">
                        <div className="navdiv">
                            <p className="navitem">Bangles</p>
                        </div>
                       </Link>
                       <Link to="/shop/stones">
                        <div className="navdiv">
                            <p className="navitem">Stones</p>
                        </div>
                       </Link>
                    </div>
                </div>

                <div style={{ width: "70%", backgroundColor: "red", height: "400px", float: "left" }}>

                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={banner}
                                alt="First slide"
                                height="400px"
                            />

                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={banner2}
                                alt="Third slide"
                                height="400px"
                            />


                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={banner3}
                                alt="Third slide"
                                height="400px"
                            />

                        </Carousel.Item>
                    </Carousel>
                </div>

            </div>

        )
    }
}
export default Slider;






