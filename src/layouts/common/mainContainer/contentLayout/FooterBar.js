import React from "react"
//LINK - utils
import { useStyles } from "../../../../customHooks/useStyles"
import NextButton from "../../../../components/common/footerBar/NextButton"

export default function FooterBar() {
  const { isMobileDevice } = useStyles()

  const globalStyles = {
    flexBasis: "200px",
    columnGap: "10px",
  }
  return (
    <div
      className="FooterBar"
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "flex-end",
        backgroundColor: isMobileDevice ? "#fff" : "transparent",
      }}
    >
      <div
        style={{
          flexBasis: isMobileDevice
            ? "100%"
            : `calc(100% - (${globalStyles.flexBasis} + ${globalStyles.columnGap}))`,
        }}
      >
        <div
          style={{
            width: isMobileDevice ? "100%" : "90%",
            padding: "20px",
            margin: "0 auto",
          }}
        >
          <NextButton />
        </div>
      </div>
    </div>
  )
}
