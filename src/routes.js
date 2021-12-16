import { BarDetails } from './views/bar-details';

// Routes accesible from the main navigation (in AppHeader)
const routes = [{
        path: '/:barId',
        component: BarDetails,
    },
    // {
    //     path: '/',
    //     component: HomePage,
    // }
]

export default routes;