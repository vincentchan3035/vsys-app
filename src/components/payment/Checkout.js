import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
// import Stepper from '@material-ui/core/Stepper';
// import Step from '@material-ui/core/Step';
// import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import OptionForm from './OptionForm';
import PaymentForm from './PaymentForm';
import Review from './Review';
import OptionSteps from './OptionSteps';
import {withRouter} from 'react-router-dom';

import { Steps } from 'antd';
const { Step } = Steps;




const useStyles = makeStyles((theme) => ({

  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 800,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

const steps = ['Order Info', 'Connect the wallect', 'Creating Payment', 'Review Your Order'];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <OptionForm />;
    case 1:
      return <PaymentForm />;
    case 2:
      return <OptionSteps />;
    case 3:
      return <Review />;
    default:
      throw new Error('Unknown step');
  }
}

const Checkout = (props) => {
  const { history} = props;
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleButtonClick = (URL)=>{
    history.push(URL);
  };

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <React.Fragment>
      <main className={classes.layout}>
        <Paper elevation={10} className={classes.paper}>
          <Typography component="h1" variant="h2" align="center" gutterBottom>
            Investment
          </Typography>
          <Steps current={activeStep} className={classes.stepper} size="small">
            {steps.map((label) => (
              <Step title={label}>
              </Step>
            ))}
            </Steps>

          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Thank you for your order.
                </Typography>
                <Typography variant="subtitle1">
                  Your order number is #2001539. We have emailed your order confirmation, and will
                  send you an update when your order has shipped.
                </Typography>
                <div className={classes.buttons}>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={()=>handleButtonClick('/dashboard')}
                    className={classes.button}
                  > Go to dashborad</Button>

                </div>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} className={classes.button}>
                      Back
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                  </Button>
                </div>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
      </main>
    </React.Fragment>
  );
}

export default withRouter(Checkout)