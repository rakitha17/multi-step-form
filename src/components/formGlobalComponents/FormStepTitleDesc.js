import { Typography } from "@mui/material"
import React from "react"

export default function FormStepTitleDesc({ title, desc }) {
  return (
    <div className="StepTitleDesc">
      <Typography
        style={{
          color: "hsl(213, 96%, 18%)",
          fontFamily: "ubuntubold",
          fontSize: "1.5rem",
        }}
      >
        {title}
      </Typography>
      <Typography
        style={{
          color: "hsl(231, 11%, 63%)",
          fontFamily: "ubunturegular",
          fontSize: ".9rem",
        }}
      >
        {desc}
      </Typography>
    </div>
  )
}
