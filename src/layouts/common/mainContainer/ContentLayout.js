import React from "react"
//LINK - utils
import { useStyles } from "../../../customHooks/useStyles"
import UpperLayout from "./contentLayout/UpperLayout"
import FooterBar from "./contentLayout/FooterBar"

export default function ContentLayout({ children }) {
  const { isMobileDevice } = useStyles()
  return (
    <div
      className="ContentLayout"
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        position: "relative",
      }}
    >
      <div style={{ height: "fit-content" }}>
        <UpperLayout children={children} />
      </div>
      <div
        style={{
          height: "fit-content",
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
        }}
      >
        <FooterBar />
      </div>
    </div>
  )
}
