import {unsplash} from '../API/PhotoApi';
import { API_ROOT, ACCESS_KEY } from '../API/PhotoApi';
import { getPhotoAction, toggleIsFetching, toggleLike } from '../actions';

export const fetchPhoto = (currentPage) => {
    return dispatch => {
        dispatch(toggleIsFetching());
        unsplash.photos.listPhotos(currentPage, 10, 'latest')
            .then(res => res.json())
            .then(photos => dispatch(getPhotoAction(photos)))
            .catch((error) => {console.log(`ОШИБКА!!! ${error}`);})
    }
}

export const toggleLikeUser = (id, isLiked) => {
    console.log(id, isLiked, unsplash)
    // console.log(localStorage.getItem('token'))
    const token = localStorage.getItem('token')
    console.log(token)
    unsplash.auth.setBearerToken(token)
    console.log(unsplash)
    return dispatch => {
        (isLiked ? unsplash.photos.unlikePhoto(id) : unsplash.photos.likePhoto(id))
            .then(res => console.log(res.json()))
            .then(() => {dispatch(toggleLike(id))})
            .catch((error) => {console.log(`ОШИБКА!!! ${error}`);})
    }
}


