import React from 'react';
import './SearchResults.css';

const SearchResults = (props) => {
    let results = '';
    if (props.result.characters) {
        results = props.result.characters.map((result) => (
            <div className="anime">
                <div className="anime-thumbnail-container">
                    <img className="anime-thumbnail zoom zoom:hover" src={`${result.image_url}`} alt="thumbnails" />
                </div>
                <div className="anime-details">
                    <h6>{result.name}</h6>
                    <p className="description">Description: </p>
                    <p>Role: {result.role}</p>
                    <button onClick={(e) => props.handleAddAnime(e, result)}>Add to Collection</button>
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

