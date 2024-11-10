import React, { useContext } from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { myTheme } from '@/Providers/ThemeContext';

export default function Header() {

    const {theme,changeTheme}=useContext(myTheme)

    const handleChange=(e)=>{
        changeTheme(e.target.value)
    }

  return (
    
        <Box sx={{ maxWidth: '20%', marginTop:'2%',marginLeft:'2%',backgroundColor: 'white',
            '&:hover': {
              backgroundColor: 'pink',
              opacity: [0.9, 0.8, 0.7],
            } }}>
      <FormControl fullWidth>
        <InputLabel >{theme}</InputLabel>
        <Select
        value={theme}
          onChange={handleChange}
        >
          <MenuItem value={'light'}>Light</MenuItem>
          <MenuItem value={'dark'}>Dark</MenuItem>
          <MenuItem value={'funcky'}>Funcky</MenuItem>
        </Select>
      </FormControl>
    </Box>

  )
}
