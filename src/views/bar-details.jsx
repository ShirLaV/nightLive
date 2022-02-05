import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

import { BarHero } from '../cmps/bar-hero.jsx'

import { barService } from '../services/bar-service.js'


export const BarDetails = () => {
    const [bar, setBar] = useState(null)

    const { barId } = useParams()
    //Mounted
    useEffect(() => {
        const bar = barService.getBarById(barId);
        console.log('bar', bar)
        setBar(bar)
    }, [])
    if (!bar) return <></>
    return (
        <section className="bar-details">
            <BarHero bar={bar}/>
        </section>
    )
}