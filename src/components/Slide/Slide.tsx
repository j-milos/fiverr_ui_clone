import s from "./Slide.module.scss"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import CatCard from "../catCard/CatCard";
import { cards } from "../../data";



const Slide = ({children,slidesToShow,slidesToScroll}) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToScroll
  };
  return (
    <div className={s.slide}>
        <div className={s.container}>
        <Slider {...settings}>
          {children}
        </Slider>
        </div>
        </div>
  );
};

export default Slide