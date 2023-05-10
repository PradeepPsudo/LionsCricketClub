import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import { Typography } from '@material-ui/core';

function importAll(r) {
    return r.keys().map(r);
  }
  
  //const images = importAll(require.context('../assets', false, /\.(png|jpe?g|svg|JPG)$/));
 const images=[
    {
        default:"./images/assets/IMG_7957.JPG"
    },
    {
        default:"./images/assets/IMG_7962.JPG"
    },
    {
        default:"./images/assets/IMG_7963.JPG"
    },
    {
        default:"./images/assets/IMG_8002.JPG"
    },
    {
        default:"./images/assets/IMG_8003.JPG"
    },
    {
        default:"./images/assets/IMG_8012.JPG"
    },
    {
        default:"./images/assets/IMG_8177.JPG"
    },
    {
        default:"./images/assets/season1.jpeg"
    },
    {
        default:"./images/assets/season2.jpg"
    }
 ]
  debugger;

function Item(props)
{
    return (
        <Paper className="imageClass">
             <Typography className="lions-club-text zoom-in-out-box">Lions cricket club</Typography>
                 <img  className="imgClass" src={props.item.default}/>
            {/* <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>

            <Button className="CheckButton">
                Check it out!
            </Button> */}
        </Paper>
    )
}

function CarouselPanel(props)
{
    var items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!"
        },
        {
            name: "Random Name #2",
            description: "Hello World!"
        }
    ]

    return (
        <Carousel stopAutoPlayOnHover={false} interval="3000" animation="slide" duration="1000" autoPlay={true} className='carousel-container'>
            {/* {
                items.map( (item, i) => <Item key={i} item={item} /> )
            } */}
           
             {images.map((item,i)=>{
                return <Item key={i} item={item}/>
            })}
        </Carousel>
    )
}

export default CarouselPanel;

