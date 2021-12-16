import React from 'react'

import { Route, Switch } from 'react-router'
import routes from './routes'
import {AppHeader} from './cmps/app-header.jsx'

export const RootCmp =() => {
    return (
        <div className="app">
            <AppHeader />
            <main>
            <Switch>
                        {routes.map(route => <Route key={route.path} component={route.component} path={route.path} />)}
                    </Switch>
            </main>
        </div>
    )
}