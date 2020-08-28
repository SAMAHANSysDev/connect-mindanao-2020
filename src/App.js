import React from 'react';
import { createUseStyles } from 'react-jss';
import ConnectMindanao from './components/ConnectMindanao';
import Counter from './components/Counter';
import Button from './components/Button';
import SmallButton from './components/SmallButton';
import { Container, Row, Col, Visible, Hidden } from 'react-grid-system';
import TextField from './components/TextField';
import Checkbox from './components/Checkbox';
import Rocket from './components/Rocket';
import Signal from './components/Signal';

import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import { cdnURL } from './utils/constants';

const useStyles = createUseStyles({
  app: {
    background: `url('${cdnURL}/bg_fill.png')`,
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
    background: `url('${cdnURL}/stars.png')`,
    backgroundSize: 'cover',
    height: '100%'
  },
  centerAlign: {
    position: 'relative',
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
  readMoreButton: {
    marginTop: '4vw',
  },
  footer: {
    width: '100%',
    padding: '2vw',
    textAlign: 'center',
    fontWeight: 400,
    fontSize: '0.8rem'
  },
  textContainer: {
    backgroundColor: 'rgba(0,0,0,0.6)',
    padding: 'calc(20px + 1vw)',
    borderRadius: '1vw'
  },
  redPlanet: {
    position: 'absolute',
    left: '10vw',
    top: '40vw',
    width: '15vw',
    pointerEvents: 'none'
  },
  earth: {
    position: 'absolute',
    right: '-20vw',
    top: '20vw',
    width: '50vw',
    pointerEvents: 'none'
  },
  wowPlanet: {
    position: 'absolute',
    left: '-15vw',
    top: '10vw',
    width: '30vw',
    pointerEvents: 'none'
  },
  comet: {
    position: 'absolute',
    right: '10vw',
    top: '10vw',
    width: '30vw',
    pointerEvents: 'none'
  },
  asteroid: {
    position: 'absolute',
    left: '-45vw',
    top: '100vh',
    width: '100vw',
    pointerEvents: 'none'
  },
  samahanLogo: {
    position: 'absolute',
    left: '10vw',
    top: '5vw',
    width: '5vw',
    pointerEvents: 'none'
  }
});

const scrollToRef = (ref) => ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });

