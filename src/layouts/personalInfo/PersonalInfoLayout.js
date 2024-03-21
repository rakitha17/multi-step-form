import React from "react"
//LINK - utils
import { useStyles } from "../../customHooks/useStyles"
import MainContainer from "../common/MainContainer"
import FormStepTitleDesc from "../../components/formGlobalComponents/FormStepTitleDesc"
import AllInputs from "../../components/personalInfo/AllInputs"

const details = {
  title: "Personal info",
  desc: "Please provide your name, email, address and phone number.",
}

export default function PersonalInfoLayout() {
  const { isMobileDevice } = useStyles()
  return (
    <MainContainer>
      <div
        className="PersonalInfoLayout"
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
          <AllInputs />
        </div>
      </div>
    </MainContainer>
  )
}
