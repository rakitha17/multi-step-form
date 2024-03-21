import React from "react"
//LINK - utils
import { useStyles } from "../../../../../customHooks/useStyles"
import NavStep from "../../../../../components/common/navigationSection/NavStep"

const navSteps = [
  {
    step: 1,
    stepName: "step 1",
    stepTitle: "your info",
    path: "/",
  },
  {
    step: 2,
    stepName: "step 2",
    stepTitle: "select plan",
    path: "/select-your-plan",
  },
  {
    step: 3,
    stepName: "step 3",
    stepTitle: "add-ons",
    path: "/pick-add-ons",
  },
  {
    step: 4,
    stepName: "step 4",
    stepTitle: "summary",
    path: "/finishing-up",
  },
]

export default function NavigationSection() {
  const { isMobileDevice } = useStyles()
  return (
    <div
      className="NavigationSection"
      style={{
        padding: "30px 20px",
        display: "flex",
        flexDirection: isMobileDevice ? "row" : "column",
        justifyContent: isMobileDevice && "center",
      }}
    >
      {navSteps.map((val, index) => {
        return (
          <div
            key={index}
            style={{ marginBottom: isMobileDevice ? 0 : "20px" }}
          >
            <NavStep
              step={val.step}
              stepName={val.stepName}
              stepTitle={val.stepTitle}
              path={val.path}
            />
          </div>
        )
      })}
    </div>
  )
}