const App = () => {

  const [openPrivacyPolicy, setOpenPrivacyPolicy] = React.useState(false);

  const handleOpenPrivacy = (e) => {
    e.preventDefault();
    setOpenPrivacyPolicy(true);
  };

  const handleClosePrivacy = () => {
    setOpenPrivacyPolicy(false);
  };

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
        <img src={`${cdnURL}/bg/rocks.png`} alt="asteroid" className={classes.asteroid} />
      </div>
      <div className={classes.contentLayer}>
        <img src={`${cdnURL}/moreinmotion.svg`} alt="samahan" className={classes.samahanLogo} />
        <div className={classes.spacing} />
        <Counter className={classes.counter} />
        <ConnectMindanao className={classes.centerAlign} />
        <Button className={classes.button} onClick={executeScroll}>Learn more</Button>
        <Visible md lg xl xxl>
          <img src={`${cdnURL}/bg/redplanet.png`} alt="planet" className={classes.redPlanet} />
        </Visible>
        <img src={`${cdnURL}/bg/earth.png`} alt="planet" className={classes.earth} />
        <img src={`${cdnURL}/bg/wowplanet.png`} alt="planet" className={classes.wowPlanet} />
        <Container style={{ marginTop: '10vw', width: '80%', position: 'relative' }}>
          <img src={`${cdnURL}/bg/comet.png`} alt="comet" className={classes.comet} />
          <Row>
            <Col sm={4}>
              <img style={{ pointerEvents: 'none' }} src={`${cdnURL}/ph-pink.png`} alt="ph" width="100%" />
            </Col>
            <Col sm={8}>
              <div ref={firstInfoRef} />
              <div className={classes.textContainer}>
                <h1 style={{ color: 'white' }}>The Philipine Internet Situation</h1>
                <p>Recent global speed tests showed that the Philippines has a fixed broadband download speed of <b>25.07</b> Megabits per second (Mbps), which is way lower than the global average of <b>81.46</b> Mbps. The Philippines also has a lower mobile download speed of <b>16.95</b> Mbps, compared to the global average of <b>34.51</b> Mbps</p>
                <SmallButton className={classes.readMoreButton} onClick={() => { window.open('https://connectmindanao.imfast.io/documents/The%20Philippine%20Internet%20Situation.pdf', '_blank'); }} fullWidth>Read more</SmallButton>
              </div>
            </Col>
          </Row>
        </Container>

        <Container style={{ marginTop: '15vw', width: '80%', minHeight: '30vw', position: 'relative' }}>
          <Row>
            <Hidden md lg xl xxl>
              <Col sm={4} style={{ position: 'relative' }}>
                <img style={{ width: '100%', pointerEvents: 'none' }} src={`${cdnURL}/ph-iso.png`} alt="ph" />
              </Col>
            </Hidden>
            <Col sm={8} style={{ zIndex: 2 }}>
              <div className={classes.textContainer}>
                <h1 style={{ color: 'white' }}>The Internet Situation in Mindanao</h1>
                <p>Although the Department of Information and Communications Technology (DICT) has many plans and has spent millions in developing the country’s communication and information infrastructure, good internet connection in Mindanao exists mostly in the major cities such as Davao, Cagayan de Oro, Butuan, and General Santos. Beyond these cities, however, cell sites are sparse, and therefore, a good internet connection is hard to find.</p>
                <SmallButton className={classes.readMoreButton} onClick={() => { window.open('https://connectmindanao.imfast.io/documents/The%20Internet%20Situation%20in%20Mindanao.pdf', '_blank'); }} fullWidth>Read more</SmallButton>
              </div>
            </Col>
            <Visible md lg xl xxl>
              <Col sm={4} style={{ position: 'relative' }}>
                <img style={{ position: 'absolute', width: '80vw', left: '-25vw', top: '-15vw', pointerEvents: 'none' }} src={`${cdnURL}/ph-iso.png`} alt="ph" />
              </Col>
            </Visible>
          </Row>
        </Container>

        <Container style={{ marginTop: '15vw', width: '80%' }}>
          <Row>
            <Hidden md lg xl xxl>
              <Col sm={4} style={{ position: 'relative' }}>
                <img src={`${cdnURL}/laptop.png`} style={{ pointerEvents: 'none' }} alt="ph" width="100%" />
              </Col>
            </Hidden>
            <Visible md lg xl xxl>
              <Col sm={4} style={{ position: 'relative' }}>
                <img src={`${cdnURL}/laptop.png`} style={{ position: 'absolute', pointerEvents: 'none', top: '-30%', left: '-35%' }} alt="ph" />
              </Col>
            </Visible>
            <Col sm={8}>
              <div className={classes.textContainer}>
                <h1 style={{ color: 'white' }}>Legislations and Challenges</h1>
                <p>While broadband satellite technology looks promising, key policies and regulatory obstacles to using the technology are still present. The process of acquiring a telecommunications franchise from the Philippine Congress is expensive and time-consuming, hindering the entry of competitors into the industry.</p>
                <SmallButton className={classes.readMoreButton} onClick={() => { window.open('https://connectmindanao.imfast.io/documents/Legislations%20and%20Challenges.pdf', '_blank'); }} fullWidth>Read more</SmallButton>
              </div>
            </Col>
          </Row>
        </Container>

        <Container style={{ marginTop: '20vw', width: '80%', minHeight: '30vw' }}>
          <Row>
            <Hidden md lg xl xxl>
              <Col sm={4} style={{ position: 'relative' }}>
                <img style={{ width: '100%', pointerEvents: 'none' }} src={`${cdnURL}/signal/satellite.png`} alt="ph" />
              </Col>
            </Hidden>
            <Col sm={8} style={{ zIndex: 2 }}>
              <div className={classes.textContainer}>
                <h1 style={{ color: 'white' }}>Satellite Internet</h1>
                <p>Satellite internet is a reliable way of getting internet access to remote places in the Philippines. As an archipelagic country, it is surprising that the Philippines is not taking advantage of satellite technology as much as its Asian neighbors. Countries such as Indonesia, Malaysia, and Thailand have launched several satellites of their own. Additionally, satellite internet is many times faster than dial-up internet, which might be a good alternative for people in remote areas.</p>
                <SmallButton className={classes.readMoreButton} onClick={() => { window.open('https://connectmindanao.imfast.io/documents/About%20Satellite%20Internet.pdf', '_blank'); }} fullWidth>Read more</SmallButton>
              </div>
            </Col>
            <Visible md lg xl xxl>
              <Col sm={4} style={{ position: 'relative' }}>
                <Signal />
              </Col>
            </Visible>
          </Row>
        </Container>

        <Container style={{ marginTop: '15vw', width: '80%', marginBottom: '5vw' }}>
          <Row>
            <Hidden md lg xl xxl>
              <Col sm={5}>
                <img src={`${cdnURL}/rocket/rocket.png`} style={{ pointerEvents: 'none',  display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '30%' }} alt="rocket" width="50%" />
              </Col>
            </Hidden>
            <Visible md lg xl xxl>
              <Col sm={5}>
                <Rocket />
              </Col>
            </Visible>
            <Col sm={7}>
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
                  label="Email"
                  fullWidth
                />
                <br />
                <a onClick={handleOpenPrivacy} href="/">Privacy Policy</a>
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

        <Dialog
          open={openPrivacyPolicy}
          onClose={handleClosePrivacy}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Privacy Policy"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              <p>Under the protection of the Republic Act 10173, also known as the Data Privacy Act, the information that you will be submitting in this form will be used for the Signature Drive of Connect Mindanao: Internet Para Sa Lahat. The following information will be asked from you: 1) Name, and  2) E-mail</p>
              <p>The information collected will only be used to quantify the number of people who are in support of this project. Moreover, only the number of respondents in this form will be used for the publicity materials of Connect Mindanao. The name and e-mail are collected for the purpose of reducing multiple submissions from the same respondent. </p>
              <p>Should you have any concern, you may send an email to samahan@addu.edu.ph with the subject, Connect Mindanao | Signature Drive .</p>
              <p>By submitting this form, you have read, understood and agreed to the terms indicated above.</p>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <SmallButton onClick={handleClosePrivacy} color="primary" autoFocus>
              Close
            </SmallButton>
          </DialogActions>
        </Dialog>

        <div className={classes.spacing} />
        <div className={classes.footer}>
          Copyright 2020 SAMAHAN Central Board | Developed by SAMAHAN Creative Team and SAMAHAN System Development<br/>
          Web Design by <a href="https://twitter.com/sonroyaalmerol" target="_blank" rel="noopener noreferrer">Son Roy Almerol</a> and <a href="https://twitter.com/jeyowthreeshwa" target="_blank" rel="noopener noreferrer">Joeshua Dequiña</a>
        </div>
      </div>
    </div>
  );
}

export default App;
