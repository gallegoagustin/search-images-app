import React from 'react';
import { connect } from 'react-redux';
import { removeImageFavorites } from '../redux/actions'
import './Favorites.css';

function Favorites(props) {
    return (
        <div className="favHeaderContainer">
            <div className="favsHeader">Your favorites</div>
            <hr id="favSeparator"/>
                {props.favorites.length === 0 ? <div className="emptyFavs"><p>You have no favorites yet</p></div> : 
                    <div>
                            <div className="favsContainer">{props.favorites.map(img => 
                                <div className="favCardColumn">
                                    <img className='preview' src={img.preview}/>
                                    <div className="favCardRow">
                                        <a target="_blank" href={img.large}><button><a className="buttonText">Open</a></button></a>
                                        <button onClick={() => props.removeImageFavorites(img.id)}
                                        ><a className="buttonText">Remove</a></button>
                                    </div>
                                </div>)}
                            </div>
                    </div>
                }
        </div>
    );
}

function mapStateToProps(state) {
    return {
      favorites: state.imagesFavorites
    };
}

function mapDispatchToProps(dispatch) {
    return {
        removeImageFavorites: (id) => dispatch(removeImageFavorites(id)),
    };
}
  
export default connect(mapStateToProps, mapDispatchToProps)(Favorites);