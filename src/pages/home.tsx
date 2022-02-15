import { Box, Button } from "@mui/material"
import { useTheme } from "@mui/system";
import React from "react"


export function Home() : JSX.Element {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: 'flex',
        height: '100vh',
        width: '100vw',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.palette.common.white,
      }}
    >
      <Button
        color='primary'
        variant='contained'
        size="large"
        sx={{
          borderRadius: 1
        }}
      >
        Hey There!!
      </Button>
    </Box>
  )
}