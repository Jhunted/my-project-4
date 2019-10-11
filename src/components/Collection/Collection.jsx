import React from 'react';
import './Collection.css';

const Collection = (props) => {             
        console.log("porp",props.collection);
       let collection = props.collection.map((collection) => (

            <div className="a">
                <div className="a-thumbnail-container">
                     <img className="a-thumbnail" 
                     src={`${collection.image_url}`} 
                    alt="thumbnail" />
                </div>
                <div className="a-details">
                    <h5>{collection.name}</h5>
                    <p>Role: {collection.role}</p>
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
        