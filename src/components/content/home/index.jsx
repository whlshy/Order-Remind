import React, { useState } from 'react'
import { Box, TextField, Tooltip, Typography } from '@mui/material'

const width = 500

export default function index() {
  const [value, setValue] = useState('')
  const [list, setList] = useState([])

  const addList = (str) => {
    let idx = list.findIndex(f => f == str)
    if (idx !== -1) {
      setList(list.filter(f => f !== str))
    } else {
      setList([...list, str])
    }
    setValue('')
  }

  return (
    <Box sx={{ p: 2, backgroundColor: "#7B1513", color: "#fff", flex: "1 1 auto", display: "flex" }}>
      <Box className="flex-1-1 flex flex-col">
        <Box sx={{ height: "35%" }}>
        </Box>
        <Box className="flex flex-col" sx={{ height: "65%" }}>
          <Box className="flex jcc aic" sx={{ fontWeight: "bolder", fontSize: "40px" }}>
            訂單號碼
          </Box>
          <Box
            sx={{ backgroundColor: "#fff", borderRadius: "20px", color: "#000", mt: 2, fontWeight: "bolder", fontSize: "40px", m: 2, ml: 4, mb: 4, }}
            className="flex-1-1"
          >
            <Box sx={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(120px, 1fr))" }}>
              {
                list?.map(d =>
                  <Tooltip title="點擊完成訂單">
                    <Typography
                      variant='span'
                      sx={{
                        m: 1, p: 1, borderRadius: "10px", cursor: "pointer", flex: "0",
                        "&:hover": { backgroundColor: "#e9e9e9" }
                      }}
                      className="flex" onClick={() => addList(d)}
                    >
                      {d}
                    </Typography>
                  </Tooltip>
                )
              }
            </Box>

          </Box>
        </Box>
      </Box>
      <Box sx={{ width: "600px", pt: 4 }} className="flex flex-col">
        <Box className="flex jcc aic" sx={{ fontWeight: "bolder", fontSize: "40px" }}>
          最新訂單號碼
        </Box>
        <Box className="flex jcc flex-1-1" sx={{ ml: 4, mr: 4 }}>
          <Box
            sx={{ backgroundColor: "#fff", borderRadius: "20px", color: "#000", width: "100%", height: width, mt: 2, fontWeight: "bolder", fontSize: "200px" }}
            className="flex jcc aic"
          >
            {list?.[list?.length - 1] || ""}
          </Box>
        </Box>
        <Box className="flex aic jce" sx={{ mr: 4, mb: 4 }}>
          <Tooltip title="輸入相同訂單編號可以消除訂單">
            <TextField
              variant="filled"
              label="訂單編號"
              value={value}
              onChange={e => setValue(e.target.value)}
              onKeyDown={e => e.keyCode == 13 && addList(e.target.value)}
              InputLabelProps={{
                style: { color: '#fff' },
              }}
              autoFocus
            />
          </Tooltip>
        </Box>
      </Box>
    </Box>
  )
}
