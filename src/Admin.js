import React from 'react';
import { createUseStyles } from 'react-jss';
import Button from './components/Button';
import { Visible } from 'react-grid-system';
import TextField from './components/TextField';

import FormGroup from '@material-ui/core/FormGroup';

import Table from './components/Table';

import { cdnURL } from './utils/constants';
import firebase from './utils/firebase';

import { useSnackbar } from 'notistack';

const db = firebase.firestore();

const useStyles = createUseStyles({
  app: {
    background: `url('${cdnURL}/bg_fill.png')`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    backgroundSize: 'cover',
    perspective: '1px',
    overflowX: 'hidden',
    overflowY: 'auto',
    height: '100vh',
    fontFamily: 'Montserrat',
    color: 'white',
    overflow: 'hidden'
  },
  starLayer: {
    transform: 'translateZ(-1px) scale(2)',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  },
  contentLayer: {
    transform: 'translateZ(0)',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  },
  stars: {
    background: `url('${cdnURL}/stars.png')`,
    backgroundSize: 'cover',
    height: '100%'
  },
  spacing: {
    height: '10vh',
  },
  footer: {
    width: '100%',
    padding: '2vw',
    textAlign: 'center',
    fontWeight: 400,
    fontSize: '0.8rem'
  },
  redPlanet: {
    position: 'absolute',
    left: '10vw',
    top: '40vw',
    width: '15vw',
    pointerEvents: 'none',
    zIndex: -1
  },
  earth: {
    position: 'absolute',
    right: '-20vw',
    top: '20vw',
    width: '50vw',
    pointerEvents: 'none',
    zIndex: -1,
  },
  wowPlanet: {
    position: 'absolute',
    left: '-15vw',
    top: '10vw',
    width: '30vw',
    pointerEvents: 'none',
    zIndex: -1
  },
  samahanLogo: {
    position: 'absolute',
    left: '10vw',
    top: '5vw',
    width: '5vw',
    pointerEvents: 'none'
  }
});

const App = () => {

  const [sigs, setSigs] = React.useState([]);

  const [loggedIn, setLoggedIn] = React.useState(false);

  const [validPassword, setValidPassword] = React.useState(false);

  const [password, setPassword] = React.useState('');

  const { enqueueSnackbar } = useSnackbar();

  const classes = useStyles();

  const getSignatures = async () => {
    const snapshot = await db.collection('signatures').get();
    return snapshot.docs.map(doc => doc.data());
  }

  React.useEffect(() => {
    firebase.auth().signInAnonymously().catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      enqueueSnackbar(`Database error! ${errorMessage} (${errorCode})`, { 
        variant: 'error',
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'right',
        },
      });
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in.
        setLoggedIn(true);
      } else {
        // User is signed out.
        setLoggedIn(false);
      }
    });
  }, [enqueueSnackbar]);

  const checkPassword = (e) => {
    e.preventDefault();
    if (!loggedIn) {
      return;
    }

    if (password === 'AdDUSamahanConnMin202O') {
      setValidPassword(true);
      enqueueSnackbar('Admin login successful!', { 
        variant: 'success',
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'right',
        },
      });
      getSignatures().then((sigs) => {
        setSigs(sigs);
      })
    } else {
      enqueueSnackbar('Invalid password!', { 
        variant: 'error',
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'right',
        },
      });
    }
  }

  return (
    <div className={classes.app}>
      <div className={classes.starLayer}>
        <div className={classes.stars} />
      </div>
      <div className={classes.contentLayer}>
        <img src={`${cdnURL}/moreinmotion.svg`} alt="samahan" className={classes.samahanLogo} />
        <div className={classes.spacing} />
        <div className={classes.spacing} />
        <Visible md lg xl xxl>
          <img src={`${cdnURL}/bg/redplanet.png`} alt="planet" className={classes.redPlanet} />
        </Visible>
        <img src={`${cdnURL}/bg/earth.png`} alt="planet" className={classes.earth} />
        <img src={`${cdnURL}/bg/wowplanet.png`} alt="planet" className={classes.wowPlanet} />
        { !validPassword ?
          <form onSubmit={checkPassword} style={{ width: '60%', margin: 'auto' }}>
            <FormGroup>
              <TextField
                type="password"
                label="Admin Password"
                fullWidth
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
              <br />
              <Button type="submit" style={{ marginTop: '1.5vw' }} fullWidth>Login</Button>
            </FormGroup>
          </form>
          :
          <>
            <Table rows={sigs} style={{ width: '80%', margin: 'auto' }} />
          </>
        }
        <div className={classes.spacing} />
        <div className={classes.footer}>
          Copyright 2020 SAMAHAN Central Board | Developed by SAMAHAN Creative Team and SAMAHAN System Development<br/>
          Web Design by <a href="https://twitter.com/sonroyaalmerol" target="_blank" rel="noopener noreferrer">Son Roy Almerol</a> and <a href="https://twitter.com/jeyowthreeshwa" target="_blank" rel="noopener noreferrer">Joeshua Dequiña</a>
        </div>
      </div>
    </div>
  );
}

export default App;
