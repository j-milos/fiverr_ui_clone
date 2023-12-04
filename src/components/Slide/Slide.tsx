import s from "./Slide.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider, { Settings } from "react-slick";

interface SlideProps {
  children: React.ReactNode;
  settings: Settings;
}

const Slide: React.FC<SlideProps> = ({ children, settings }) => {
  const sliderSettings: Settings = {
    dots: false,
    infinite: true,
    speed: 500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    ...settings,
  };

  return (
    <div className={s.slide}>
      <div className={s.container}>
        <Slider {...sliderSettings}>{children}</Slider>
      </div>
    </div>
  );
};

export default Slide;
