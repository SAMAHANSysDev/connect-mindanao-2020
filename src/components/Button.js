import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  button: {
    backgroundColor: '#73D8F1',
    borderRadius: '0.8vw',
    border: 0,
    textAlign: 'center',
    outline: 'none',
    padding: 15,
    paddingLeft: 40,
    paddingRight: 40,
    color: '#0F4552',
    letterSpacing: '0.3vw',
    fontFamily: 'Montserrat',
    fontSize: '1.5rem',
    transition: '0.2s',
    mozBoxShadow: `
      inset 0 0 0.1vw #BDF2FF,
      0 0 3vw 0.1vw #73D8F1
    `,
    webkitBoxShadow: `
      inset 0 0 0.1vw #BDF2FF,
      0 0 3vw 0.1vw #73D8F1
    `,
    boxShadow: `
      inset 0 0 0.1vw #BDF2FF,
      0 0 3vw 0.1vw #73D8F1
    `,
    '&:hover': {
      mozBoxShadow: `
        inset 0 0 0.3vw #BDF2FF,
        0 0 3vw 0.3vw #73D8F1
      `,
      webkitBoxShadow: `
        inset 0 0 0.3vw #BDF2FF,
        0 0 3vw 0.3vw #73D8F1
      `,
      boxShadow: `
        inset 0 0 0.3vw #BDF2FF,
        0 0 3vw 0.3vw #73D8F1
      `,
    },
    '&:active': {
      mozBoxShadow: `
        inset 0 0 0.3vw #000000,
        0 0 3vw 0.3vw #73D8F1
      `,
      webkitBoxShadow: `
        inset 0 0 0.3vw #000000,
        0 0 3vw 0.3vw #73D8F1
      `,
      boxShadow: `
        inset 0 0 0.3vw #000000,
        0 0 3vw 0.3vw #73D8F1
      `,
    }
  }
});

const Component = (props) => {
  const classes = useStyles();

  return (
    <div className={props.className} style={props.style}>
      { props.fullWidth ? 
        <button className={classes.button} style={{ width: '100%', padding: 20 }} onClick={props.onClick}>{props.children}</button>
      :
        <button className={classes.button} onClick={props.onClick}>{props.children}</button>
      }
    </div>
  );
}

export default Component;
