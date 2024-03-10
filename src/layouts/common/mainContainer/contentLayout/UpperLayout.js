import React from "react"
//LINK - utils
import { useStyles } from "../../../../customHooks/useStyles"
import NavigationSection from "./upperLayout/NavigationSection"
import FormSection from "./upperLayout/FormSection"

export default function UpperLayout({children}) {
  const { isMobileDevice } = useStyles()

  const globalStyles = {
    flexBasis: "200px",
    columnGap: "10px",
  }
  return (
    <div
      className="UpperLayout"
      style={{
        display: "flex",
        flexDirection: isMobileDevice ? "column" : "row",
        columnGap: globalStyles.columnGap,
      }}
    >
      <div
        style={{
          flexBasis: isMobileDevice ? 0 : globalStyles.flexBasis,
        }}
      >
        <NavigationSection />
      </div>
      <div
        style={{
          flexBasis: `calc(100% - (${globalStyles.flexBasis} + ${globalStyles.columnGap}))`,
          backgroundColor: "#FFB6C1",
        }}
      >
        <FormSection children={children} />
      </div>
    </div>
  )
}
