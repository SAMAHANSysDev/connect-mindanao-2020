import React from 'react';
import { createUseStyles } from 'react-jss';
import { useCountUp } from 'react-countup';

const useStyles = createUseStyles({
  container: {
    backgroundColor: 'rgba(115, 216, 241, 0.2)',
    width: '50vw',
    margin: 'auto',
    borderRadius: '10px',
    padding: '1vw'
  },
  mainCounter: {
    color: 'white',
    fontFamily: 'Montserrat',
    fontSize: '5vw',
    fontWeight: 800,
    letterSpacing: '1.3vw',
  },
  subtitle: {
    color: '#73D8F1',
    fontSize: '1.5vw',
    fontFamily: 'Montserrat'
  },
  '@media (max-width: 992px)': {
    container: {
      width: '80vw',
      padding: '2vw'
    },
    mainCounter: {
      fontSize: '8vw',
      letterSpacing: '1.3vw',
    },
    subtitle: {
      fontSize: '2vw',
    }
  }
});

const Component = ({ className, count: parent }) => {
  const [count, setCount] = React.useState(parent);
  const { countUp, update } = useCountUp({ start: 0, end: count, separator: ',', useEasing: true, duration: 4 });

  React.useEffect(() => {
    setCount(parent);
    update(count);
  }, [parent, count, update]);

  const classes = useStyles();

  return (
    <div className={className}>
      <div className={classes.container}>
        <div className={classes.mainCounter}>
          {countUp}
        </div>
        <div className={classes.subtitle}>
          people signed
        </div>
      </div>
    </div>
  );
}

export default Component;
