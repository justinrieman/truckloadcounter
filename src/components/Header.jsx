import React , { useState } from 'react';
import BackdropUI from './BackdropUI';

function Header(props) {


    const [open, setOpen] = useState(false)

    function closeBackdrop () {
        setOpen(false)
    }

    function openBackdrop () {
        setOpen(!open);
    }

    return (
        <div>
            <div className="header">
                <button onClick={openBackdrop} className="btn-stats">View Stats</button>
                <button onClick={props.expand} className="btn-truck"> + Add Truck</button>
            </div>

            <BackdropUI 
            isOpen={open}
            closeBackdrop={closeBackdrop}
            truckList={props.truckList}
            />
        </div>
       
        
    )
}

export default Header;