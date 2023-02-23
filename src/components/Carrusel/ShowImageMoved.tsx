import React from 'react'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import dog1 from '../../images/black-dog.jpg'
import dog2 from '../../images/banner.webp'
import dog3 from '../../images/dogi.webp'
const spanStyle = {
  padding: '20px',
  background: '#efefef',
  color: '#000000'
}

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '400px',
  borderRadius: '5px' 
}
const slideImages = [
  {
    url: dog1,
    caption: 'Slide 1'
  },
  {
    url: dog2,
    caption: 'Slide 2'
  },
  {
    url: dog3,
    caption: 'Slide 3'
  },
];

const arrowStyles = {
    display: 'none'
  };

const ShowImageMoved = () => {
  return (
    <div className="slide-container">
        <Slide duration={2000}  prevArrow={<div style={arrowStyles}></div>}
         nextArrow={<div style={arrowStyles}></div>}>
         {slideImages.map((slideImage, index)=> (
            <div key={index}>
              <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
                
              </div>
            </div>
          ))} 
        </Slide>
      </div>
  )
}

export default ShowImageMoved