import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import MenuItem from '@material-ui/core/MenuItem';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

import OrderTable from './OrderTable';
import InfoBar from "./InfoBar";
import RangeTimePicker from "./RangeTimePicker";
import TokenSelect from "./TokenSelect";



const useStyles = makeStyles((theme) => ({
    boxLayout:{
      height:"170px",
      direction:"column",
      alignItems:"center",
      justify:"center",
    }

}));





export default function OptionForm() {
  const classes = useStyles();


  
  return (
    <React.Fragment>
      <Box className={classes.boxLayout}>

      <Typography variant="h6" gutterBottom>
        OPTION ORDER ENTRY
      </Typography>

        <OrderTable/>
      </Box>

      <Typography variant="h6" gutterBottom>
        Token Selection
      </Typography>
        <TokenSelect />
      <br/>
        
        <Grid container alignContent="center" >
        <Grid item xs="12">
          <Typography variant="h6" gutterBottom>
            Execute Period
          </Typography>
          </Grid>

          <Grid container justify="center">
            <Box m='10px'>
            <RangeTimePicker />
            </Box>
          </Grid>
        </Grid>


        <Grid container xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="confirm" value="yes" />}
            label="confirm the information"
          />
        </Grid>
            <Box m={2}>
                <Grid>
                  <InfoBar/>
                </Grid>
            </Box>

    </React.Fragment>
  );
}
