import React from 'react'
import Card from '@mui/material/Card';
import { IconButton } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import Typography from '@mui/material/Typography';
function CardsView({ cards, deleteCard }) {
  return (
    <div>

      {
        cards?.map((card, id) => {
          return (
            <div className='cards_container' key={id}>

              <Card style={{ width: 300 }} >

                <IconButton aria-label="Close" onClick={() => deleteCard(id)}>
                  <CloseOutlinedIcon />
                </IconButton>
                <CardContent>
                  <Typography variant="h5">Title:</Typography>
                  <Typography sx={{ fontSize: 14 }} color="text.secondary" >
                    {card.title}
                  </Typography>
                  <Typography sx={{ fontSize: 16 }}>Description:</Typography>
                  <Typography variant="body2">
                    {card.desc}
                  </Typography>
                </CardContent>
              </Card>
            </div>
          )

        })
      }

    </div>
  )
}

export default CardsView