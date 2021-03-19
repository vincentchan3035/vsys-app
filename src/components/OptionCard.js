import React from 'react';
import { makeStyles,withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import {withRouter} from 'react-router-dom';

import { List } from 'antd';



const data = [
  {
    label:'Type',
    value:'CALL'
  },
  {
    label:'APY',
    value:'8.23%'
  },
  {
    label:'Quantity',
    value:'3'
  },
];




const useStyles = makeStyles({
  root: {
    marginBottom: 10,
  },
  cardColor:{
  },

  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 5,
  },
  margin:{
    margin:'10px',
  },
  cardActionColor: {
    backgroundColor: '#f5f5f5',
  },
});


const ColorButton = withStyles(() => ({
  root: {
    fullWidth:false,
    color: '#000000',
    backgroundColor: '#ffb74d',
    '&:hover': {
      backgroundColor: "#c66900",
      color: '#FFFFFF',
    },
  },
}))(Button);



function generate(element) {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    }),
  );
}





const OptionCard = (props) => {
  const classes = useStyles();
  const { history} = props;

  const handleButtonClick = (URL)=>{
    history.push(URL);
};



  return (
    <div>
      <br></br>
      <br></br>

      <Card className={classes.root} elevation = {3}>
        <CardActionArea>
      <CardContent className={classes.cardColor}>
        <Grid container spacing={2} >
      
          {/* <Grid item xs="12" >
              <Typography className={classes.title} color="textSecondary" gutterBottom align="center">
                Option {props.id}
              </Typography>
            </Grid> */}
            <Grid item xs="12">
              <Typography variant="caption">
                Stike Price:
              </Typography>
                <Typography className={classes.pos} variant="h5" align="left">
                 {props.price}
              </Typography>
            </Grid>


            <Grid xs={12} item>
            <List
            bordered
            dataSource={data}
            renderItem={item => (
              <List.Item>
                <Grid container>
                  <Grid item xs={6}><Typography variant="button">{item.label}</Typography></Grid>
                  <Grid item xs={6} align="right"><Typography variant="subtitle2">{item.value}</Typography></Grid>
                </Grid>
              </List.Item>
            )}
          />
            </Grid>


        </Grid>

      </CardContent>
      </CardActionArea>

      <CardActions className = {classes.cardActionColor} >
        <Grid container justify='center' >

          <ColorButton variant="contained" color="primary" 
          fullWidth = {false}	 
          className={classes.margin}
          onClick = {()=>handleButtonClick('/payment')}
          >
            Investment     
          </ColorButton>
          
        </Grid>
      </CardActions>
    </Card>
    </div>
  );
}

export default withRouter(OptionCard)
