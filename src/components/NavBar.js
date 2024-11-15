import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemText, IconButton, Toolbar, AppBar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Tooltip from '@mui/material/Tooltip';


const categories = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];

export default function NavBar({ onCategorySelect }) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      {/* AppBar for Menu Icon and Title */}
      <AppBar position="fixed" color="red" style={{ zIndex: 1201 }}>
        <Toolbar>
          <IconButton color="inherit" edge="start" onClick={toggleDrawer} sx={{ mr: 2 }}>
            <MenuIcon/>
          </IconButton>
          <Typography variant="h6">NewsApp</Typography>
        </Toolbar>
      </AppBar>

      {/* Collapsible Drawer */}
      <Drawer
        variant="temporary"
        open={isDrawerOpen}
        onClose={toggleDrawer}
        ModalProps={{ keepMounted: true }} // Keeps drawer mounted for improved mobile UX
      >
      <Tooltip>
        <List sx={{ my: 8 }}>
          {categories.map((category) => (
            <Tooltip>
            <ListItem button key={category} onClick={() => { 
              onCategorySelect(category);
              toggleDrawer(); // Close drawer after selection
            }}>
              <ListItemText primary={category.toUpperCase()} />
            </ListItem></Tooltip>
          ))}
        </List>
        </Tooltip>
      </Drawer>
    </>
  );
}
