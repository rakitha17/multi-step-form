import React from "react"
//LINK - utils
import { useStyles } from "../../../customHooks/useStyles"

import SinglePlan from "../../../components/selectPlan/SinglePlan"

export default function PlanCategoryRow({
  planCategories,
  selectedPlan,
  selectedPlanFunc,
}) {
  const { isMobileDevice } = useStyles()
  const [active, setActive] = React.useState("")

  const handleClick = (event, cost, idx) => {
    let title = event.currentTarget.title

    if (event.isTrusted) {
      selectedPlanFunc(title, cost)
      setActive(idx)
    }
  }

  React.useEffect(() => {
    setActive(0)
  }, [])

  return (
    <div
      className="PlanCategoryRow"
      style={{
        display: "grid",
        gridTemplateColumns: isMobileDevice ? "auto" : "auto auto auto",
        gap: "10px",
      }}
    >
      {planCategories.map((val, index) => {
        return (
          <div
            key={index}
            title={val.planName}
            onClickCapture={(e) => handleClick(e, val.monthlyCost, index)}
            onMouseDown={(e) => e.preventDefault()}
            style={{
              overflow: "hidden",
              backgroundColor:
                active === index ? "hsl(231, 100%, 99%)" : "transparent",
              border:
                active === index
                  ? "1px solid hsl(243, 100%, 62%)"
                  : "1px solid hsl(229, 24%, 87%)",
              padding: "10px",
              borderRadius: "10px",
              cursor: "pointer",
              boxShadow: "0 0px 1px rgb(0 0 0 / 0.2)",
            }}
          >
            <SinglePlan
              name={val.planName}
              image={val.planImage}
              alt={val.alt}
              cost={val.monthlyCost}
              selectedPlan={selectedPlan}
            />
          </div>
        )
      })}
    </div>
  )
}
