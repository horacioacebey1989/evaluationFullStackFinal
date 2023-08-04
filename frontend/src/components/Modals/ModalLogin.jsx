import {React, useState} from 'react'
import { Modal, Box, Button, Typography, Tab, Tabs, Paper, styled, AppBar, IconButton, Toolbar } from '@mui/material'
import { Close } from '@mui/icons-material'
import Login from '../Login/Login';
import SignUp from '../Login/SignUp';

function ModalLogin({show, setShow}) {
    const [value,setValue]=useState(0)
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleClose = () => {
        setShow(false);
    };

    const paperStyle={width:740,margin:"20px auto"}
    const styleNav = {textAlign:'center'}
    const styleHeader = {borderBottom:'1px solid #F3F3F4', marginBottom:'20px', boxShadow:'none'}
    const styleHeaderTabs = {boxShadow:'none', backgroundColor:'transparent'}
    const styleTabs = {background:'#F3F3F4', color:'black', borderTop:'none', borderRadius: '99em'}
    const tabStyleButton = { borderRadius: '99em'};

    function TabPanel(props) {
        const { children, value, index, ...other } = props;
    
        return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
            <Box>
                <Typography>{children}</Typography>
            </Box>
            )}
        </div>
        );
    }

  return (
    <Modal
        open={show}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        visible={true} title={'Title'} footer={'Footer'}
      >
        <Paper elevation={20} style={paperStyle}>
            <AppBar position="static" color='inherit' style={styleHeader}>
                <Toolbar>
                    <IconButton size='large' edge='start' color='inherit' onClick={handleClose}>
                        <Close/>
                    </IconButton>
                    <Typography component='div' sx={{flexGrow:1}} style={styleNav}>
                        Log in or sign up  
                    </Typography>
                </Toolbar>
            </AppBar>
            <AppBar position="static" style={styleHeaderTabs}>
                <Tabs
                    value={value}
                    indicatorColor="inherit"
                    onChange={handleChange}
                    textColor="inherit"
                    variant="fullWidth"
                    aria-label="full width tabs example"
                    style={styleTabs}
                    sx={
                        {
                            "& button.Mui-selected": {background:'#F3F3F4', color:'black',  border:'2px solid black'}
                        }
                    }
                >
                    <Tab label="Sign In" style={tabStyleButton} />
                    
                    <Tab label="Sign Up" style={tabStyleButton} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                <Login handleChange={handleChange}/>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <SignUp/>
            </TabPanel>
        </Paper>
      </Modal>
  )
}

export default ModalLogin