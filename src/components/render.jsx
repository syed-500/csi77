import Carousel from "./Carousel";
import img1 from "../assets/services/service-1.png";
import img2 from "../assets/services/service-1.png";
import img3 from "../assets/services/service-1.png";

export default function ImageCarousel() {
  const slides = [img1, img2, img3];

  return (
    <div className="relative">
      <div className="max-w-lg">
        <Carousel autoSlide={true} >
            {slides.map((s)=>(
                <img key={s} src={s}/>
            ))}
        </Carousel>
      </div>
    </div>
  );
}