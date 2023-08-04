import React from 'react'
import { Grid, Typography, SelectChangeEvent, TextField, FormControl, FormHelperText, RadioGroup, FormLabel, FormControlLabel, Button, Paper, Checkbox, InputAdornment, MenuItem, Select } from '@mui/material'
import { Close } from '@mui/icons-material'
import ButtonBlack from '../Buttons/ButtonBlack'
import Social from './Social'

function SignUp() {

    const paperStyle = { padding: 20, margin: "0 auto" }
    const textFieldStyle = { marginBottom: 20 }
    const widthExpand = {width: '100%'}
    const [country, setCountry] = React.useState('');
    

    const handleChange = (event: SelectChangeEvent) => {
        setCountry(event.target.value);
    };
    return (
        <Grid>
            <Paper style={paperStyle}>
                <Grid container spacing={2} >
                    <Grid container item xs={6} direction="column" >
                        <form>
                            <TextField fullWidth label='Name' placeholder="Full Name" style={textFieldStyle}
                                InputProps={{
                                    endAdornment: (
                                      <InputAdornment position="start">
                                        <Close />
                                      </InputAdornment>
                                    ),
                                  }} 
                            />
                            <TextField fullWidth label='Username (Email Address)' placeholder="Username (Email Address)" style={textFieldStyle}InputProps={{
                                    endAdornment: (
                                      <InputAdornment position="start">
                                        <Close />
                                      </InputAdornment>
                                    ),
                                  }} 
                            />
                            <TextField fullWidth label='Your Password' placeholder="Enter your password" style={textFieldStyle}InputProps={{
                                    endAdornment: (
                                      <InputAdornment position="start">
                                        <Close />
                                      </InputAdornment>
                                    ),
                                  }} 
                            />
                            <TextField fullWidth label='Confirm Password' placeholder="Confirm your password" style={textFieldStyle}InputProps={{
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
                                        value={country}
                                        onChange={handleChange}
                                        displayEmpty
                                        inputProps={{ 'aria-label': 'Without label' }}
                                        >
                                            <MenuItem value="">
                                                <em>Select your Country</em>
                                            </MenuItem>
                                            <MenuItem value={10}>Ten</MenuItem>
                                            <MenuItem value={20}>Twenty</MenuItem>
                                            <MenuItem value={30}>Thirty</MenuItem>
                                        </Select>
                                        <FormHelperText>Without label</FormHelperText>
                                    </FormControl>
                                </div>
                                <div style={widthExpand}>
                                    <ButtonBlack style={widthExpand} type='submit' variant='contained' text="CONTINUE" />
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