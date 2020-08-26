import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  '@keyframes float': {
    '0%': {
      transform: 'translatey(0px)'
    },
    '50%': {
      transform: 'translatey(-0.5vw)'
    },
    '100%': {
      transform: 'translatey(0px)'
    }
  },
  '@keyframes floatmobile': {
    '0%': {
      transform: 'translatey(0px)'
    },
    '50%': {
      transform: 'translatey(-1vw)'
    },
    '100%': {
      transform: 'translatey(0px)'
    }
  },
  image1: {
    animation: '$float 6s ease-in-out infinite',
    height: '6vw',
    margin: '0.5vw',
    pointerEvents: 'none'
  },
  image2: {
    animation: '$float 7s ease-in-out infinite',
    height: '6vw',
    margin: '0.5vw',
    pointerEvents: 'none'
  },
  image3: {
    animation: '$float 5s ease-in-out infinite',
    height: '6vw',
    margin: '0.5vw',
    pointerEvents: 'none'
  },
  image4: {
    animation: '$float 4s ease-in-out infinite',
    height: '6vw',
    margin: '0.5vw',
    pointerEvents: 'none'
  },
  image5: {
    animation: '$float 8s ease-in-out infinite',
    height: '6vw',
    margin: '0.5vw',
    pointerEvents: 'none'
  },
  image6: {
    animation: '$float 9s ease-in-out infinite',
    height: '6vw',
    margin: '0.5vw',
    pointerEvents: 'none'
  },
  image7: {
    animation: '$float 6.5s ease-in-out infinite',
    height: '6vw',
    margin: '0.5vw',
    pointerEvents: 'none'
  },
  image8: {
    animation: '$float 7.4s ease-in-out infinite',
    height: '6vw',
    margin: '0.5vw',
    pointerEvents: 'none'
  },
  image9: {
    animation: '$float 5.5s ease-in-out infinite',
    height: '6vw',
    margin: '0.5vw',
    pointerEvents: 'none'
  },
  image10: {
    animation: '$float 5.8s ease-in-out infinite',
    height: '6vw',
    margin: '0.5vw',
    pointerEvents: 'none'
  },
  image11: {
    animation: '$float 6.7s ease-in-out infinite',
    height: '6vw',
    margin: '0.5vw',
    pointerEvents: 'none'
  },
  image12: {
    animation: '$float 8.6s ease-in-out infinite',
    height: '6vw',
    margin: '0.5vw',
    pointerEvents: 'none'
  },
  image13: {
    animation: '$float 8.2s ease-in-out infinite',
    height: '6vw',
    margin: '0.5vw',
    pointerEvents: 'none'
  },
  image14: {
    animation: '$float 4.2s ease-in-out infinite',
    height: '6vw',
    margin: '0.5vw',
    pointerEvents: 'none'
  },
  image15: {
    animation: '$float 6.2s ease-in-out infinite',
    height: '6vw',
    margin: '0.5vw',
    pointerEvents: 'none'
  },
  newline: {
    height: '2vw'
  },
  subtitle: {
    fontFamily: 'Montserrat',
    color: 'white',
    marginTop: '2vw',
    fontSize: '1.5vw',
    fontWeight: 600,
    letterSpacing: '1.3vw',
  },
  '@media (max-width: 1024px)': {
    image1: {
      animation: '$floatmobile 6s ease-in-out infinite',
      height: '10vw',
      margin: '0.5vw',
      pointerEvents: 'none'
    },
    image2: {
      animation: '$floatmobile 7s ease-in-out infinite',
      height: '10vw',
      margin: '0.5vw',
      pointerEvents: 'none'
    },
    image3: {
      animation: '$floatmobile 5s ease-in-out infinite',
      height: '10vw',
      margin: '0.5vw',
      pointerEvents: 'none'
    },
    image4: {
      animation: '$floatmobile 4s ease-in-out infinite',
      height: '10vw',
      margin: '0.5vw',
      pointerEvents: 'none'
    },
    image5: {
      animation: '$floatmobile 8s ease-in-out infinite',
      height: '10vw',
      margin: '0.5vw',
      pointerEvents: 'none'
    },
    image6: {
      animation: '$floatmobile 9s ease-in-out infinite',
      height: '10vw',
      margin: '0.5vw',
      pointerEvents: 'none'
    },
    image7: {
      animation: '$floatmobile 6.5s ease-in-out infinite',
      height: '10vw',
      margin: '0.5vw',
      pointerEvents: 'none'
    },
    image8: {
      animation: '$floatmobile 7.4s ease-in-out infinite',
      height: '10vw',
      margin: '0.5vw',
      pointerEvents: 'none'
    },
    image9: {
      animation: '$floatmobile 5.5s ease-in-out infinite',
      height: '10vw',
      margin: '0.5vw',
      pointerEvents: 'none'
    },
    image10: {
      animation: '$floatmobile 5.8s ease-in-out infinite',
      height: '10vw',
      margin: '0.5vw',
      pointerEvents: 'none'
    },
    image11: {
      animation: '$floatmobile 6.7s ease-in-out infinite',
      height: '10vw',
      margin: '0.5vw',
      pointerEvents: 'none'
    },
    image12: {
      animation: '$floatmobile 8.6s ease-in-out infinite',
      height: '10vw',
      margin: '0.5vw',
      pointerEvents: 'none'
    },
    image13: {
      animation: '$floatmobile 8.2s ease-in-out infinite',
      height: '10vw',
      margin: '0.5vw',
      pointerEvents: 'none'
    },
    image14: {
      animation: '$floatmobile 4.2s ease-in-out infinite',
      height: '10vw',
      margin: '0.5vw',
      pointerEvents: 'none'
    },
    image15: {
      animation: '$floatmobile 6.2s ease-in-out infinite',
      height: '10vw',
      margin: '0.5vw',
      pointerEvents: 'none'
    }
  }
});

const Component = ({ className }) => {
  const classes = useStyles();

  return (
    <div className={className}>
      <img className={classes.image1} src="/images/connectMindanao/1c.png" alt="C" />
      <img className={classes.image2} src="/images/connectMindanao/2o.png" alt="o" />
      <img className={classes.image3} src="/images/connectMindanao/3n.png" alt="n" />
      <img className={classes.image4} src="/images/connectMindanao/4n.png" alt="n" />
      <img className={classes.image5} src="/images/connectMindanao/5e.png" alt="e" />
      <img className={classes.image6} src="/images/connectMindanao/6c.png" alt="c" />
      <img className={classes.image7} src="/images/connectMindanao/7t.png" alt="t" />
      <div className={classes.newline} />
      <img className={classes.image8} src="/images/connectMindanao/8m.png" alt="m" />
      <img className={classes.image9} src="/images/connectMindanao/9i.png" alt="i" />
      <img className={classes.image10} src="/images/connectMindanao/10n.png" alt="n" />
      <img className={classes.image11} src="/images/connectMindanao/11d.png" alt="d" />
      <img className={classes.image12} src="/images/connectMindanao/12a.png" alt="a" />
      <img className={classes.image13} src="/images/connectMindanao/13n.png" alt="n" />
      <img className={classes.image14} src="/images/connectMindanao/14a.png" alt="a" />
      <img className={classes.image15} src="/images/connectMindanao/15o.png" alt="o" />
      <div className={classes.subtitle}>
        INTERNET PARA SA LAHAT
      </div>
    </div>
  );
}

export default Component;
