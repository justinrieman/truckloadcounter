import React, { useState } from 'react';

function TruckForm(props) {

    const [truck, setTruck] = useState({
        title: '',
        color: '',
        license: ''
    });

    function handleInput(event) {
        
        const { name, value } = event.target 

        setTruck(prevTruck => {
            return ({
                ...prevTruck,
                [name] : value
            });
        });
    }


    function submitTruck(event) {
        event.preventDefault();
        props.onAdd(truck);

        setTruck({
            title: '',
            color: '',
            license: ''
        })
    }

    return (
        <div>
            <form className="truck-form">
                <input 
                    onChange={handleInput}
                    name="title"
                    placeholder="Title"
                    autoComplete="off"
                    value={truck.title}
                /> <br/>
                <input 
                    onChange={handleInput}
                    name="color"
                    placeholder="Truck Color"
                    autoComplete="off"
                    value={truck.color}
                /> <br/>
                <input
                    onChange={handleInput}
                    name="license"
                    placeholder="License No."
                    autoComplete="off"
                    value={truck.license}
                />
                <button className="form-close">Close</button>
                <button onClick={submitTruck} className="form-add">Add</button>
            </form>
        </div>
    )
}

export default TruckForm;