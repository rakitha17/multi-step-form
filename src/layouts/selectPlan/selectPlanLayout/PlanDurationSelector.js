import React from "react"
import SliderComponent from "../../../components/selectPlan/SliderComponent"

export default function PlanDurationSelector({
  selectedPlan,
  setSelectedPlan,
}) {
  return (
    <div
      className="PlanDurationSelector"
      style={{
        minWidth: "100%",
        padding: "10px 20%",
        borderRadius: "10px",
        backgroundColor: "hsl(231, 100%, 99%)",
        display: "flex",
        justifyContent: "center",
        boxShadow: "0 0px 1px rgb(0 0 0 / 0.2)",
      }}
    >
      <SliderComponent
        selectedPlan={selectedPlan}
        setSelectedPlan={setSelectedPlan}
      />
    </div>
  )
}
