import React from "react"
//LINK - utils
import { useStyles } from "../../customHooks/useStyles"

import MainContainer from "../common/MainContainer"
import FormStepTitleDesc from "../../components/formGlobalComponents/FormStepTitleDesc"
import PlanDetails from "./finishingLayout/PlanDetails"
import { useSelector } from "react-redux"
import TotalPrice from "./finishingLayout/TotalPrice"
import { Typography } from "@mui/material"

const details = {
  title: "Finishing up",
  desc: "Double-check everything looks OK before confirming.",
}

export default function FinishingLayout() {
  const { isMobileDevice } = useStyles()

  const store = useSelector((store) => store)
  const { selectedPlan, selectedServices } = store

  return (
    <MainContainer>
      <div
        className="FinishingLayout"
        style={{
          padding: isMobileDevice && "20px",
          backgroundColor: "#fff",
          borderRadius: isMobileDevice ? "10px" : 0,
          display: "flex",
          flexDirection: "column",
          boxShadow: isMobileDevice ? "0 1px 2px rgb(0 0 0 / 0.2)" : 0,
        }}
      >
        {selectedPlan.title !== undefined ? (
          <>
            <div style={{ marginBottom: "20px" }}>
              <FormStepTitleDesc title={details.title} desc={details.desc} />
            </div>
            <div style={{ marginBottom: "20px" }}>
              <PlanDetails
                selectedPlan={selectedPlan}
                selectedServices={selectedServices}
              />
            </div>
            <div>
              <TotalPrice
                selectedPlan={selectedPlan}
                selectedServices={selectedServices}
              />
            </div>
          </>
        ) : (
          <Typography
            style={{ color: "hsl(354, 84%, 57%)", fontFamily: "ubunturegular" }}
          >
            Please select your plan first.
          </Typography>
        )}
      </div>
    </MainContainer>
  )
}
