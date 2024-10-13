import React from 'react';
import PhotoAlbum from 'react-photo-album';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css'; // Make sure to import the Lightbox styles
import photos from '../../constants/photos';

const GridGallery = () => {
  const [index, setIndex] = React.useState(-1);

  return (
    <>

      {/* Title Section */}
      <div className='mt-[120px] ml-[30px] mb-[60px]'>
        <h1 className='text-[30px]'>Photos</h1>
      </div>

      {/* Gallery Section */}
      <div className='ml-2 sm:ml-0 sm:mr-0 md:mx-auto'>

        {/* First PhotoAlbum */}
        <PhotoAlbum
          photos={photos}
          layout="rows"
          targetRowHeight={250}
        />
        <br /><br />

        {/* Second PhotoAlbum */}
        <PhotoAlbum
          photos={photos}
          layout="rows"
          targetRowHeight={250}
        />
        <br /><br /><br />

        {/* Lightbox */}
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
