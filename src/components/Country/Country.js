import React from 'react';
import './Country.css'

const Country = (props) => {
    // console.log(props.country)
    const { name, population, capital, area, flags } = props.country
    return (
        <div className='country-style'>
            <h2>{name.common}</h2>
            <img className='image' src={flags.png} alt="" />
            <p>Population : {population} </p>
            <p>Capital : {capital} </p>
            <p>Area : {area} </p>
        </div>
    );
};

export default Country;