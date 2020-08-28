import React from 'react';
import { createUseStyles } from 'react-jss';
import TextField from '@material-ui/core/TextField';

const useStyles = createUseStyles({
  formRoot: {
    borderRadius: '0.8vw',
    backgroundColor: 'rgba(15,69,82,0.8)'
  },
  underline: {
    "&&&:before": {
      borderBottom: "none"
    },
    "&&:after": {
      borderBottom: "none"
    }
  },
  focused: {
    borderRadius: '0.8vw',
    mozBoxShadow: `
      inset 0 0 0.2vw #73D8F1,
      0 0 1.5vw 0.1vw #73D8F1
    `,
    webkitBoxShadow: `
      inset 0 0 0.2vw #73D8F1,
      0 0 1.5vw 0.1vw #73D8F1
    `,
    boxShadow: `
      inset 0 0 0.2vw #73D8F1,
      0 0 1.5vw 0.1vw #73D8F1
    `,
  }
});

const Field = (props) => {
  const classes = useStyles();

  return (
    <div style={{ marginTop: '1vw', marginBottom: '1vw' }}>
      <TextField
        {...props}
        variant="filled"
        className={classes.formRoot}
        InputProps={{
          style: {
            color: 'white',
            borderRadius: '0.8vw',
          },
          classes: {
            underline: classes.underline,
            focused: classes.focused
          }
        }}
        InputLabelProps={{
          style: { color: '#9CC6D0' },
        }}
      />
    </div>
  );
}

export default Field;
