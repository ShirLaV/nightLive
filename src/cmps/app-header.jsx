import {React, useEffect} from 'react'
import { BiSearch } from 'react-icons/bi'
import { BiStar } from 'react-icons/bi'
import { BiUser } from 'react-icons/bi'
import Logo from '../assets/imgs/logo.JPG'

import { barService } from '../services/bar-service'

export const AppHeader = () => {
    const iconStyle = { color: "white", height: '100%', 'font-size': '40px', 'font-weight': '400' }
    useEffect(()=>{
        const bars = barService.getBars();
        console.log(bars)
    }, [])
    return (
        <header className="app-header flex space-between">
            <div className="left-icons flex">
                <span class="nav-icon">
                    <BiSearch style={iconStyle} />
                </span>
                <span class="nav-icon">
                    <BiStar style={iconStyle} />
                </span>
            </div>
            <div className="logo-container">
                <img src={Logo} />
            </div>
            <span className="right-icon">
                <BiUser style={iconStyle} />
            </span>
        </header>
    )

}