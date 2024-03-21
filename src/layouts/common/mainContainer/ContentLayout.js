import React from "react"
import UpperLayout from "./contentLayout/UpperLayout"
import FooterBar from "./contentLayout/FooterBar"
import { useLocation } from "react-router"

export default function ContentLayout({ children }) {
  const location = useLocation()

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
      <div style={{ flex: 8, overflow: "hidden" }}>
        <UpperLayout children={children} />
      </div>
      {location.pathname !== "/thank-you" && (
        <div
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
          }}
        >
          <FooterBar />
        </div>
      )}
    </div>
  )
}
