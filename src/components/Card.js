import React from 'react';
import { connect } from 'react-redux';
import { addImageFavorites } from '../redux/actions'
import './Card.css';

function Card(props) {
    return (
        <div className='cardContainer'>
            <img className='preview' src={props.preview}/>
            <p>Downloads: {props.downloads}</p>
            <a href={props.largeImageURL} target="_blank"><button className="buttonText">Open</button></a>
            <button id="addFavButton" className="buttonText"
                onClick={() => props.addImageFavorites({id: props.id, preview: props.preview, large: props.largeImageURL})}
            >Add to favorites</button>
        </div>
    );
}

function mapStateToProps(state) {
    return {
      images: state.imagesLoaded
    };
}

function mapDispatchToProps(dispatch) {
    return {
        addImageFavorites: (img) => dispatch(addImageFavorites(img)),
    };
}
  
export default connect(mapStateToProps, mapDispatchToProps)(Card);