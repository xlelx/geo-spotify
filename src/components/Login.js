import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { login } from '../redux/actions'
import { Redirect } from 'react-router-dom'
import qs from 'querystring'
import { CLIENT_ID } from '../keys/keys'

import LoginImage from '../images/login.png'


//MUI
import theme from '../util/theme'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';




const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: `url(${LoginImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.secondary.main,
    backgroundSize: '50$ 50%',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(15, 0, 15),
    height: 75
  },
  title:{
    color: theme.palette.primary.main
  }
}));

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © Khant Thurein Han (Leo) '}
      
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


const CustomButton = () => {
  const classes = useStyles();
  const [clicked, setClicked] = useState(false)
  const requestBody = {
    client_id: CLIENT_ID,
    response_type: 'code',
    redirect_uri: 'http://'+window.location.host, //TODO,
    scope: 'streaming user-read-email user-read-private user-library-read user-library-modify user-read-playback-state user-modify-playback-state'

  }
  useEffect(() => {
    if (clicked) {
      // do something meaningful, Promises, if/else, whatever, and then
      window.location.assign(
        'https://accounts.spotify.com/authorize?' + qs.stringify(requestBody)
      )
    }
  })

  return (
          <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={() => setClicked(true)}
              >
                Login to Spotify
              </Button>)
}


function Login () {
  
  const classes = useStyles();
  const dispatch = useDispatch()

  if (window.location.search) {
    const res = qs.parse(window.location.href.split('?')[1])
    dispatch(login(res.code))
  }

  const authenticated = useSelector(state => state.root.authenticated)
  return (
    <div>{authenticated ? <Redirect to='/map'></Redirect> 
    : (
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} className={classes.image} />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <Typography component="h1" variant="h2" className={classes.title}>
              Geo-Spotify
            </Typography>
            <Box mt={12}>
            <Typography variant="h4">
              Explore what's featured on Spotify around the globe!
            </Typography>
            </Box>
              <CustomButton/>
              <Box mt={5}>
                <Copyright />
              </Box>
          </div>
        </Grid>
      </Grid>
    )}</div>
  )
}






export default Login;
