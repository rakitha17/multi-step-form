import React from "react"
//LINK - utils
import { useStyles } from "../../../../../customHooks/useStyles"

export default function FormSection({ children }) {
  const { isMobileDevice } = useStyles()
  return (
    <div
      className="FormSection"
      style={{
        width: isMobileDevice ? "100%" : "90%",
        padding: isMobileDevice ? "0px 20px 30px" : "30px 20px",
        margin: "0 auto",
      }}
    >
      {children}
    </div>
  )
}
