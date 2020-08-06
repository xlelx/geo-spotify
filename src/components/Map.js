import React, { Component, Fragment, useState, useEffect } from 'react'
import { Chart } from 'react-google-charts'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'

import iso3311a2 from 'iso-3166-1-alpha-2'
import SpotifyPlayer from 'react-spotify-web-playback'
import { SET_COUNTRYDATA_PLAYLISTS, SET_PLAYLIST } from '../redux/types'
import { Redirect } from 'react-router-dom'

//MUI
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import theme from '../util/theme'

const validCountries = 'Algeria,Egypt,Morocco,South Africa,Tunisia,Australia,New Zealand,Argentina,Bolivia,Brazil,Chile,Colombia,Ecuador,Paraguay,Peru,Uruguay,Canada,Costa Rica,Dominican Republic,El Salvador,Guatemala,Honduras,Mexico,Nicaragua,Panama,United States,Andorra,Austria,Belgium,Bulgaria,Cyprus,Czech Republic,Denmark,Estonia,Finland,France,Germany,Greece,Hungary,Iceland,Ireland,Italy,Latvia,Liechtenstein,Lithuania,Luxembourg,Malta,Monaco,Netherlands,Norway,Poland,Portugal,Romania,Slovakia,Spain,Sweden,Switzerland,Turkey,United Kingdom,Russia,Belarus,Kazakhstan,Moldova,Ukraine,Albania,Bosnia,Croatia,Montenegro,North Macedonia,Serbia,Slovenia,Kosovo,Bahrain,Hong Kong,India,Indonesia,Israel,Japan,Jordan,Kuwait,Lebanon,Malaysia,Oman,Palestine,Philippines,Qatar,Saudi Arabia,Singapore,Taiwan,Thailand,United Arab Emirates,Vietnam'.split(
  ','
)
const useStyles = makeStyles(theme => ({}))
function Map () {
  const classes = useStyles()

  const dispatch = useDispatch()

  const { token, dataLoaded, countryData, playlists, playlist } = useSelector(
    state => state.root
  )

  if (!token) {
    return <Redirect to='/'></Redirect>
  }

  const chartEvents = [
    {
      eventName: 'select',
      callback ({ chartWrapper }) {
        let selected = chartWrapper.getChart().getSelection()[0] //index off by one
        if (selected) {
          let row = selected.row + 1
          console.log(playlists[row])
          dispatch({ type: SET_PLAYLIST, payload: playlists[row] })
        }
      }
    }
  ]

  //Load map and playlist data
  if (!dataLoaded) {
    const newTable = [
      ['Country', { type: 'string', role: 'tooltip', p: { html: true }}]
    ]
    const newPlaylists = []
    validCountries.forEach(async country => {
      const code = iso3311a2.getCode(country)
      try {
        const res = await axios.get(
          'https://api.spotify.com/v1/browse/featured-playlists',
          {
            params: {
              country: code,
              limit: 1
            },
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        )
        const pl = res.data.playlists.items[0]

        newPlaylists.push(pl.uri)
        const image = `<img src="${pl.images[0].url}" style="width:200px"/>`
        newTable.push([country, image])
      } catch (error) {
        console.log('country not found')
      }
    })
    dispatch({
      type: SET_COUNTRYDATA_PLAYLISTS,
      payload: { countryData: newTable, playlists: newPlaylists }
    })
  }

  return (
    <Fragment>
      <div className='App'
      style={{
        padding: '10px'
      }}>
        <Grid container spacing={0}>
          <Grid item xs={12}>
            {dataLoaded ? (
              <Chart
                chartType='GeoChart'
                data={countryData}
                // Note: you will need to get a mapsApiKey for your project.
                // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
                mapsApiKey='AIzaSyCeSGOa_yX4pG3sRnQPrEGa4BY3mx5T4T0'
                rootProps={{ 'data-testid': '1' }}
                options={{
                  backgroundColor: {
                    fill: theme.palette.secondary.main,
                    stroke: theme.palette.primary.main,
                    strokeWidth: 3
                  },
                  geochartVersion: 11,
                  regioncoderVersion: 1,
                  datalessRegionColor: theme.palette.secondary.lightest,
                  defaultColor: theme.palette.primary.main,
                  enableRegionInteractivity: true,
                  tooltip: {
                    isHtml: true,
                    trigger: 'focus'
                  },
                  height: `${window.innerHeight * 0.90}px`,
                }}
                chartEvents={chartEvents}
              />
            ) : null}
          </Grid>
          <Grid item xs={12}>
            <SpotifyPlayer
              token={token}
              uris={[playlist]}
              play={playlist ? true : false}
              name='geo-spotify'
              showSaveIcon
            />
          </Grid>
        </Grid>
      </div>
    </Fragment>
  )
}

export default Map
