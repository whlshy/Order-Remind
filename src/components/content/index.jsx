import React from 'react'
import { Box } from '@mui/material'
import Home from './home'
import GoogleSheet from './GoogleSheet'

export default function index() {
  return (
    <Box>
      <Box sx={{ height: "100vh", display: 'flex' }}>
        <Home />
      </Box>
      <GoogleSheet />
    </Box>

  )
}
