import React from 'react';
// import React from 'react';
import './Collection.css';

const Collection = (props) => {             
    // let collection = [];
    // if (props.collection) {
        console.log("porp",props.collection);
       let collection = props.collection.map((collection) => (

            <div className="comic">
                <div className="comic-thumbnail-container">
                     <img className="comic-thumbnail" 
                     src={`${collection.image_url}`} 
                    alt="thumbnail" />
                </div>
                <div className="comic-details">
                    <h5>{collection.name}</h5>
                    <p>Role: {collection.role}</p>
                    {/* <button onClick={(e)=>props.handleDelAnime(e, collection) }>Remove from Collection</button> */}
                </div>
            </div>        
        ))
    // }

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
        