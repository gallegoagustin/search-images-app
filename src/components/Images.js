import React from 'react';
import Card from './Card';
import { connect } from 'react-redux';
import './Images.css';

function Images(props) {
    return (
        <div className='cardsContainer'>
           {props.images.map(e => <Card preview={e.previewURL} downloads={e.downloads} largeImageURL={e.largeImageURL} id={e.id}/>)}
        </div>
    );
}

function mapStateToProps(state) {
    return {
      images: state.imagesLoaded
    };
}
  
export default connect(mapStateToProps, null)(Images);