import React from 'react';
import { createUseStyles } from 'react-jss';

import { cdnURL } from '../utils/constants';

const useStyles = createUseStyles({
  astronaut: {
    animation: '$float 5s infinite',
    left: '-30%',
    top: '-50%',
    position: 'absolute',
    backgroundImage: `url(${cdnURL}/bg/astronaut.png)`,
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    height: '100%',
    zIndex: '-1',
  },
  '@keyframes float': {
    '0%': {
      transform: 'translatey(0px)'
    },
    '50%': {
      transform: 'translatey(-1.5vw)'
    },
    '100%': {
      transform: 'translatey(0px)'
    }
  },
});
// Inspired by blueprintjs
const Rocket = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.astronaut} />
  );
}

export default Rocket;