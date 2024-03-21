import React from "react"
import { NavLink } from "react-router-dom"
//LINK - utils
import { useStyles } from "../../../customHooks/useStyles"

import StepButton from "./navStep/StepButton"
import StepNameTitle from "./navStep/StepNameTitle"

export default function NavStep({ step, stepName, stepTitle, path }) {
  const { isMobileDevice } = useStyles()
  return (
    <NavLink to={path} style={{ textDecoration: "none" }}>
      <div
        className="NavStep"
        style={{
          display: isMobileDevice ? "block" : "flex",
          alignItems: "center",
        }}
      >
        <div
          style={{
            marginLeft: isMobileDevice ? "10px" : 0,
            marginRight: isMobileDevice ? "10px" : "20px",
          }}
        >
          <StepButton step={step} path={path} />
        </div>
        {!isMobileDevice && (
          <div>
            <StepNameTitle stepName={stepName} stepTitle={stepTitle} />
          </div>
        )}
      </div>
    </NavLink>
  )
}
