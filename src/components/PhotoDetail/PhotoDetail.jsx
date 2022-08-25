import React from 'react'
import PhotoDetailBody from './PhotoDetailBody/PhotoDetailBody'
import disableScroll from 'disable-scroll';
import { useDispatch, useSelector } from 'react-redux';
import PhotoDetailHeader from './PhotoDetailHeader/PhotoDetailHeader';
import styles from '../MyModal/PhotoDetail.module.css'
import PhotoDetailFooter from './PhotoDetailFooter/PhotoDetailFooter';
import {unsplash, authenticationUrl} from '../../API/unsplashApi';

  class PhotoDetail extends React.Component {
    render() {
      console.log(unsplash)
      const { photoDetailContainerWrapper, photoDetailContainer } = styles;
      console.log(this.props)
      const {photo , togglePhotoDetailStatus, photoDetailStatus, toggleLikeUser} = this.props;
      console.log(photo)
      console.log(photoDetailStatus)
      const {photoImgThumb, isLiked, id, likes, authorName, createdPhoto, authorProfileLink, authorProfileAvatar} = photo[0];
        return (
          <div className={ photoDetailContainerWrapper } >
              <PhotoDetailHeader  isLiked={ isLiked } id={ id } likes={ likes } toggleLikeUser={toggleLikeUser} />
              <PhotoDetailBody photoImgThumb={photoImgThumb}  />
              <PhotoDetailFooter authorProfileLink={ authorProfileLink } authorName={ authorName } createdPhoto={ createdPhoto } authorProfileAvatar={ authorProfileAvatar } />                         
          </div>
        )
    }
}

export default PhotoDetail