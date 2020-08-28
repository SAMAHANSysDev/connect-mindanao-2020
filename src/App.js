import React from 'react';
import { createUseStyles } from 'react-jss';
import ConnectMindanao from './components/ConnectMindanao';
import Counter from './components/Counter';
import Button from './components/Button';
import { Container, Row, Col, Visible, Hidden } from 'react-grid-system';
import TextField from './components/TextField';
import Checkbox from './components/Checkbox';
import Rocket from './components/Rocket';
import Signal from './components/Signal';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const useStyles = createUseStyles({
  app: {
    background: `url('/images/bg_fill.png')`,
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
    background: `url('/images/stars.png')`,
    backgroundSize: 'cover',
    height: '100%'
  },
  centerAlign: {
    textAlign: 'center',
  },
  spacing: {
    height: '10vh',
  },
  counter: {
    textAlign: 'center',
    marginBottom: '5vw'
  },
  button: {
    textAlign: 'center',
    marginTop: '5vw'
  },
  pdf: {
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.8)',
    padding: '2vw',
    textAlign: 'center',
    fontSize: '1.5rem'
  },
  textContainer: {
    backgroundColor: 'rgba(0,0,0,0.4)',
    padding: '1.5vw',
    borderRadius: '1vw'
  }
});

const scrollToRef = (ref) => ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });

const App = () => {
  const classes = useStyles();
  const firstInfoRef = React.useRef(null);
  const executeScroll = () => {
    scrollToRef(firstInfoRef);
  };

  return (
    <div className={classes.app}>
      <div className={classes.starLayer}>
        <div className={classes.stars} />
        <div className={classes.stars} />
        <div className={classes.stars} />
        <div className={classes.stars} />
      </div>
      <div className={classes.contentLayer}>
        <div className={classes.spacing} />
        <Counter className={classes.counter} />
        <ConnectMindanao className={classes.centerAlign} />
        <Button className={classes.button} onClick={executeScroll}>Learn more</Button>
        <Container style={{ marginTop: '10vw', width: '80%' }}>
          <Row>
            <Col sm={4}>
              <img style={{ pointerEvents: 'none' }} src="images/ph-pink.png" alt="ph" width="100%" />
            </Col>
            <Col sm={8}>
              <div ref={firstInfoRef} />
              <div className={classes.textContainer}>
                <h1 style={{ color: 'white' }}>The Philipine Internet Situation</h1>
                <p>Recent global speed tests showed that the Philippines has a fixed broadband download speed of <b>25.07</b> Megabits per second (Mbps), which is way lower than the global average of <b>81.46</b> Mbps. The Philippines also has a lower mobile download speed of <b>16.95</b> Mbps, compared to the global average of <b>34.51</b> Mbps</p>
              </div>
            </Col>
          </Row>
        </Container>

        <Container style={{ marginTop: '10vw', width: '80%', minHeight: '30vw' }}>
          <Row>
            <Hidden md lg xl xxl>
              <Col sm={4} style={{ position: 'relative' }}>
                <img style={{ width: '100%', pointerEvents: 'none' }} src="images/ph-iso.png" alt="ph" />
              </Col>
            </Hidden>
            <Col sm={8} style={{ zIndex: 2 }}>
              <div className={classes.textContainer}>
                <h1 style={{ color: 'white' }}>The Internet Situation in Mindanao</h1>
                <p>Although the Department of Information and Communications Technology (DICT) has many plans and has spent millions in developing the country’s communication and information infrastructure, good internet connection in Mindanao exists mostly in the major cities such as Davao, Cagayan de Oro, Butuan, and General Santos. Beyond these cities, however, cell sites are sparse, and therefore, a good internet connection is hard to find.</p>
              </div>
            </Col>
            <Visible md lg xl xxl>
              <Col sm={4} style={{ position: 'relative' }}>
                <img style={{ position: 'absolute', width: '60vw', left: '-15vw', top: '-15vw', pointerEvents: 'none' }} src="images/ph-iso.png" alt="ph" />
              </Col>
            </Visible>
          </Row>
        </Container>

        <Container style={{ marginTop: '10vw', width: '80%' }}>
          <Row>
            <Col sm={4}>
              <img src="images/laptop.png" style={{ pointerEvents: 'none' }} alt="ph" width="100%" />
            </Col>
            <Col sm={8}>
              <div className={classes.textContainer}>
                <h1 style={{ color: 'white' }}>Legislations and Challenges</h1>
                <p>While broadband satellite technology looks promising, key policies and regulatory obstacles to using the technology are still present. The process of acquiring a telecommunications franchise from the Philippine Congress is expensive and time-consuming, hindering the entry of competitors into the industry.</p>
              </div>
            </Col>
          </Row>
        </Container>

        <Container style={{ marginTop: '10vw', width: '80%', minHeight: '30vw' }}>
          <Row>
            <Hidden md lg xl xxl>
              <Col sm={4} style={{ position: 'relative' }}>
                <img style={{ width: '100%', pointerEvents: 'none' }} src="images/signal/satellite.png" alt="ph" />
              </Col>
            </Hidden>
            <Col sm={8} style={{ zIndex: 2 }}>
              <div className={classes.textContainer}>
                <h1 style={{ color: 'white' }}>Satellite Internet</h1>
                <p>Satellite internet is a reliable way of getting internet access to remote places in the Philippines. As an archipelagic country, it is surprising that the Philippines is not taking advantage of satellite technology as much as its Asian neighbors. Countries such as Indonesia, Malaysia, and Thailand have launched several satellites of their own. Additionally, satellite internet is many times faster than dial-up internet, which might be a good alternative for people in remote areas.</p>
              </div>
            </Col>
            <Visible md lg xl xxl>
              <Col sm={4} style={{ position: 'relative' }}>
                <Signal />
              </Col>
            </Visible>
          </Row>
        </Container>

        <div className={classes.pdf}>
          Want to know more details? View the complete document here.
        </div>

        <Container style={{ marginTop: '10vw', width: '80%' }}>
          <Row>
            <Col sm={6}>
              <Rocket />
            </Col>
            <Col sm={6}>
              <h1 style={{ color: 'white' }}>Sign the Petition</h1>
              <FormGroup>
                <TextField
                  label="First Name"
                  fullWidth
                />
                <TextField
                  label="Last Name"
                  fullWidth
                />
                <TextField
                  label="Address"
                  fullWidth
                />
                <TextField
                  label="Email"
                  fullWidth
                />
                <TextField
                  label="Contact Number"
                  fullWidth
                />
                <FormControlLabel
                  control={
                    <Checkbox onChange={() => {}} name="checkedG" />
                  }
                  label="I have read and agree to the Privacy Policy."
                />
                <Button style={{ marginTop: '1.5vw' }} fullWidth>Sign Petition</Button>
              </FormGroup>
            </Col>
          </Row>
        </Container>

        <div className={classes.spacing} />
      </div>
    </div>
  );
}

export default App;
