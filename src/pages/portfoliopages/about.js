import React from 'react'
import Paper from '@mui/material/Paper';
import { Box } from '@mui/material';
import { myTheme } from '@/Providers/ThemeContext';
import { useContext } from 'react';
export default function About() {
  
  const {theme}=useContext(myTheme)
  
  const projectedTheme=theme==='light'?'light-theme':theme==='dark'?'dark-theme':'funky-theme'

  return (
    <div>
        <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: '100%',
          height: '37%',
          padding:'2.5%'
        },
      }}
    >

        <Paper elevation={5} id="cardId" className={projectedTheme}>
            <h3>About Me</h3>
            <p>I'm a passionate developer with a strong drive for tackling complex challenges and continuous learning. My technical expertise spans a wide range of modern technologies, including React.js, Next.js, Node.js, MongoDB, Angular with TypeScript, AWS, and Python. I enjoy diving into new tech stacks and pushing my boundaries with innovative projects.</p>
            <p>I'm motivated by the thrill of problem-solving on platforms like CodeChef and the pursuit of daily growth. My goal is to one day build impactful solutions of my own, transforming ideas into reality. I believe that great web applications should be robust, user-friendly, and delivered with precision.</p>
            <p>I'm always eager to connect with opportunities that allow me to create high-quality products and further refine my skills.</p>
        </Paper>
    </Box>
    </div>
  )
}
