import React from 'react';
import { createUseStyles } from 'react-jss';
import ConnectMindanao from './components/ConnectMindanao';
import Counter from './components/Counter';
import Button from './components/Button';
import { Container, Row, Col, Visible } from 'react-grid-system';

const useStyles = createUseStyles({
  app: {
    background: `url('/images/bg.png')`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    backgroundSize: 'cover',
    minHeight: '100vh',
    fontFamily: 'Montserrat',
    color: 'white',
    overflow: 'hidden'
  },
  centerAlign: {
    textAlign: 'center',
  },
  spacing: {
    height: '5vh',
  },
  counter: {
    textAlign: 'center',
    marginBottom: '5vw'
  },
  button: {
    textAlign: 'center',
    marginTop: '5vw'
  }
});

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.app}>
      <div className={classes.spacing} />
      <Counter className={classes.counter} />
      <ConnectMindanao className={classes.centerAlign} />
      <Button className={classes.button}>Learn more</Button>
      <Container style={{ marginTop: '10vw', width: '80%' }}>
        <Row>
          <Col sm={4}>
            <img src="images/ph-pink.png" alt="ph" width="100%" />
          </Col>
          <Col sm={8}>
            <h1 style={{ color: 'white' }}>The Philipine Internet Situation</h1>
            <p>        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras velit, massa semper sodales facilisi orci leo, tristique. Sed faucibus elementum nulla massa venenatis. Commodo diam nulla morbi tortor, proin tristique non tempor, vel. Id donec sed in venenatis faucibus consectetur eu. Consectetur eget nunc nunc nec ultrices diam.
        Neque at enim malesuada tortor purus. Etiam pellentesque sagittis feugiat odio tortor ac dolor enim amet. Nisi viverra ultricies.</p>
          </Col>
        </Row>
      </Container>
      <Container style={{ marginTop: '10vw', width: '80%', minHeight: '30vw' }}>
        <Row>
          <Col sm={8}>
            <h1 style={{ color: 'white' }}>The Internet Situation in Mindanao</h1>
            <p>        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras velit, massa semper sodales facilisi orci leo, tristique. Sed faucibus elementum nulla massa venenatis. Commodo diam nulla morbi tortor, proin tristique non tempor, vel. Id donec sed in venenatis faucibus consectetur eu. Consectetur eget nunc nunc nec ultrices diam.
        Neque at enim malesuada tortor purus. Etiam pellentesque sagittis feugiat odio tortor ac dolor enim amet. Nisi viverra ultricies.</p>
          </Col>
            <Col sm={4} style={{ position: 'relative' }}>
              <Visible md lg xl xxl>
                <img style={{ position: 'absolute', width: '60vw', left: '-15vw', top: '-15vw' }} src="images/ph-iso.png" alt="ph" />
              </Visible>
            </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
