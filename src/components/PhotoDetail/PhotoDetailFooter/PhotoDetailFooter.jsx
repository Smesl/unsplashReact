import React from 'react'
import styles from '../../MyModal/PhotoDetail.module.css'

const PhotoDetailFooter = (props) => {
    console.log(props)
    const { photoDetailFooter, photoDetailFooter_img, photoDetailFooter_author } = styles;
   
  return (
    <footer className={ photoDetailFooter}>
    <a href={ props.authorProfileLink } rel='noopener noreferrer' target='_blank'> 
        <span className={ photoDetailFooter_img}>
            <img src={props.authorProfileAvatar} alt='Фото профиля'/> 
        </span> 
        <div className={ photoDetailFooter_author}>
          <span>{props.authorName}</span>
          <span>{props.createdPhoto}</span>
        </div>
      </a>
    </footer>
  )
}

export default PhotoDetailFooter