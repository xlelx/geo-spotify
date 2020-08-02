import React, { Component, Fragment } from 'react'
import { Chart } from 'react-google-charts'
import axios from 'axios'
import qs from 'querystring'
import {CLIENT_ID, CLIENT_SECRET} from '../keys/keys'

import iso3311a2 from 'iso-3166-1-alpha-2'

const validCountries = 'Algeria,Egypt,Morocco,South Africa,Tunisia,Australia,New Zealand,Argentina,Bolivia,Brazil,Chile,Colombia,Ecuador,Paraguay,Peru,Uruguay,Canada,Costa Rica,Dominican Republic,El Salvador,Guatemala,Honduras,Mexico,Nicaragua,Panama,United States,Andorra,Austria,Belgium,Bulgaria,Cyprus,Czech Republic,Denmark,Estonia,Finland,France,Germany,Greece,Hungary,Iceland,Ireland,Italy,Latvia,Liechtenstein,Lithuania,Luxembourg,Malta,Monaco,Netherlands,Norway,Poland,Portugal,Romania,Slovakia,Spain,Sweden,Switzerland,Turkey,United Kingdom,Russia,Belarus,Kazakhstan,Moldova,Ukraine,Albania,Bosnia,Croatia,Montenegro,North Macedonia,Serbia,Slovenia,Kosovo,Bahrain,Hong Kong,India,Indonesia,Israel,Japan,Jordan,Kuwait,Lebanon,Malaysia,Oman,Palestine,Philippines,Qatar,Saudi Arabia,Singapore,Taiwan,Thailand,United Arab Emirates,Vietnam'.split(
  ','
)
const playlists = []

class Map extends Component {
  constructor () {
    super()
    this.state = {
      countryData: [],
      dataLoaded: false
    }
    this.renderMapData.bind(this)
  }

  renderMapData = async () => {
    axios.defaults.baseURL = 'https://accounts.spotify.com'
    let requestBody = { grant_type: 'client_credentials' }
    const config = {
      headers: {
        Authorization: `Basic ${window.btoa(CLIENT_ID + ':' + CLIENT_SECRET)}`
      }
    }
    let token
    try {
      let res = await axios.post(
        '/api/token',
        qs.stringify(requestBody),
        config
      )
      token = await res.data.access_token
      axios.defaults.headers['Authorization'] = `Bearer ${token}`

      requestBody = {
        country: null,
        limit: '1'
      }

      const newTable = [['Country', {'type': 'string', 'role': 'tooltip', 'p': {'html': true}} ]]
      validCountries.forEach(async country => {
        const code = iso3311a2.getCode(country)
        requestBody.country = code
        try {
          res = await axios.get(
            'https://api.spotify.com/v1/browse/featured-playlists',
            {
              params: {
                country: code,
                limit: 1
              }
            }
          )
          const pl = res.data.playlists.items[0]
          console.log(pl)
          playlists.push({ country, ...res.data.playlists.items[0] })

          const image = `<img src="${pl.images[0].url}" style="width:100px"/>`
          newTable.push([country, image])
        } catch (error) {
          console.log('country not found')
        }
      })
      this.setState({
        countryData: newTable,
        dataLoaded: true
      })
    } catch (err) {
      console.log(err)
    }
  }

  componentWillMount = () => {
    this.renderMapData()
  }

  render () {
    const countryData = this.state.countryData
    const chartEvents = [
      // {
      //   callback: ({ chartWrapper, google }) => {
      //     const chart = chartWrapper.getChart()
      //     chart.container.addEventListener('click', ev => {})
      //   },
      //   eventName: 'ready'
      // },
      {
        eventName: 'select',
        callback ({ chartWrapper }) {
          console.log('Select', chartWrapper.getChart().getSelection())
          let selected = chartWrapper.getChart().getSelection()[0]//index off by one
          if (selected) {
            let row = selected.row;
            console.log(countryData[row])
          }
          
        }
      }
    ]

    return (
      <Fragment>
        <div
          className='App'
          styles={{
            width: '100%',
            height: '100%'
          }}
        >
          {this.state.dataLoaded ? (
            <Chart
              chartType='GeoChart'
              data={this.state.countryData}
              // Note: you will need to get a mapsApiKey for your project.
              // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
              mapsApiKey='AIzaSyCeSGOa_yX4pG3sRnQPrEGa4BY3mx5T4T0'
              rootProps={{ 'data-testid': '1' }}
              options={{
                backgroundColor: {
                  fill: '#191414',
                  stroke: '#1db954'
                },
                datalessRegionColor: '#ffffff',
                defaultColor: '#1ed760',
                enableRegionInteractivity: true,
                tooltip: {
                  isHtml: true,
                  trigger: 'focus'
                }
              }}
              chartEvents={chartEvents}
            />
          ) : null}
        </div>
      </Fragment>
    )
  }
}

export default Map
