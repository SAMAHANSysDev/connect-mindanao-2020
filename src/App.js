import React from 'react';
import { createUseStyles } from 'react-jss';
import ConnectMindanao from './components/ConnectMindanao';
import Counter from './components/Counter';

const useStyles = createUseStyles({
  app: {
    background: `url('/images/bg.png')`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    backgroundSize: 'cover',
    textAlign: 'center',
    minHeight: '100vh',
  },
  spacing: {
    height: '10vh',
  },
  counter: {
    marginBottom: '5vw'
  }
});

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.app}>
      <div className={classes.spacing} />
      <Counter className={classes.counter} />
      <ConnectMindanao />
    </div>
  );
}

export default App;
