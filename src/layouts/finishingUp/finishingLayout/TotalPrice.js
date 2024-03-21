import { Typography, styled } from "@mui/material"
import React from "react"
import { priceValueFormat } from "../../../utils/priceValueFormat"

const StyledTypography = styled(Typography)({
  color: "hsl(231, 11%, 63%)",
  fontFamily: "ubunturegular",
  margin: 0,
})

export default function TotalPrice({ selectedPlan, selectedServices }) {
  let serviceTotal = 0

  selectedServices.forEach((item) => {
    serviceTotal = serviceTotal + item.cost
  })

  return (
    <div
      className="TotalPrice"
      style={{
        padding: "20px",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      {selectedPlan.time === "monthly" ? (
        <StyledTypography>Total (per month)</StyledTypography>
      ) : (
        <StyledTypography>Total (per year)</StyledTypography>
      )}
      <StyledTypography
        style={{
          color: "hsl(243, 100%, 62%)",
          fontFamily: "ubuntubold",
          fontSize: "1.3rem",
        }}
      >
        {selectedPlan.time === "monthly"
          ? `+${priceValueFormat(selectedPlan.cost + serviceTotal)}/mo`
          : `+${priceValueFormat((selectedPlan.cost + serviceTotal) * 10)}/yr`}
      </StyledTypography>
    </div>
  )
}
