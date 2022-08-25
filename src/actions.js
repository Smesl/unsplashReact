import {photosDataNormalize} from './supportFunc'


export const togglePhotoDetailStatus = () => {
    return {
        type: 'TOGGLE_IS_PHOTO_DETAIL_STATUS'
    }
};

export const toggleIsFetching = () => {
    return {
        type: 'TOGGLE_IS_FETCHING'
    }
};

export const getPhotoAction = (photo) => ({
        type: 'GET_PHOTO', 
        photos: photosDataNormalize(photo)
})

export const toggleLike = (id) => ({
    type: 'TOGGLE_LIKE', 
    id: id
})