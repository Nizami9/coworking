import React from 'react';
import ImageUploading from "react-images-uploading";
import './profileStyle.css'

function ImageUploader() {

    const [images, setImages] = React.useState([]);
 
    const onChange = (imageList, addUpdateIndex) => {
         // data for submit
    console.log("image list",imageList);
    setImages(imageList);
  };
     
  return (
    <div>
         <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber='69'
        dataURLKey="data_url"
        acceptType={["jpg","png","webp"]}
      >
        {({
          imageList,
          onImageUpload,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps
        }) => (
          // write your building UI
          <div className="upload__image-wrapper">
             <div
              className='profile-photo'
              style={isDragging ? { color: 'red' } : undefined}
              onClick={onImageUpload}
              {...dragProps}
            >
       {    images.length >= 1 ? <img 
            className='profile-img'
            alt='profile photo'
            src={imageList[imageList.length-1].data_url}
            style={{width : '100px'}}
              />  :
              <img 
            className='profile-img'
            alt='prifle-pic-icon'
            src={require('../../icons/profile-icon.png')}
            style={{width : '100px'}}
              />
              }
            <img className='cam-icon' alt='camera-icon' src={require('../../icons/camera.png')} />
         </div>
         </div>
        )}
      </ImageUploading>
    </div>
  )
}

export default ImageUploader

