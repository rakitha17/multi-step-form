import React from "react"
//LINK - utils
import { useStyles } from "../../../../../customHooks/useStyles"

export default function FormSection({children}) {
  const { isMobileDevice } = useStyles()
  return (
    <div
      className="FormSection"
      style={{
        width: isMobileDevice ? "100%" : "90%",
        padding: "30px 20px",
        margin: "0 auto",
        backgroundColor: "#7B68EE",
      }}
    >
      {children}
    </div>
  )
}
