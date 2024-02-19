import React from 'react'
import { Box } from '@mui/material'
import Home from './home'

export default function index() {
  return (
    <Box sx={{ height: "100vh", display: 'flex' }}>
      <Home />
    </Box>
  )
}
