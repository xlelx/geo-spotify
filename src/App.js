import React, { useEffect } from 'react'
import './App.css'
import Map from './components/Map'
import { SpotifyApiContext } from 'react-spotify-api'
import qs from 'querystring'

import axios from 'axios'



function App () {
  return (
      <div className='App'>
        <Map/>
      </div>
  )
}

export default App
