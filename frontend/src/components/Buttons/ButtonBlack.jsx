import React from 'react'
import { Button, styled } from '@mui/material'

const MyButton = styled(Button)({
    background: 'black',
    borderRadius: '99em',
    color: 'white',
    height: 40,
    padding: '0 30px',
    '&:hover': {
        background: 'white',
        color: 'black'
      }
});

function ButtonBlack(props) {
  return (
    <MyButton>{props.text}</MyButton>
  )
}

export default ButtonBlack