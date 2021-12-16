import React from 'react'

import { Switch, Route } from 'react-router'
import {AppHeader} from './cmps/app-header.jsx'
export const RootCmp =() => {
    return (
        <div className="app">
            <AppHeader />
            <main>
                {/* <Switch>

    </Switch> */}
            </main>
        </div>
    )
}