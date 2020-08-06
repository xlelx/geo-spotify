import { CLIENT_ID, CLIENT_SECRET } from '../keys/keys'
import { SET_AUTHORIZATION } from './types'
import axios from 'axios'
import qs from 'querystring'
import iso3311a2 from 'iso-3166-1-alpha-2'


export const login = code => dispatch => {
  const requestBody = {
    grant_type: 'authorization_code',
    code,
    redirect_uri: 'http://localhost:3000',
  }

  const config = {
    headers: {
      Authorization: `Basic ${window.btoa(CLIENT_ID + ':' + CLIENT_SECRET)}`,
      'content-type': 'application/x-www-form-urlencoded'
    }
  }
  axios
    .post(
      'https://accounts.spotify.com/api/token',
      qs.stringify(requestBody),
      config
    )
    .then(res => {
      dispatch({
        type: SET_AUTHORIZATION,
        payload: res.data
      })
    })
    .catch(err => console.log(err.response.data))
}


const validCountries = 'Algeria,Egypt,Morocco,South Africa,Tunisia,Australia,New Zealand,Argentina,Bolivia,Brazil,Chile,Colombia,Ecuador,Paraguay,Peru,Uruguay,Canada,Costa Rica,Dominican Republic,El Salvador,Guatemala,Honduras,Mexico,Nicaragua,Panama,United States,Andorra,Austria,Belgium,Bulgaria,Cyprus,Czech Republic,Denmark,Estonia,Finland,France,Germany,Greece,Hungary,Iceland,Ireland,Italy,Latvia,Liechtenstein,Lithuania,Luxembourg,Malta,Monaco,Netherlands,Norway,Poland,Portugal,Romania,Slovakia,Spain,Sweden,Switzerland,Turkey,United Kingdom,Russia,Belarus,Kazakhstan,Moldova,Ukraine,Albania,Bosnia,Croatia,Montenegro,North Macedonia,Serbia,Slovenia,Kosovo,Bahrain,Hong Kong,India,Indonesia,Israel,Japan,Jordan,Kuwait,Lebanon,Malaysia,Oman,Palestine,Philippines,Qatar,Saudi Arabia,Singapore,Taiwan,Thailand,United Arab Emirates,Vietnam'.split(
  ','
)



// const config = {
//   headers: {
//     Authorization: `Basic ${window.btoa(CLIENT_ID + ':' + CLIENT_SECRET)}`
//   }
// }
// let token
// try {
//   let res = await axios.get(
//     'https://accounts.spotify.com/authorize',
//     qs.stringify(requestBody)
//   )
//   token = await res.data.access_token
//   axios.defaults.headers['Authorization'] = `Bearer ${token}`
//   this.setState({ token })

//   requestBody = {
//     country: null,
//     limit: '1'
//   }

//   const newTable = [
//     ['Country', { type: 'string', role: 'tooltip', p: { html: true } }]
//   ]
//   validCountries.forEach(async country => {
//     const code = iso3311a2.getCode(country)
//     requestBody.country = code
//     try {
//       res = await axios.get(
//         'https://api.spotify.com/v1/browse/featured-playlists',
//         {
//           params: {
//             country: code,
//             limit: 1
//           }
//         }
//       )
//       const pl = res.data.playlists.items[0]
//       console.log(pl)
//       playlists.push({ country, ...res.data.playlists.items[0] })
//       const image = `<img src="${pl.images[0].url}" style="width:100px"/>`
//       newTable.push([country, image])
//     } catch (error) {
//       console.log('country not found')
//     }
//   })
//   this.setState({
//     countryData: newTable,
//     dataLoaded: true
//   })
// } catch (err) {
//   console.log(err)
// }
