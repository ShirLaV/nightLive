import React, { useEffect, useState } from 'react'

import { barService } from '../services/bar-service'


export const BarDetails = () => {
    const [bar, setBar] = useState(null)

    //Mounted
    useEffect(() => {
        const {barId} = this.props.match.params
        const bar = barService.getBarById(barId);
        setBar(bar)
    }, [])
    
    return (
        <section className="bar-details">
            {bar && <pre>
                {bar}
            </pre>}
        </section>
    )
}