import { React, useState } from 'react'
import { AppBar, Toolbar, IconButton, Typography, Stack, Button } from '@mui/material'
import { DonutLarge } from '@mui/icons-material'
import { Link, NavLink} from 'react-router-dom'
import ModalLogin from '../Modals/ModalLogin'

const NavBar = () => {
    const [show, setShow] = useState(false);
    const showModal = () => {
        setShow(true);
    }
    const callbackModal = () => {
        this.setState({ setShow: false });
     }
    const styleNav = {textAlign:'center'}
    return (
        <AppBar position='static' color='inherit'>
            <Toolbar>
                <IconButton size='large' edge='start' color='inherit' aria-label='logo'>
                    <DonutLarge/>
                    LOGO
                </IconButton>
                <Typography variant='h3' component='div' sx={{flexGrow:1}} style={styleNav}>
                    <Button style={{textTransform: 'none'}} color='inherit'>Available Courses</Button>
                    <Button style={{textTransform: 'none'}} color='inherit'>Continuing Education</Button>
                    <Button style={{textTransform: 'none'}} color='inherit'>My Courses</Button>
                    <Button style={{textTransform: 'none'}} color='inherit'>Community</Button>
                </Typography>
                <Stack direction='row' spacing={2} >
                    <Button style={{textTransform: 'none'}} variant='contained' color='error' onClick={showModal}>Register or Login</Button>
                </Stack>
            </Toolbar>
            <ModalLogin show={show} setShow={(bool) => setShow(bool)} />
        </AppBar>

    )
}

export default NavBar;