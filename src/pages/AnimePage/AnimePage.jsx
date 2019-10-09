
import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';


const AnimePage = (props) => {
    return (
      <div className="AnimePage">
        <NavBar
          user={props.user}
          handleLogout={props.handleLogout}
        />
      </div>
        );
    };