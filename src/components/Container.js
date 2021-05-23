import React from 'react';
import { connect } from 'react-redux';
import Search from './Search';
import EmptyLanding from './EmptyLanding';
import Images from './Images';
import './Container.css';

function Container(props) {
    return (
        <div>
            {<Search />}
            {props.images.length === 0 ? <EmptyLanding /> : <Images />}
        </div>
    );
}

function mapStateToProps(state) {
    return {
      images: state.imagesLoaded
    };
}
  
export default connect(mapStateToProps, null)(Container);