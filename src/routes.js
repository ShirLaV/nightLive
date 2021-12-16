import { BarDetails } from './views/bar-details.jsx';
console.log('routes')
// Routes accesible from the main navigation (in AppHeader)
const routes = [{
        path: '/bar/:barId',
        component: BarDetails,
    },
    // {
    //     path: '/',
    //     component: HomePage,
    // }
]

export default routes;