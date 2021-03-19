import React,{useState} from "react";
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';


const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

  
  const Signup = () => {
      
    const classes = useStyles();
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [conPassword, setConPassword] = useState("");
    
    


    const handleRegister = (event)=> {
        if(name === ""){
           alert('Input fields cannot be empty');
        }else{
            if(password === conPassword){
                alert('UserName: ' + name + ' Password: ' + password + ' Confirm password: ' + conPassword);
            }else if (password !== conPassword){
                alert('Please enter the password again');
            }
        }
        event.preventDefault();
    };




      return (

        <Container component = "main" maxWidth = "xs">
            <CssBaseline/>
            <div className={classes.paper}>
            <form onSubmit = {handleRegister} className = {classes.form} noValidate>
            <Typography component = "h1" variant = "h5" >Sign Up </Typography>
                <Grid container spacing = {2}>
                    <Grid item xs = {12}>
                        <TextField
                            autoComplete = "UserName"
                            name = "User Name"
                            variant = "outlined"
                            required
                            fullWidth
                            id = "UserName"
                            label = " User Name"
                            autoFocus
                            value = {name}
                            onChange = {(event)=>setName(event.target.value)}
                        />
                    </Grid>
                    <Grid item xs = {12}>
                        <TextField
                            variant = "outlined"
                            required
                            fullWidth
                            name = "Password"
                            label = "Password"
                            type = "password"
                            id = "password"
                            autoComplete = "current-password"
                            value = {password}
                            onChange = {(event)=>setPassword(event.target.value)}

                        />
                    </Grid>
                    <Grid item xs = {12}>
                        <TextField
                            variant = "outlined"
                            required
                            fullWidth
                            name = "conPassword"
                            label = "Confirm Password"
                            type = "password"
                            id = "conPassword"
                            autoComplete = "current-conPassword"
                            value = {conPassword}
                            onChange = {(event)=>setConPassword(event.target.value)}
                        />
                    </Grid>
                </Grid>

                <Button 
                type  = "submit" 
                fullWidth
                variant = "contained" 
                color = "primary" 
                className = {classes.submit}
                value = "Register"
                >
                    Register
                </Button>
                <Grid container justify = "flex-end">
                    <Grid item>
                        <Link href="#" variant="body2">
                            Sign in
                        </Link>
                    </Grid>
                </Grid>         
            </form>

            </div>
        </Container>
      )
  }
  
  export default Signup
  


