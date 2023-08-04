import React from 'react'
import {Grid, Card, CardMedia, CardContent, Typography, CardActions, Button} from '@mui/material'
import ImageDefault from '../../assets/defaultImage.png'
import ButtonBlack from '../Buttons/ButtonBlack'

function CardCourse() {
  return (
        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <CardMedia
                component="img"
                sx={{
                // 16:9
                pt: '5%',
                }}
                image={ImageDefault}
                alt="random"
            />
            <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                    Title
                </Typography>
                <Typography>
                   Description
                </Typography>
                <Typography>
                   Rate
                </Typography>
                <Typography>
                   Rate
                </Typography>
            </CardContent>
            <CardActions>
                <ButtonBlack text="Enroll" />
            </CardActions>
        </Card>
  )
}

export default CardCourse