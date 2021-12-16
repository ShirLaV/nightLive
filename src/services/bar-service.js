import {gBars} from '../data/bar.js'
export const barService = {
    getBars,
    getBarById
}

function getBars() {
    return gBars
}

function getBarById(barId) {
    return gBars.find(bar => barId === bar._id)
}


