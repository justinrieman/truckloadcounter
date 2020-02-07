import React from 'react';

function Header(props) {


    return (
        <div className="header">
            <button className="btn-stats">View Stats</button>
            <button onClick={props.expand} className="btn-truck"> + Add Truck</button>
        </div>
        
    )
}

export default Header;