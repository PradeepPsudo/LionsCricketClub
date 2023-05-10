import { Typography } from '@material-ui/core';
import React from 'react';

const DisplayImage = ({playpalList})=>{
    return(
        <>
            <div className="playpal-container">
                {playpalList.map((playpal)=>{

                  return(  <div class="container">
                        <img src={playpal.image} alt="playpal.name" class="image"/>
                        <div class="overlay">
                            <div class="text">{playpal.content}</div>
                        </div>
                        <Typography style={{"color":"white","text-align": "center"}}>{playpal.name}</Typography>
                    </div>
                  )

                })}
            </div>
        </>
    )
}

export default DisplayImage;