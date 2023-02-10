import Slider from "react-slick";
import { data } from "../../data/data";
import "./Slider.css";

const Slide = ({ sliderData }) => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <section className="slider d-flex">
      <div className="container">
        <div className="slider-image">
          <Slider {...settings}>
            {sliderData.map((item) => (
              <div className="hover-text-one">
                <figure className="effect-text-one">
                  <img src={item.img} alt="" />
                  <figcaption>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </p>
                  </figcaption>
                </figure>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};
export default Slide;
