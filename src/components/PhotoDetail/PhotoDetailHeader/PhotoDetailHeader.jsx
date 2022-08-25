import React from 'react'
import styles from '../../MyModal/PhotoDetail.module.css'
import notLike from '../../../img/notLike.svg'
import like from '../../../img/like.svg'

const PhotoDetailHeader = (props) => {
    console.log(props)
    const { id, isLiked, likes, toggleLikeUser} = props;
    const { photoDetailHeader } = styles;
  return (
    <header className={photoDetailHeader}  >
        <img
                src={isLiked ? like : notLike}
                onClick={() => toggleLikeUser(id, isLiked)}
                alt='like Button'
        />
      <span>likes {likes}</span>

    </header>
  )
}

export default PhotoDetailHeader