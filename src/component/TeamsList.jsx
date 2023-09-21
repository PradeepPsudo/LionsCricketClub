import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {TournamentTeamList} from "../Constants/TournmentList"
export default function TeamsList() {
  return (
    <div className="team-list-container">
        <span className="glowing-text">
        Here is the details of super Eight teams
        </span>
        {TournamentTeamList.map((team)=>{
            return(
                <Accordion className="accordion-visual">
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  className="accordion-header"
                >
                  <Typography>{team.name}</Typography>
                </AccordionSummary>
                <AccordionDetails className="player-name">
                    <img src={team.image} className="team-name-image"></img>
                    {team.players.map((name)=>{
                        return(<p>{name}</p>)
                    })}
                  {/* <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                  </Typography> */}
                </AccordionDetails>
              </Accordion>
            )
        })}
     
    </div>
  );
}
