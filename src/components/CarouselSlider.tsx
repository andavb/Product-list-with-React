import { Carousel } from 'react-bootstrap';

function CarouselSlider() {
  return (
    <div className="carousel-slider">
      <Carousel controls={false}>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100 h-20"
            src="SaleBanner.png"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src="SaleBanner.png"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="SaleBanner.png"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselSlider;
