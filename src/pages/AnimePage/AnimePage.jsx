
import React from 'react';
import { Link } from 'react-router-dom';
import getAnime from '../../services/api';


const AnimePage = (props) => {
    return (
      <div className="AnimePage">
          <h1>Anime Page</h1>
        {/* <NavBar
          user={props.user}
          handleLogout={props.handleLogout}
        /> */}
      </div>
        );
    };

    export default AnimePage;