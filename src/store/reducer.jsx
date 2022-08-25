const defaultState = {
  photo: [],
  currentPage: 1
}

export const reducer = (state=defaultState, action) => {
    switch (action.type) {
      case 'GET_PHOTO':
        return {
          ...state, 
            photo: [...state.photo, ...action.photos],
            currentPage: state.currentPage + 1
        }
      case 'TOGGLE_LIKE':
        const dataPhoto = [...state.photo];
        const indexArr = dataPhoto.findIndex(item => item.id === action.id);
        dataPhoto[indexArr].isLiked = !dataPhoto[indexArr].isLiked;

        dataPhoto[indexArr].isLiked ? dataPhoto[indexArr].likes++ : dataPhoto[indexArr].likes--;
        return {
          ...state,
            photo: dataPhoto
        }
      default:
        return state;
    }
  
  }

  

  