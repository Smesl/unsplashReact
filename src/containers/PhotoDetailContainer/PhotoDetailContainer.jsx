import React, { useEffect, useState } from 'react';
import {connect} from 'react-redux'
import { withRouter } from 'react-router';
import { compose } from 'redux';
import {togglePhotoDetailStatus} from '../../actions'
import {toggleLikeUser} from '../../asyncActions/GetPhoto'
import PhotoDetail from '../../components/PhotoDetail/PhotoDetail';
import styles from '../../components/MyModal/PhotoDetail.module.css'

const PhotoDetailContainer = (props) => {
  console.log(props)
  const {dataPhoto, photos, photoDetailStatus, togglePhotoDetailStatus, toggleLikeUser} = props;
  console.log(photos)
  console.log(photoDetailStatus)
  const photoId = photos.match.params.id;
  console.log(photoId)
  const photo = dataPhoto.photo.filter(p => p.id === photoId);
  console.log(photo)

  const { photoDetailContainerWrapper, photoDetailContainer } = styles;

  return (
          <PhotoDetail className={ photoDetailContainerWrapper } 
            photo={ photo } 
            photoDetailStatus = { photoDetailStatus } 
            togglePhotoDetailStatus={togglePhotoDetailStatus} 
            toggleLikeUser = { toggleLikeUser }
          />
            
  )
}

const mapStateToProps = (state) => {
  return {
      dataPhoto: state.photos,
      photoDetailStatus: state.status.photoDetailStatus
  }
};

// export default PhotoDetailContainer
export default compose(withRouter, connect(mapStateToProps, {toggleLikeUser, togglePhotoDetailStatus}))(PhotoDetailContainer);