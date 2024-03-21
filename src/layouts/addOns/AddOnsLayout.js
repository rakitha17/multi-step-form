import React from "react"
//LINK - utils
import { useStyles } from "../../customHooks/useStyles"
import MainContainer from "../common/MainContainer"
import FormStepTitleDesc from "../../components/formGlobalComponents/FormStepTitleDesc"
import AddOnsServices from "./addOnsLayout/AddOnsServices"

const details = {
  title: "Pick add-ons",
  desc: "Add-ons help enhance your gaming experience.",
}

export default function AddOnsLayout() {
  const { isMobileDevice } = useStyles()

  return (
    <MainContainer>
      <div
        className="AddOnsLayout"
        style={{
          padding: isMobileDevice && "20px",
          backgroundColor: "#fff",
          borderRadius: isMobileDevice ? "10px" : 0,
          display: "flex",
          flexDirection: "column",
          boxShadow: isMobileDevice ? "0 1px 2px rgb(0 0 0 / 0.2)" : 0,
        }}
      >
        <div style={{ marginBottom: "20px" }}>
          <FormStepTitleDesc title={details.title} desc={details.desc} />
        </div>
        <div>
          <AddOnsServices />
        </div>
      </div>
    </MainContainer>
  )
}
