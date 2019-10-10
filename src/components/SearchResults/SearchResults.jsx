
import React from 'react';
import './SearchResults.css';

const SearchResults = (props) => {
let results = '';
if (props.result.results) {
results = props.result.results.map((result) => (
    <div className="anime">
        <div className="anime-thumbnail-container">
            <img className="anime-thumbnail zoom zoom:hover" src={`${result.thumbnail.path}.${result.thumbnail.extension}`} alt="thumbnails" />
        </div>
        <div className="anime-details">
            <h6>{result.title}</h6>
            <p className="description">Description: </p>
            <p>Title: {result.title}</p>
            <p>Synopsis: {result.synopsis}</p>
            <button onClick={(e) => props.handleAddAnime(e, result)}>ADD</button>
        </div>
    </div>        
))
}
return (
        <div>
            <section>
                { results }
            </section>
        </div>
    )
}
        
export default SearchResults;