import OptionCard from './OptionCard';
import Grid from '@material-ui/core/Grid';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
// import Divider from '@material-ui/core/Divider';
import { Paper } from '@material-ui/core';



const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    // landingBackground:{
    //     backgroundImage: `url(${HomeImage})`,
    //     width: "auto",
    //     backgroundColor:"#fafafa",
    //     height:"400px",
    //     backgroundPosition:"center",
    //     backgroundRepeat:"no-repeat",
    //     backgroundSize:"50%",
    //     position:"relative",
    //     display:"flex",
    //     justifyContent:"center",
    //     alignItems:"center",
    //     color:"#ff8837",
    //     fontSize:"5rem",
    // },
    contentPaper:{
        width: 'auto',
        height:'auto',
        padding:theme.spacing(3),
    }
  }));



const Contents = () => {
    const classes = useStyles();

    return (
        <div>

        <Paper className={classes.contentPaper} elevation={0}>
        <Typography variant="h3" align ='center'>
            Available Options
        </Typography>

        <Grid container justify="center">
        <Grid item xs={12} sm ={10} >  
        <Grid container >
            <Grid item xs={12} >
                <Grid container spacing={8}>
                {[0, 1, 2,3,4,5,6,7,8].map((value) => (
                    <Grid key={value} item xs = {4}>
                    <OptionCard price={4000} id={value} />
                    </Grid>
                ))}
                </Grid>
            </Grid>
            </Grid>


        </Grid>
      </Grid>

        </Paper>

        </div>
    )
}

export default Contents
