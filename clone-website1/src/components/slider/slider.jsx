import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.scss";
import Slider from "react-slick";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import SlickButtonFix from "./SlickButtonFix";
import IconButton from "@material-ui/core/IconButton";

import sketch1 from "../../static/images/Achilles.jpg";
import sketch2 from "../../static/images/Artemis.jpg";
import sketch3 from "../../static/images/Eurydice.jpg";
import sketch4 from "../../static/images/Zag and Duca.jpg";
import sketch5 from "../../static/images/Aphrodite.jpg";

export default class Responsive extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }

  next() {
    this.slider.slickNext();
  }

  previous() {
    this.slider.slickPrev();
  }

  render() {
    const settings = {
      className: "center",
      centerPadding: "0",
      slidesToShow: 3,
      slidesToScroll: 1,
      centerMode: true,
      infinite: true,
      dots: false,
      arrows: false,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 2000,
      cssEase: "linear",
      pauseOnHover: true,
      appendDots: (dots) => (
        <SlickButtonFix>
          <div className="slider-dots-container">
            <IconButton className="slider-btn-left" onClick={this.previous}>
              <ChevronLeftIcon
                className="arrow"
                fontSize="large"
                color="primary"
              />
            </IconButton>
            <ul className="dots">{dots}</ul>
            <IconButton className="slider-btn-right" onClick={this.next}>
              <ChevronRightIcon
                className="arrow"
                fontSize="large"
                color="primary"
              />
            </IconButton>
          </div>
        </SlickButtonFix>
      ),
      responsive: [
        {
          breakpoint: 1440,
          settings: {
            centerPadding: "10px"
          }
        },

        {
          breakpoint: 768,
          settings: {
            centerMode: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            centerPadding: "10px"
          }
        },
        {
          breakpoint: 480,
          settings: {
            centerMode: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerPadding: "100px"
          }
        },
        {
          breakpoint: 414,
          settings: {
            centerMode: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerPadding: "80px"
          }
        },
        {
          breakpoint: 320,
          settings: {
            centerMode: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerPadding: "10px"
          }
        }
      ]
    };

    return (
      <div className="section art-slider">
        <Slider ref={(c) => (this.slider = c)} {...settings}>
          <div>
            <div className="card">
              <img src={sketch1} alt="Achilles" />
            </div>
          </div>
          <div>
            <div className="card">
              <img src={sketch2} alt="Artemis" />
            </div>
          </div>
          <div>
            <div className="card">
              <img src={sketch5} alt="Aphrodite" />
            </div>
          </div>
          <div>
            <div className="card">
              <img src={sketch3} alt="Eurydice" />
            </div>
          </div>
          <div>
            <div className="card">
              <img src={sketch4} alt="Zagreus and Duca" />
            </div>
          </div>
          <div>
            <div className="card">
              <img src={sketch1} alt="Achilles" />
            </div>
          </div>
          <div>
            <div className="card">
              <img src={sketch2} alt="Artemis" />
            </div>
          </div>
          <div>
            <div className="card">
              <img src={sketch5} alt="Aphrodite" />
            </div>
          </div>
          <div>
            <div className="card">
              <img src={sketch3} alt="Eurydice" />
            </div>
          </div>
          <div>
            <div className="card">
              <img src={sketch4} alt="Zagreus and Duca" />
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
