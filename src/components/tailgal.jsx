import React from "react";
const ImageReact = () => {
  return (
    <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-24 flex items-center">
      <div className="-m-1 flex flex-row sm:flex-wrap md:-m-2">
        <div className="flex w-full sm:w-1/2 flex-wrap lg:flex-row flex-row-reverse">
          <div className="w-full lg:w-1/2 p-1 md:p-2">
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg 2xl:rounded-2xl object-cover object-center"
              src="https://www.tailwindtap.com/assets/components/gallery/image1.jpg"
            />
          </div>
          <div className="w-full lg:w-1/2 p-1 md:p-2">
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg 2xl:rounded-2xl object-cover object-center"
              src="https://www.tailwindtap.com/assets/components/gallery/image2.jpg"
            />
          </div>
          <div className="w-full p-1 md:p-2">
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg 2xl:rounded-2xl object-cover object-center max-h-none lg:max-h-[1000px]"
              src="https://www.tailwindtap.com/assets/components/gallery/image7.jpg"
            />
          </div>
        </div>
        <div className="flex w-full sm:w-1/2 flex-wrap">
          <div className="w-full p-1 md:p-2">
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg 2xl:rounded-2xl object-cover object-center"
              src="https://www.tailwindtap.com/assets/components/gallery/image9.jpg"
            />
          </div>
          <div className="w-1/2 p-1 md:p-2">
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg 2xl:rounded-2xl object-cover object-center"
              src="https://www.tailwindtap.com/assets/components/gallery/image4.jpg"
            />
          </div>
          <div className="w-1/2 p-1 md:p-2">
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg 2xl:rounded-2xl object-cover object-center"
              src="https://www.tailwindtap.com/assets/components/gallery/image6.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ImageReact;
