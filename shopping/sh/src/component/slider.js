import React, { Component } from "react";
import banner from "./pics/banner.png"
import banner2 from "./pics/banner2.jpg"
import banner3 from "./pics/banner3.jpg"
import "../style/slider.css";

import Carousel from 'react-bootstrap/Carousel'


class Slider extends Component {
    render() {
        return (

            <div style={{ width: "70%", margin: "auto", marginTop: "10px", display: "block" }}>
                <div style={{ width: "30%", height: "400px", float: "left" }}>
                    <div style={{ width: "270px", height: "400px", backgroundColor: "#3b3838", marginLeft: "0px", borderBottom: "1px solid silver" }}>
                        <div className="navdiv">
                            <p className="navitem">Men</p>
                        </div>
                        <div className="navdiv">
                            <p className="navitem">Women</p>
                        </div>
                        <div className="navdiv">
                            <p className="navitem">Bags</p>
                        </div>
                        <div className="navdiv">
                            <p className="navitem">Shoes</p>
                        </div>
                        <div className="navdiv">
                            <p className="navitem">Jewellery</p>
                        </div>
                        <div className="navdiv">
                            <p className="navitem">Accessories</p>
                        </div>
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






