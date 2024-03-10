import { Typography } from "@mui/material"
import React from "react"

export default function StepNameTitle({ stepName, stepTitle }) {
  return (
    <div>
      <Typography
        style={{
          padding: 0,
          margin: 0,
          color: 'hsl(231, 11%, 63%)',
          fontFamily: "ubunturegular",
          fontSize: ".7rem",
        }}
      >
        {stepName.toUpperCase()}
      </Typography>
      <Typography
        style={{
          padding: 0,
          margin: 0,
          color: '#fff', 
          fontFamily: "ubuntumedium",
          fontSize: ".8rem",
        }}
      >
        {stepTitle.toUpperCase()}
      </Typography>
    </div>
  )
}
