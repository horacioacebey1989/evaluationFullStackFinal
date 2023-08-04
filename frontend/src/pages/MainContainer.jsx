import React from 'react'
import { Container, Grid } from '@mui/material'
import CardCourse from '../components/CardCourse/CardCourse'

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function MainContainer() {
  return (
    <Container sx={{ py: 8 }} maxWidth="md">
        <Grid container spacing={4}>
            {cards.map((card) => (
                <Grid item key={card} xs={12} sm={6} md={4}>
                    <CardCourse/>
                </Grid>
            ))}
        </Grid>
    </Container>
  )
}

export default MainContainer