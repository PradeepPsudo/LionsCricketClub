import { Typography } from "@material-ui/core";
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import { withStyles } from '@material-ui/core/styles';
import {TournamentList} from '../Constants/TournmentList';
import ActionAreaCard from "../component/Card";
import { useState } from "react";
import TeamsList from "../component/TeamsList";


const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
});

function Tournament(props) {
  const classes={}
  const [tournament,setTournament] = useState("season2");

  const getSeasonDetails=(version)=>{
    if(version === "season1"){
      return <div style={{"color":"white"}}>Season1</div>
    } else if(version === "season2"){
      return null;
      // return <div  style={{"color":"white"}}>Season2</div>
    }
  }

  const setTournamentVersion =(tourVersion)=>{
    setTournament(tourVersion);
  }
  return(
    <div className="page">

    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader className="animatedDiv" component="div">See you all on 24th of September 2023 at Honnaganatti Ground</ListSubheader>
        </GridListTile>
        <div className="card-class">
        {TournamentList.map(tile => (
          <div className="tournamentVersion">
          <ActionAreaCard  title={tile} onClick={setTournamentVersion}/>
          </div>
        ))}
        </div>
        <TeamsList/>
      </GridList>
    </div>
    </div>
  )
  
}
// export default Tournament;
export default withStyles(styles)(Tournament);

