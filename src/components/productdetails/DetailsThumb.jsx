import React from 'react';

import './Detail.css';

const DetailsThumb = ({ indexs, images, setIndex }) => {
  return (
    <div className='thumb'>
      {images?.map((img, index) => (
        <img
          className={indexs === index ? 'image-active' : ''}
          src={img}
          alt=''
          key={index}
          onClick={() => setIndex(index)}
        />
      ))}
    </div>
  );
};
export default DetailsThumb;
