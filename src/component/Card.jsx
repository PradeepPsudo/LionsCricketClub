import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard({title,onClick}) {
  return (
    <Card sx={{ maxWidth: 345 }} >
      <CardActionArea onClick={()=>onClick(title.key)}>
        <CardMedia
          component="img"
          height="120"
          image={title.img}
          alt="green iguana"
          className="card-image-class"
          
        />
        <CardContent >
          <Typography gutterBottom variant="h5" component="div">

          </Typography>
          <Typography variant="body2" color="text.secondary">

          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}