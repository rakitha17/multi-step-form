import React from "react"
import { useDispatch } from "react-redux"
//LINK - utils
import { useStyles } from "../../customHooks/useStyles"
import { setNextLocation, setPlan } from "../../store/loginFormActions"
//LINK - resources
import arcadeImage from "../../assets/images/icon-arcade.svg"
import advancedImage from "../../assets/images/icon-advanced.svg"
import proImage from "../../assets/images/icon-pro.svg"

import MainContainer from "../common/MainContainer"
import FormStepTitleDesc from "../../components/formGlobalComponents/FormStepTitleDesc"
import PlanCategoryRow from "./selectPlanLayout/PlanCategoryRow"
import PlanDurationSelector from "./selectPlanLayout/PlanDurationSelector"

const details = {
  title: "Select your plan",
  desc: "You have the option of monthly or yearly billing.",
}

const planCategories = [
  {
    planName: "Arcade",
    planImage: arcadeImage,
    alt: "arcade image",
    monthlyCost: 9,
  },
  {
    planName: "Advanced",
    planImage: advancedImage,
    alt: "advanced image",
    monthlyCost: 12,
  },
  {
    planName: "Pro",
    planImage: proImage,
    alt: "pro image",
    monthlyCost: 15,
  },
]

export default function SelectPlanLayout() {
  const { isMobileDevice } = useStyles()
  const [selectedPlan, setSelectedPlan] = React.useState({
    title: "Arcade",
    time: "monthly",
    cost: 9
  })
  const dispatch = useDispatch()

  const selectedPlanFunc = (value, cost) => {
    setSelectedPlan({
      title: value,
      time: selectedPlan.time,
      cost: cost
    })
  }

  React.useEffect(() => {
    dispatch(setPlan(selectedPlan))
    dispatch(setNextLocation("/pick-add-ons"))
  }, [selectedPlanFunc, dispatch])

  return (
    <MainContainer>
      <div
        className="SelectPlanLayout"
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
        <div style={{ marginBottom: "20px" }}>
          <PlanCategoryRow
            planCategories={planCategories}
            selectedPlan={selectedPlan}
            selectedPlanFunc={selectedPlanFunc}
          />
        </div>
        <div>
          <PlanDurationSelector
            selectedPlan={selectedPlan}
            setSelectedPlan={setSelectedPlan}
          />
        </div>
      </div>
    </MainContainer>
  )
}
