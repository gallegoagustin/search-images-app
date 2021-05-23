import React from 'react';
import { connect } from 'react-redux';
import { getImages } from '../redux/actions'
import swal from 'sweetalert';
import './Search.css'

function Search(props) {

    const [input, setInput] = React.useState("");

    function handleChange (event) {
        setInput(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault();
        if(input.length === 0) {
            swal("Please enter something")
        } else {
            props.getImages(input);
        }
    }

    return (
        <div className="searchContainer">
            <form className="searchForm"
                onSubmit={(e) => {handleSubmit(e)}}
            >
                <input id='textInput' 
                    type="text" 
                    placeholder="Example: Red cars"
                    value={input}
                    onChange={(e) => {handleChange(e)}}
                >
                </input>
                <button className="buttonText" id='searchButton' type="submit">Search</button>
            </form>
        </div>
    );
}

function mapDispatchToProps(dispatch) {
    return {
      getImages: (input) => dispatch(getImages(input)),
    };
  }
  
export default connect(null, mapDispatchToProps)(Search);