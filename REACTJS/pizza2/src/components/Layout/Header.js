import React from 'react'
import { NavLink } from "react-router-dom";
import LocalPizzaIcon from '@mui/icons-material/LocalPizza';
import { Box } from '@mui/material';

const Header = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", bgcolor: "white", color: "red", p: 1 }}>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <LocalPizzaIcon />
        <h1>PIZZA HUT</h1>
      </Box>
      <Box sx={{
        textAlign: 'right',
        my: 1,
        "& svg": {
          fontSize: "60px",
          cursor: "pointer",
          mr: 1,
        },
        "& svg:hover": {
          color: "goldenrod",
        },
      }}>
         <ul style={{ listStyleType: 'none', margin: 0, padding: 0 }}>
          <li style={{ display: 'inline-block', margin: '0 10px' }}>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li style={{ display: 'inline-block', margin: '0 10px' }}>
            <NavLink to={"/menu"}>Menu</NavLink>
          </li>
          <li style={{ display: 'inline-block', margin: '0 10px' }}>
            <NavLink to={"/about"}>About</NavLink>
          </li>
          <li style={{ display: 'inline-block', margin: '0 10px' }}>
            <NavLink to={"/contact"}>Contact</NavLink>
          </li>
        </ul>
      </Box>
    </Box>
  )
}

export default Header
