import React, { useEffect } from 'react';
import { Box, CircularProgress } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { ROUTE_LINKS } from "constants/links"

const HomePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(ROUTE_LINKS.myActivities.href)
  }, [navigate])

  return <Box sx={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "800px"
  }}>
    <CircularProgress />
  </Box>
}

export default HomePage;