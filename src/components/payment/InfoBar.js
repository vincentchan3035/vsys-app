import React from 'react';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}


const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
    },
  }));

const InfoBar = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Alert severity="warning">
              WARNING! Investment has Risk
              <p>
                If the price of BTC is HIGHER than XXX, you might gain.
                If the price of BTC is LOWER than XXX, you might Lose.
              </p>
            </Alert>
        </div>
    )
}

export default InfoBar
