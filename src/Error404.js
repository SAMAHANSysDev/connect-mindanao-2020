import React from 'react';
import { createUseStyles } from 'react-jss';
import { Visible } from 'react-grid-system';

import { cdnURL } from './utils/constants';

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

  const classes = useStyles();

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
        <center>
          <h1>Error 404</h1>
          <p>Page not found!</p>
        </center>
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
