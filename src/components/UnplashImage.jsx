import React, { useEffect, useState } from 'react';
import Im from './Image.module.css'
import cl from './MyModal/MyModal.module.css'
import {ACCESS_KEY } from '../API/PhotoApi';
import { useHistory, Link } from 'react-router-dom';
import MyModal from '../containers/PhotoDetailContainer/PhotoDetailContainer';
import { useQueryParams } from '../hooks/useQueryParams';
import { useLocation } from "react-router"
import { useDispatch, useSelector } from 'react-redux';
import togglePhotoStatus from '../actions.js'
import { photosDataNormalize } from '../supportFunc';
import UnplashImageBody from './UnsplashImageBody'

const UnplashImage = ({photo}) => {
  // console.log(photo)
  const {photoImgSmall, photoImgThumb, id} = photo;
  const dispatch = useDispatch() 

  return (
      <li className={cl.listItem} >
        <UnplashImageBody photoImgThumb={photoImgThumb} id={id}  />
      </li>
      
  )
}

export default UnplashImage;
