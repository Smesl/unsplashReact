import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import UnsplashImage from '../../components/UnplashImage'
import {fetchPhoto} from '../../asyncActions/GetPhoto'
import { useDispatch, useSelector } from 'react-redux';
import styles from '../../components/MyModal/PhotoDetail.module.css'
import InfiniteScroll from "react-infinite-scroller";
import { createRef } from 'react';
  
class Photo extends React.Component {
    constructor(props) {
        super(props);
        this.lastElement = createRef();
    }


    render () {
        console.log(this.lastElement)
        const { dataPhoto, toggleLikeUser, getPhoto, currentPage, isFetching, fetchPhoto} = this.props;
        const {photoList, photoContainer} = styles;
        console.log(this.props)
        return (
            <div className={photoContainer}>
        {/* <InfiniteScroll
            loadMore={() => dispatch(fetchPhoto())}
            hasMore={photos ? photos.length > 0 : false}
        > */}
            <button onClick={() => fetchPhoto(currentPage)}>Получить фото</button>
            <ul className={photoList}>
                {dataPhoto.map((photo) => 
                    <UnsplashImage photo={photo}  key={photo.id}  />,
                )}
            </ul>
            {/* </InfiniteScroll> */}
                {/* <button ref={this.lastElement} >Получить фото</button> */}
        </div>
        )
        
    }
}

const mapStateToProps = (state) => {
    return {
        dataPhoto: state.photos.photo,
        currentPage: state.photos.currentPage,
        isFetching: state.status.isFetching
    }
};

export default connect(mapStateToProps, {fetchPhoto})(Photo);

