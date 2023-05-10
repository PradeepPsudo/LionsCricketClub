import React,{useState} from 'react';
import { Typography } from "@material-ui/core";
import Download from "./Download";

function About() {
  const  [isDownload, setIsDownload] = useState(false);

  const clickHandler =()=>{
    setIsDownload(true);
  }
  // return <Typography>About us page</Typography>;
  return <div className="page">
      <Typography className="font-colour">About us page</Typography>;
      <button onClick={clickHandler}>download</button>
      {isDownload && <Download/>}
  </div>
}
export default About;
