import React, { useState } from 'react';
import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Divider,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { useNavigate } from 'react-router-dom';

const expandedWidth = 240;
const collapsedWidth = 72;

export default function DashboardNavbar({ isOpen, setIsOpen }) {
  const navigate = useNavigate();

  const navItems = [
    { label: 'AI Resume Analyzer', icon: <SmartToyIcon />, route: '/dashboard/analyzer' },
    { label: 'Resume Tracker', icon: <AssignmentTurnedInIcon />, route: '/dashboard/tracker' },
  ];

  return (
    <Drawer
      variant="permanent"
      anchor="left"
      open={isOpen}
      sx={{
        width: isOpen ? expandedWidth : collapsedWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: isOpen ? expandedWidth : collapsedWidth,
          transition: 'width 0.3s ease',
          boxSizing: 'border-box',
          overflowX: 'hidden',
        },
      }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: isOpen ? 'space-between' : 'center',
          px: 1,
        }}
      >
        {isOpen && <Typography variant="h6">Dashboard</Typography>}
        <IconButton onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <ChevronLeftIcon /> : <MenuIcon />}
        </IconButton>
      </Toolbar>
      <Divider />
      <List>
        {navItems.map(item => (
          <ListItemButton
            key={item.label}
            onClick={() => navigate(item.route)}
            sx={{
              justifyContent: isOpen ? 'initial' : 'center',
              px: 2.5,
              '&:hover': {
                backgroundColor: '#e0e0e0',
              },
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: isOpen ? 2 : 'auto',
                justifyContent: 'center',
              }}
            >
              {item.icon}
            </ListItemIcon>
            {isOpen && <ListItemText primary={item.label} />}
          </ListItemButton>
        ))}
      </List>
    </Drawer>
  );
}
