import { GET_IMAGES, ADD_FAVORITES, REMOVE_FAVORITES } from './actions';

const initialState = {
    imagesLoaded: [],
    imagesFavorites: []
};

export default function rootReducer (state = initialState, action) {
    switch (action.type) {
        case GET_IMAGES:
            return {
                ...state,
                imagesLoaded: action.payload.hits
            }
        case ADD_FAVORITES:
            return {
                ...state,
                imagesFavorites: state.imagesFavorites.filter(img => img.id !== action.payload.id).concat(action.payload)
            }
        case REMOVE_FAVORITES:
            return {
                ...state,
                imagesFavorites: state.imagesFavorites.filter(img => img.id !== action.payload)
            }
        default:
            return state;
    }
}