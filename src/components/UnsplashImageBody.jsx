import React, { useEffect, useState } from 'react';
import styles from './Image.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const UnplashImageBody = ({photoImgThumb, id}) => {
  // console.log(photoImgThumb)
  
  const {UnsplashImg} = styles;
   
  return (
        <div className={UnsplashImg}>
          <Link to={`${id}`} ><img  src={photoImgThumb} alt='Изображение' /> </Link>  
        </div>        
  )
}

export default UnplashImageBody