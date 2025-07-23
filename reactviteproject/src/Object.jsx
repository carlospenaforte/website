import React, {useState} from "react";

function Object(){

    const [car, setCar] = useState({
        year: 2024, make: "Ford", model: "Ka"
    });

    function handleYearChange(event){
        
    }

    return(<div>
        <p>Your favorite car is: {car.make}, {car.model}, {car.year}</p>

        <input type="number" value={car.year}/><br/>
        <input type="text" value={car.make}/><br/>
        <input type="text" value={car.model}/><br/>    
    </div>);

}

export default Object