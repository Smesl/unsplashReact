import React from 'react'

const PhotoDetailBody = ({photoImgThumb}) => {
  return (
    <span>
      <img
          src={ photoImgThumb }
          alt='Изображение'
      />
  </span>
  )
}

export default PhotoDetailBody