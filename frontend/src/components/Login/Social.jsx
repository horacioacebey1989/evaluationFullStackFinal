import React from 'react'
import { Button, Grid, styled } from '@mui/material';
import { Facebook, LinkedIn, Instagram, Google } from '@mui/icons-material';

const ButtonSocial = styled(Button)({
    background: '#F3F3F4',
    borderRadius: '99em',
    color: 'black',
    height: 40,
    width: '100%',
    padding: '20px 30px',
    marginBottom: 20,

    '&:hover': {
        background: 'white',
        color: 'black'
      }
});
function Social() {
  return (
    <Grid>
        <ButtonSocial
            sx={{ borderRadius: 10 }}
            variant="contained"
            startIcon={<LinkedIn />}
        >
            Continue with LinkedIn
        </ButtonSocial>
        <ButtonSocial
            sx={{ borderRadius: 10 }}
            variant="contained"
            startIcon={<Facebook />}
        >
            Continue with Facebook
        </ButtonSocial>
        <ButtonSocial
            sx={{ borderRadius: 10 }}
            variant="contained"
            startIcon={<Instagram />}
        >
            Continue with Instagram
        </ButtonSocial>
        <ButtonSocial
            sx={{ borderRadius: 10 }}
            variant="contained"
            startIcon={<Google />}
        >
            Continue with Google
        </ButtonSocial>
    </Grid>
  )
}

export default Social