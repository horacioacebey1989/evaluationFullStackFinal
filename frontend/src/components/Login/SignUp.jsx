import {React, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Grid, Typography, SelectChangeEvent, TextField, FormControl, FormHelperText, RadioGroup, FormLabel, FormControlLabel, Button, Paper, Checkbox, InputAdornment, MenuItem, Select } from '@mui/material'
import { Close } from '@mui/icons-material'
import ButtonBlack from '../Buttons/ButtonBlack'
import Social from './Social'
import UserService from '../../services/UserService'
import ProfileService from '../../services/ProfileService'
import { setUser } from '../../reducers/userSlice';
import { setProfile } from '../../reducers/profileSlice'
import { useNavigate } from 'react-router-dom'

function SignUp() {

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

    const paperStyle = { padding: 20, margin: "0 auto" }
    const textFieldStyle = { marginBottom: 20 }
    const widthExpand = {width: '100%'}
    const [passwordConfim, setPasswordConfirm] = useState();
    const [data, setData] = useState();
    const dispatch = useDispatch();

    const [userIn, setUserIn] = useState({
      name: "",
      password: "",
    });

    const [profileIn, setProfileIn] = useState({
      fullName: "",
      userName: "",
      country: "",
    });

    const handleChangeFullName = (e) => {
      setProfileIn({
        ...profileIn,
        fullName: e.target.value,
      });
      setUserIn({
        ...userIn,
        name: e.target.value,
      });
    };

    const handleChangeUserName = (e) => {
      setProfileIn({
        ...profileIn,
        userName: e.target.value,
      });
    };

    const handleChangeCountry = (e) => {
      setProfileIn({
        ...profileIn,
        country: e.target.value,
      });
    };

    const handleChangePassword = (e) => {
      setUserIn({
        ...userIn,
        password: e.target.value,
      });
    };


    const handleChangePasswordConfirm = (e) => {
      setPasswordConfirm(e.target.value);
    };

    const registerProfile = async () =>{
      registerUser().then(getData => {
        const resProfile = ProfileService.addProfile({
          fullName: profileIn.fullName,
          userName: profileIn.userName,
          country: profileIn.country
        }, getData.id_user);
        if(resProfile){
          dispatch(setProfile({
            fullName: profileIn.fullName,
            userName: profileIn.userName,
            country: profileIn.country,
            user: getData.id_user,
          }))
          alert("User registred");
          navigate("/myCourses");
        }
      })
      .catch(err => {alert(err)});
    }   

    

    const registerUser = async () => {
      if(profileIn.fullName != "" && profileIn.userName !="" && userIn.password != ""){
        if(userIn.password == passwordConfim){
          try{
            const resUser =  await UserService.addUser(userIn);
            if(resUser.data){
                dispatch(setUser({
                  name: resUser.data.name,
                  password: resUser.data.password
                }))
              return resUser.data;
            }
          } catch (error) {
            alert(error)
          } 
        }else{(alert("Password doesnt match"));}
      }else{alert("Please enter the data");}
    }

    return (
        <Grid>
            <Paper style={paperStyle}>
                <Grid container spacing={2} >
                    <Grid container item xs={6} direction="column" >
                        <form>
                            <TextField fullWidth label='Name' placeholder="Full Name" onChange={handleChangeFullName} value={profileIn.fullname} style={textFieldStyle}
                                InputProps={{
                                    endAdornment: (
                                      <InputAdornment position="start">
                                        <Close />
                                      </InputAdornment>
                                    ),
                                  }} 
                            />
                            <TextField fullWidth label='Username (Email Address)' onChange={handleChangeUserName} placeholder="Username (Email Address)" value={profileIn.userName} style={textFieldStyle}InputProps={{
                                    endAdornment: (
                                      <InputAdornment position="start">
                                        <Close />
                                      </InputAdornment>
                                    ),
                                  }} 
                            />
                            <TextField fullWidth label='Your Password' type="password" onChange={handleChangePassword} placeholder="Enter your password" value={userIn.password} style={textFieldStyle}InputProps={{
                                    endAdornment: (
                                      <InputAdornment position="start">
                                        <Close />
                                      </InputAdornment>
                                    ),
                                  }} 
                            />
                            <TextField fullWidth label='Confirm Password' type="password" onChange={handleChangePasswordConfirm} placeholder="Confirm your password" value={passwordConfim} style={textFieldStyle}InputProps={{
                                    endAdornment: (
                                      <InputAdornment position="start">
                                        <Close />
                                      </InputAdornment>
                                    ),
                                  }} 
                            />
                            <div>
                                <div style={widthExpand}>
                                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                                        <Select
                                        value={profileIn.country}
                                        onChange={handleChangeCountry}
                                        displayEmpty
                                        inputProps={{ 'aria-label': 'Without label' }}
                                        >
                                            <MenuItem value="">
                                                <em>Select your Country</em>
                                            </MenuItem>
                                            <MenuItem value={"Argentina"}>Argentina</MenuItem>
                                            <MenuItem value={"Bolivia"}>Bolivia</MenuItem>
                                            <MenuItem value={"Brasil"}>Brasil</MenuItem>
                                        </Select>
                                        <FormHelperText>Without label</FormHelperText>
                                    </FormControl>
                                </div>
                                <div style={widthExpand}>
                                    <Button style={buttonBlack} onClick={() => registerProfile()} >CONTINUE</Button>
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

export default SignUp