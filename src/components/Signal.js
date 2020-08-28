import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  container: {
    position: 'relative',
    width: '100%',
    height: 0,
    paddingTop: '66.64%',
  },
  towers: {
    right: '-30%',
    bottom: '-80%',
    position: 'absolute',
    backgroundImage: 'url(/images/signal/towers.png)',
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    width: '120%',
    height: '200%',
  },
  satellite: {
    left: '-70%',
    top: '-150%',
    position: 'absolute',
    backgroundImage: 'url(/images/signal/satellite.png)',
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    width: '120%',
    height: '200%',
  },
  origin: {
    animation: '$signal1 1s infinite',
    left: '-30%',
    top: '-40%',
    position: 'absolute',
    backgroundImage: 'url(/images/signal/1.png)',
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    height: '30%',
    zIndex: '-1',
  },
  middle: {
    animation: '$signal2 1s infinite',
    left: '-20%',
    top: '-45%',
    position: 'absolute',
    backgroundImage: 'url(/images/signal/2.png)',
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    height: '60%',
    zIndex: '-1',
  },
  last: {
    animation: '$signal3 1s infinite',
    left: '-10%',
    top: '-50%',
    position: 'absolute',
    backgroundImage: 'url(/images/signal/3.png)',
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    height: '90%',
    zIndex: '-1',
  },
  '@keyframes signal1': {
    '0%': {
      opacity: 1
    },
    '16%': {
      opacity: 0.66
    },
    '33%': {
      opacity: 0.33
    },
    '50%': {
      opacity: 0
    },
    '66%': {
      opacity: 0.33
    },
    '83%': {
      opacity: 0.66
    },
    '100%': {
      opacity: 1
    }
  },
  '@keyframes signal2': {
    '0%': {
      opacity: 0
    },
    '16%': {
      opacity: 1
    },
    '33%': {
      opacity: 0.66
    },
    '50%': {
      opacity: 0.33
    },
    '66%': {
      opacity: 0.66
    },
    '83%': {
      opacity: 1
    },
    '100%': {
      opacity: 0
    }
  },
  '@keyframes signal3': {
    '0%': {
      opacity: 0.33
    },
    '16%': {
      opacity: 0
    },
    '33%': {
      opacity: 1
    },
    '50%': {
      opacity: 0.66
    },
    '66%': {
      opacity: 1
    },
    '83%': {
      opacity: 0
    },
    '100%': {
      opacity: 0.33 
    }
  },
});
// Inspired by blueprintjs
const Rocket = (props) => {
  const classes = useStyles();

  return (
    <div {...props}>
      <div className={classes.container}>
        <div className={classes.towers} />
        <div className={classes.satellite} />
        <div className={classes.origin} />
        <div className={classes.middle} />
        <div className={classes.last} />
      </div>
    </div>
  );
}

export default Rocket;