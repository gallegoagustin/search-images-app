import swal from 'sweetalert';

export const GET_IMAGES = 'GET_IMAGES';
export const ADD_FAVORITES = 'ADD_FAVORITES';
export const REMOVE_FAVORITES = 'REMOVE_FAVORITES';

export function getImages(image) {
    return function(dispatch) {
        const key = "20995712-cc56bae9c48f5878a6a9bf48b"
        return fetch(`https://pixabay.com/api/?key=${key}&q=${image}&per_page=50&image_type=photo`)
            .then(response => response.json())
            .then((json) => {
                if(json.hits.length > 0) {
                    dispatch({ type: GET_IMAGES, payload: json });
                } else {
                    swal("We could not find any image")
                }
                
        });
    }
}

export function addImageFavorites(image) {
    return {
        type: ADD_FAVORITES,
        payload: image
    }
}

export function removeImageFavorites(id) {
    return {
        type: REMOVE_FAVORITES,
        payload: id
    }
}