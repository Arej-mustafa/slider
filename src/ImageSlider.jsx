import React from 'react'
import 'react-slideshow-image/dist/styles.css'
import {Slide } from 'react-slideshow-image'



const slideImages = [
    {
      url: 'https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
      caption: 'Slide 1'
    },
    {
      url: 'https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80',
      caption: 'Slide 2'
    },
    {
      url: 'https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
      caption: 'Slide 3'
    },
  ];

const divStyle ={
    display:'flex',
    alignItems:"center",
    justifyContent:"center",
    height:"400px",
    backgroundSize:'cover'
}
const spanStyle ={
    fontSize:"20px",
    background:"#efefef",
    color:"#000000"
}

function ImageSlider() {
  return (
    <div className='slide-container'>
        <Slide>
            {slideImages.map((image,index) => (
                <div key={index}>
                    <div style={{...divStyle, backgroundImage:`url(${image.url})`}}>
                        <span style={{spanStyle}}>{image.caption}</span>
                    </div>
                </div>
            ))}
        </Slide>
    </div>
  )
}

export default ImageSlider