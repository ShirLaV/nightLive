import React from 'react'
import { useState, useEffect } from 'react'
import { barService } from '../services/bar-service'
import { BarPreview } from '../cmps/bar-preview'

export const HomePage = () => {
    const [bars, setBars] = useState(null)

    useEffect(() => {
        if (!bars) {
            const bars = barService.getBars()
            setBars(bars)

        } else {
            console.log('bars have changed')
        }
    }, [bars])

    return (
        <section className="home-page">
            {bars && <div className="bars-list-container">
                <div className="list-header flex space-between">
                    <h1>מומלצים עבורי</h1>
                    <h2>מקומות נוספים</h2>
                </div>
                <div className="bar-list">
                    {bars.map(bar => <BarPreview bar={bar} />)}
                </div>
            </div>
            }
            <div className="around-list"></div>
            <div className="visited-list"></div>
        </section>
    )
}
