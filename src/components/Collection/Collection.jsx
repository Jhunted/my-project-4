import React from 'react';
import './Collection.css';

const Collection = (props) => {      

let collection = props.collection.map((collection) => (
    <div className="anime">
        <div className="anime-thumbnail-container">
        </div>
        <div className="anime-details">
            <h5>{collection.title}</h5>
            <p>Description:</p>
            <p>Title: {collection.title}</p>
            <p>Synopsis: {collection.synopsis}</p>
            <button onClick={(e)=>props.handleDelAnime(e, collection) }>DELETE</button>
        </div>
    </div>        
))

    return (
        <div className="collection">
                <h3>Collection</h3>
            <section>
                { collection }
            </section>
        </div>
    )
}
export default Collection;