import React from 'react';
import {Link} from 'react-router-dom';

function Nav() {
    const navStyle = {
        display: "flex",
        justifyContent: "space",
        margin: "10px"
    }

    return (
        <div>
            <nav>
            <ul style={navStyle}>
            <Link to="/"><h2>Home</h2></Link>
            <Link to="/titles">
            <h2>Titles</h2></Link>
            <Link to="/summary"><h2>Summary</h2></Link>
            <Link to="/cast"><h2>Cast</h2></Link>
            <Link to="/director"><h2>Director</h2></Link>
            </ul>
           
            {/* <li>Summary</li>
            <li>Cast</li>
            <li>Director</li> */}


        </nav>
        </div>
    );
}

export default Nav;