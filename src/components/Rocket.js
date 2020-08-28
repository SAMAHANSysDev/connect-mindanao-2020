import React from 'react';
import { createUseStyles } from 'react-jss';

import { cdnURL } from '../utils/constants';

const useStyles = createUseStyles({
  container: {
    position: 'relative',
    backgroundImage: `url(${cdnURL}/rocket/rocket.png)`,
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    height: 0,
    paddingTop: '66.64%',
  },
  middle: {
    animation: '$thruster 0.075s infinite',
    left: '1%',
    bottom: '-30%',
    position: 'absolute',
    backgroundImage: `url(${cdnURL}/rocket/main.png)`,
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    height: '40%',
    zIndex: '-1',
  },
  left: {
    animation: '$thruster 0.05s infinite',
    left: '-15%',
    bottom: '-13%',
    position: 'absolute',
    backgroundImage: `url(${cdnURL}/rocket/left.png)`,
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    height: '20%',
    zIndex: '-1',
  },
  right: {
    animation: '$thruster 0.05s infinite',
    right: '-16%',
    bottom: '-13%',
    position: 'absolute',
    backgroundImage: `url(${cdnURL}/rocket/right.png)`,
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    height: '20%',
    zIndex: '-1',
  },
  '@keyframes thruster': {
    '0%': {
      transform: 'translatey(0px) scaleY(1)'
    },
    '50%': {
      transform: 'translatey(-30px) scaleY(0.5)'
    },
    '100%': {
      transform: 'translatey(0px) scaleY(1)'
    }
  },
});
// Inspired by blueprintjs
const Rocket = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.middle} />
      <div className={classes.left} />
      <div className={classes.right} />
    </div>
  );
}

export default Rocket;