import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, boxes }) => {

  let boundingBoxes = [];
  if(boxes !== undefined)
  {
    boundingBoxes = boxes.map((box) => (
      <div className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
    ))
  }else{console.log('why is it undefined')}

  return (
    <div className='center ma'>
      <div className='absolute mt2'>
        <img id='inputimage' alt='' src={imageUrl} width='500px' heigh='auto'/>
        {
          boundingBoxes
        }
      </div>
    </div>
  );
}

export default FaceRecognition;