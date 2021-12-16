import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

import { barService } from '../services/bar-service'


export const BarDetails = () => {
    const [bar, setBar] = useState(null)

    const { barId } = useParams()
    //Mounted
    useEffect(() => {
        const bar = barService.getBarById(barId);
        console.log('bar', bar)
        setBar(bar)
    }, [])

    return (
        <section className="bar-details">
            <h1>Bar details</h1>
            {/* <BarHero /> */}
        </section>
    )
}