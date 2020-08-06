import {
    SET_AUTHORIZATION, SET_COUNTRYDATA_PLAYLISTS, SET_PLAYLIST
}from './types'
const initialState = {
    token: '',
    dataLoaded: false,
    refreshToken: '',
    countryData: [],
    authenticated: false,
    playlists: [],
    playlist: ''
}

export default function(state = initialState, action){
    switch(action.type){
        case SET_AUTHORIZATION:
            return {
                ...state,
                token: action.payload.access_token,
                authenticated: true
            }
        case SET_COUNTRYDATA_PLAYLISTS:
            return {
                ...state,
                dataLoaded: true,
                countryData: action.payload.countryData,
                playlists: action.payload.playlists
            }
        case SET_PLAYLIST:
            return {
                ...state,
                playlist: action.payload
            }
        default:
            return { ... state}
    }
}