import React from "react"
//LINK - utils
import { useStyles } from "../../../../customHooks/useStyles"

export default function FooterBar() {
  const { isMobileDevice } = useStyles()

  const globalStyles = {
    flexBasis: "200px",
    columnGap: "10px",
  }
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        columnGap: globalStyles.columnGap,
        justifyContent: "flex-end",
        backgroundColor: "#fff",

      }}
    >
      <div
        style={{
          flexBasis: isMobileDevice ? '100%' : `calc(100% - (${globalStyles.flexBasis} + ${globalStyles.columnGap}))`,
          backgroundColor: "#FFB6C1",
        }}
      >
        <div
          style={{
            width: isMobileDevice ? "100%" : "90%",
            padding: "20px",
            margin: "0 auto",
            backgroundColor: "#7B68EE",
            textAlign: "end",
          }}
        >
          right side
        </div>
      </div>
    </div>
  )
}
