import React, { useEffect, useState } from 'react'

export const BarHero = ({ bar }) => {
    // const [style, useStyle] = useState({})
    const style = { backgroundImage: `url(${bar.imgs[0]})` }

    const getFormatedAdress = () => {
        const { adress } = bar
        return adress.street + ' ' + adress.number + ', ' + adress.city
    }
    
    return <section className="bar-hero flex column align-center" style={style}>
        <div className="logo" style={{ backgroundImage: `url(${bar.logo})` }} ></div>
        <h1 className="bar-title">{bar.name}</h1>
        <p>{getFormatedAdress()}</p>
    </section>
}


