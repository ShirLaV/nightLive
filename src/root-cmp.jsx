import React from 'react'

import { Route, Routes } from 'react-router-dom'
import routes from './routes'
import { AppHeader } from './cmps/app-header.jsx'
import { BarDetails } from './views/bar-details.jsx';
import { HomePage } from './views/home-page.jsx'

export const RootCmp = () => {
    console.log('routes', routes)
    return (
        <div className="app">
            <AppHeader />
            <main>
                <Routes >
                    <Route element={<HomePage />} path='/' />
                    <Route element={<BarDetails />} path='/bar/:barId' />
                    {/* {routes.map(route => <Route key={route.path} component={route.component} path={route.path} />)} */}
                </Routes>
            </main>
        </div>
    )
}