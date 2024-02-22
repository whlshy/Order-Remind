import React, { useState, useEffect } from 'react'
import { Box, TextField, Button } from '@mui/material'
import { useQuery, useMutation } from '@tanstack/react-query'
import { setGoogleSheet } from '../../apis/account'
import useAppStore from '../../store/app'

export default function GoogleSheet(props) {
  const [value, setValue] = useState("")
  const [id, setId] = useState("")
  const { list } = useAppStore()

  const setGoogleSheetApi = useQuery({
    queryKey: ['setGoogleSheet', list],
    queryFn: () => setGoogleSheet({ id, list }),
    enabled: id !== "",
  })

  return (
    <Box sx={{ backgroundColor: "#e1e1e1", p: 2 }} className="flex aic">
      <TextField
        variant="filled"
        label="部署ID"
        value={value}
        onChange={e => setValue(e.target.value)}
        onKeyDown={e => e.keyCode == 13 && setId(e.target.value)}
      />
      <Button sx={{ ml: 2 }} variant='contained' onClick={() => setId(value)}>
        連結
      </Button>
      <Button sx={{ ml: 2 }} variant='contained' color="error" onClick={() => (setId(""), setValue(""))}>
        取消
      </Button>
      <Box sx={{ ml: 2 }}>
        {setGoogleSheetApi?.data?.body?.m}
      </Box>
    </Box>
  )
}
