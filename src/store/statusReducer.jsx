const defaultState = {
  isFetching: false,
  photoDetailStatus : false
}

  
export const statusReducer = (state=defaultState, action) => {
    switch (action.type) {
        case 'TOGGLE_IS_PHOTO_DETAIL_STATUS' : 
            return {
              ...state, 
                photoDetailStatus: !state.photoDetailStatus
            }
        case 'TOGGLE_IS_FETCHING' : {
            return {
                ...state,
                isFetching: !state.isFetching
            }
        }
            
            
      default:
        return state;
    }
  }