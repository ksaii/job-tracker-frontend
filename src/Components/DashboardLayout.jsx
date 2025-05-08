import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import DashboardNavbar from '../components/DashboardNavbar';
import { Box, Toolbar } from '@mui/material';

export default function DashboardLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const drawerWidth = isSidebarOpen ? 240 : 72;

  return (
    <Box sx={{ display: 'flex' }}>
      <DashboardNavbar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          ml: `${drawerWidth}px`,
          transition: 'margin 0.3s ease',
          width: `calc(100% - ${drawerWidth}px)`,
        }}
      >
        <Toolbar />
        <Outlet /> {/* <-- Where /dashboard/analyzer or /dashboard/tracker shows up */}
      </Box>
    </Box>
  );
}
