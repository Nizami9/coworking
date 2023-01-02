import React from 'react';
import ImageUploading from "react-images-uploading";
import './profileStyle.css'

function ImageUploader() {

    const [images, setImages] = React.useState([]);
 
    const onChange = (imageList, addUpdateIndex) => {
         // data for submit
    console.log("image list",imageList[imageList.length-1],"add update index ", addUpdateIndex);
    setImages(imageList[imageList.length-1]);
  };
     
  return (
    <div>
        <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber='70'
        dataURLKey="data_url"
        acceptType={["jpg","png","webp"]}
        className="uploaded-img"
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
            <img 
            className='profile-photo'
              src={require('../../icons/profile-icon.png')}
              style={isDragging ? { color: "red" } : null}
              onClick={onImageUpload}
              {...dragProps}
                />
         
            {/* <button onClick={onImageRemoveAll}>Remove all images</button>*/}
            {/* {imageList.map((image, index) => (
              <div key={index} className="profile-photo">
                <img src={image.data_url} alt="" width="100" />
              </div>
            ))}  */}

            
          </div>
        )}
      </ImageUploading>
      
    </div>
  )
}

export default ImageUploader

