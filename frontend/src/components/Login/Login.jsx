import {React, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Grid, Typography, SelectChangeEvent, TextField, FormControl, FormHelperText, RadioGroup, FormLabel, FormControlLabel, Button, Paper, Checkbox, InputAdornment, MenuItem, Select } from '@mui/material'
import { Close, Alert } from '@mui/icons-material'
import Social from './Social'
import { setUser } from '../../reducers/userSlice';
import UserService from '../../services/UserService'
import { useNavigate } from 'react-router-dom'

function Login({handleChange}) {

  const buttonBlack = {
    background: 'black',
    borderRadius: '99em',
    width: '100%',
    color: 'white',
    height: 40,
    padding: '0 30px',
    '&:hover': {
        background: 'white',
        color: 'black'
      }
    };

    const navigate = useNavigate();

    const paperStyle={padding :20,height:'73vh', margin:"0 auto"}
    const textFieldStyle = { marginBottom: 20 }
    const widthExpand = {width: '100%'}
    const dispatch = useDispatch();

    const [userIn, setUserIn] = useState({
      name: "",
      password: "",
    });
    const handleLogin = async () => {
      if(userIn.name != "" && userIn.password != ""){
        try{
          const res = await UserService.login(userIn);
          dispatch(setUser({
            name: res.email,
            password: res.password
          }))
          this.props.callbackModal()
          alert("User logged");
          navigate("/myCourses");
        } catch (error) {
          alert(error)
        } 
      }else{alert("Please enter the data");}
    }
    const handleChangeName = (e) => {
      setUserIn({
        ...userIn,
        name: e.target.value,
      });
    };

    const handleChangePassword = (e) => {
      setUserIn({
        ...userIn,
        password: e.target.value,
      });
    };

  return (
    <Grid>
    <Paper style={paperStyle}>
        <Grid container spacing={2} >
            <Grid container item xs={6} direction="column" marginTop={'10%'} >
                <form>
                   
                    <TextField fullWidth label='Username (Email Address)' onChange={handleChangeName} value={userIn.name} placeholder="Username (Email Address)" style={textFieldStyle}InputProps={{
                            endAdornment: (
                              <InputAdornment position="start">
                                <Close />
                              </InputAdornment>
                            ),
                          }} 
                    />
                    <TextField fullWidth label='Your Password' type="password" onChange={handleChangePassword} value={userIn.password} placeholder="Enter your password" style={textFieldStyle}InputProps={{
                            endAdornment: (
                              <InputAdornment position="start">
                                <Close />
                              </InputAdornment>
                            ),
                          }} 
                    />
                    <div>
                        <div style={widthExpand}>
                            <Button text="CONTINUE" style={buttonBlack} onClick={() => handleLogin()} >CONTINUE</Button>
                        </div>
                    </div>
                </form>
            </Grid>
            <Grid container item xs={6} direction="column" >
                <Social/>
            </Grid>
        </Grid>
       
    </Paper>
</Grid>
  )
}

export default Login