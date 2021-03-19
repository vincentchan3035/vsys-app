import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import {withRouter} from 'react-router-dom';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import  logo  from "../assets/vsyslogo.png";


 


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    // title: {
    //   flexGrow: 1,
    //   width:'20%',
    //   height:'10%'
    // },
    navButton:{
        position: 'relative',
      },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    logo: {
      maxWidth: 150,
    },

  }));


const Header = (props) => {
    const { history} = props;
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
  
  
    const handleMenu = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleMenuClick  = (pageURL) => {
        history.push(pageURL);
      setAnchorEl(null);
    };

    const handleButtonClick = (URL)=>{
        history.push(URL);
    };



    return (
        <div className={classes.root}>
        <AppBar position="static" className={classes.appBar} color = '#FFF'>
          <Toolbar >

            <Box className={classes.root}>
            <img src={logo} alt="logo" className={classes.logo} />
            </Box>            

            <div className = {classes.navButton}>
            <Button color="inherit" className = {classes.menuButton} onClick = {()=>handleButtonClick('/')}>Home</Button>
            <Button color="inherit" className = {classes.menuButton}  onClick = {()=>handleButtonClick('/signin')}>Signin</Button>
            <Button color="inherit" className = {classes.menuButton}  onClick = {()=>handleButtonClick('/dashboard')}>Dashboard</Button>
            </div> 

        <div>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={handleMenu}>
            {/* <MenuIcon /> */}
            <AccountCircleIcon />
          </IconButton>
          <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={()=>setAnchorEl(null)}
              >
                <MenuItem onClick={()=>handleMenuClick('/')}>Home</MenuItem>
                <MenuItem onClick={()=>handleMenuClick('/signin')}>Signin</MenuItem>
                <MenuItem onClick={()=>handleMenuClick('/dashboard')}>Dashboard</MenuItem>
              </Menu>
            </div>
          </Toolbar>
        </AppBar>
      </div>  
    )
}

export default withRouter(Header)
