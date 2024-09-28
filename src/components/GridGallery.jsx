// import { Gallery } from "react-grid-gallery";
 
// const IMAGES = [
//    {
//       src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
//       width: 320,
//       height: 174,
//       isSelected: true,
//       caption: "After Rain (Jeshu John - designerspics.com)",
//    },
//    {
//       src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
//       width: 320,
//       height: 212,
//       tags: [
//          { value: "Ocean", title: "Ocean" },
//          { value: "People", title: "People" },
//       ],
//       alt: "Boats (Jeshu John - designerspics.com)",
//    },
//    {
//       src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
//       width: 320,
//       height: 212,
//    },
// ];
// const images = IMAGES.map((image) => ({
//   ...image,
//   customOverlay: (
//     <div className="custom-overlay__caption">
//       <div>{image.caption}</div>
//       {image.tags &&
//         image.tags.map((t, index) => (
//           <div key={index} className="custom-overlay__tag">
//             {t.title}
//           </div>
//         ))}
//     </div>
//   ),
// }));

// export default function GridGallery() {
//   return (
//     <div>
//       <Gallery images={images} enableImageSelection={false} />
//     </div>
//   );
// }






// import { useState } from "react";
// import { Gallery } from "react-grid-gallery";
// import Lightbox from "react-image-lightbox";
// import "react-image-lightbox/style.css";
// import { images } from "./images";

// export default function App() {
//   const [index, setIndex] = useState(-1);

//   const currentImage = images[index];
//   const nextIndex = (index + 1) % images.length;
//   const nextImage = images[nextIndex] || currentImage;
//   const prevIndex = (index + images.length - 1) % images.length;
//   const prevImage = images[prevIndex] || currentImage;

//   const handleClick = (index) => setIndex(index);
//   const handleClose = () => setIndex(-1);
//   const handleMovePrev = () => setIndex(prevIndex);
//   const handleMoveNext = () => setIndex(nextIndex);

//   return (
//     <div>
//       <Gallery
//         images={images}
//         onClick={handleClick}
//         enableImageSelection={false}
//       />
//       {!!currentImage && (
//         /* @ts-ignore */
//         <Lightbox
//           mainSrc={currentImage.original}
//           imageTitle={currentImage.caption}
//           mainSrcThumbnail={currentImage.src}
//           nextSrc={nextImage.original}
//           nextSrcThumbnail={nextImage.src}
//           prevSrc={prevImage.original}
//           prevSrcThumbnail={prevImage.src}
//           onCloseRequest={handleClose}
//           onMovePrevRequest={handleMovePrev}
//           onMoveNextRequest={handleMoveNext}
//         />
//       )}
//     </div>
//   );
// }

// import React from 'react'
// import PhotoAlbum from "react-photo-album";
// import photos from './images';

// import Lightbox from "yet-another-react-lightbox";
// import Header from './Header';

  
// const GridGallery = () => {
//     const [index, setIndex] = React.useState(-1);

//   return (
//     <>
//     <Header/>
//     <div style={{marginTop:"120px",marginLeft:"50px",marginBottom:"60px"}}>
//        <h1 style={{fontSize:"30px"}}>Photos</h1> 
//     </div>
//     <PhotoAlbum photos={photos} layout="rows"
//     targetRowHeight={150}
//     onClick={({ index: current }) => setIndex(current)}
//     />
//         <br></br>
//         <br></br>

//       <PhotoAlbum photos={photos} layout="rows"
//     targetRowHeight={150}
//     onClick={({ index: current }) => setIndex(current)}
//     />
//     <br></br>
//     <br></br>
//     <br></br>

//       <PhotoAlbum photos={photos} layout="rows"
//     targetRowHeight={150}
//     onClick={({ index: current }) => setIndex(current)}
//     />
//         <br></br>
//         <br></br>

//       <PhotoAlbum photos={photos} layout="rows"
//     targetRowHeight={150}
//     onClick={({ index: current }) => setIndex(current)}
//     />
//     {/* <Lightbox
//         index={index}
//         slides={photos}
//         open={index >= 0}
//         close={() => setIndex(-1)
            
//         } */}
        
//       {/* /> */}
//     </>
//   )
// }

// export default GridGallery

import React from 'react';
import PhotoAlbum from 'react-photo-album';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css'; // Make sure to import the Lightbox styles
import Header from './Header';
import photos from '../constants/photos';

const GridGallery = () => {
  const [index, setIndex] = React.useState(-1);

  return (
    <>
      <Header />
      <div style={{ marginTop: '120px', marginLeft: '50px', marginBottom: '60px' }}>
        <h1 style={{ fontSize: '30px' }}>Photos</h1>
      </div>
      <div className='ml-7 mr-[-120px] min-[350]:mr-[-50px] sm:mr-[-350px] md:mr-[-470px] '>

      <PhotoAlbum
      
        photos={photos}
        layout="rows"
        targetRowHeight={250}
        // onClick={({ index: current }) => setIndex(current)}
      />
      <br />
      <br />
      <PhotoAlbum
        photos={photos}
        layout="rows"
        targetRowHeight={250}
        // onClick={({ index: current }) => setIndex(current)}
      />
      <br />
      <br />
      <br />
      
      <br />
      <br />
      
      <Lightbox
        index={index}
        slides={photos}
        open={index >= 0}
        close={() => setIndex(-1)}
      />
        </div>
    </>
  );
};

export default GridGallery;
