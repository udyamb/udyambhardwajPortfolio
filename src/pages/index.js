import Head from "next/head";
import Image from "next/image";
import localFont from "next/font/local";
import styles from "@/styles/Home.module.css";
import { Button } from "@mui/material";
import About from "./portfoliopages/about";
import Grid from '@mui/material/Grid2';
import DisplayPic from "./portfoliopages/displayPic";
import Divider from "@mui/material/Divider";
import Box from '@mui/material/Box';
import Projects from "./portfoliopages/projects";
import { createContext, useContext } from "react";
import { myTheme } from "@/Providers/ThemeContext";

export const jsonData=createContext();
export const corpJson=createContext()
export default function Home({jsonFileData,corpJsonFile}) {


  const {theme}=useContext(myTheme)
  
  const projectedTheme=theme==='light'?'light-theme':theme==='dark'?'dark-theme':'funky-theme'
  return (
    <>
    <Box className={projectedTheme} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid size={{ xs: 6, md: 4 }}>
          {/* <h3><DisplayPic/></h3> */}
        </Grid>
        <Grid size={{ xs: 6, md: 8 }}>
          <About/>
        </Grid>
      </Grid>
      <Divider style={{border:'1px solid black'}} sx={{ opacity: 3.6 }} />
      <h2>Projects:</h2>
     <jsonData.Provider value={jsonFileData}>
<corpJson.Provider value={corpJsonFile}>

        <Projects/>
</corpJson.Provider>
     </jsonData.Provider>
     </Box>
    </>
  );
}


export async function getStaticProps()
{
  return({
    props:{
      jsonFileData:require('../../src/pages/JsonFiles/projectsInfo.json'),
    corpJsonFile:require('../../src/pages/JsonFiles/corpProjectsInfo.json')
    }
  })
}