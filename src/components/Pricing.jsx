import Section from "./Section";
import { smallSphere, stars } from "../assets";
import Heading from "./Heading";
import PricingList from "./PricingList";
import { LeftLine, RightLine } from "./design/Pricing";
import ImageReact from "./tailgal";
import GalleryComponent from "./gallerypop";

import pic1 from "../assets/csi-photos-events/goodpic1.jpg"
import pic2 from "../assets/newfinalpicsdownload/CopyofIMG_2625.jpg";
import pic5 from "../assets/csi-photos-events/goodpic3.jpg";
import pic4 from "../assets/csi-photos-events/goodpic4.jpeg";
import pic3 from "../assets/csi-photos-events/goodpic5.jpeg";
import pic6 from "../assets/csi-photos-events/goodpic6.jpeg";
import pic7 from "../assets/csi-photos-events/goodpic8.jpg";
import pic8 from "../assets/Final-jpeg-44-pics/Copy of IMG_0707.jpg";
import pic9 from "../assets/Final-jpeg-44-pics/Copy of IMG_6571.jpg";
const data = [{
	id: 1,
	name: "Island",
	image: pic1
}, {
	id: 2,
	name: "Forest",
  image : pic2
}, {
	id: 3,
	name: "Whale",
  image : pic3
}, {
	id: 4,
	name: "Mountain",
  image : pic4
}, {
	id: 5,
	name: "Boat",
  image : pic5
}, {
	id: 6,
	name: "Flowers",
  image : pic6
}, {
	id: 7,
	name: "Fire",
  image : pic7
}, {
	id: 8,
	name: "Garden",
  image : pic8
}, {
	id: 9,
	name: "Bridge",
  image : pic9
}];

const Pricing = () => {
  return (
    <Section className="overflow-hidden pt-[-3100px]" id="pricing">
      <div className="container relative z-2">
        <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
         
          <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <img
              src={stars}
              className="w-full"
              width={950}
              height={400}
              alt="Stars"
            />
          </div>
        </div>

         {/* <Heading
          tag="Connect with us"
          title="Contact Us"
        />  */}

        <div className="relative">
        </div>

        <div className="flex justify-center mt-10">
          <a
            className="text-xs font-code font-bold tracking-wider uppercase border-b"
            href="/pricing"
          >
            
          </a>
        </div>
        <div className="flex mt-[30px] bg-red-200">
          <GalleryComponent data={data}/>
</div>
      </div>
    </Section>
  );
};

export default Pricing;
