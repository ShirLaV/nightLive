import React from 'react'
import barImg from '../assets/imgs/bar.jpg'


export const BarPreview = ({ bar }) => {
    console.log(bar)
    return (
        <section className="bar-preview" >
            <div className="bar-logo">
                <img src={barImg} alt="Bar Image" />
                <div className="bar-rate">{bar.rate}</div>
            </div>
            <div className="bar-info">
                <h1>{bar.name}</h1>
                <p>{bar.description}</p>
                <p>{bar.location}</p>
            </div>
        </section>
    )
}
