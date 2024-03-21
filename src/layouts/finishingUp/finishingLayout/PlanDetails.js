import React from "react"
import { Typography, styled } from "@mui/material"
import { NavLink } from "react-router-dom"
//LINK - utils
import { priceValueFormat } from "../../../utils/priceValueFormat"

const StyledTypography = styled(Typography)({
  color: "hsl(231, 11%, 63%)",
  fontFamily: "ubunturegular",
  margin: 0,
})

export default function PlanDetails({ selectedPlan, selectedServices }) {
  const [servicesOrder, setServicesOrder] = React.useState([])

  const arrangeServicesFunc = () => {
    let sortedArr = selectedServices.sort((item_0, item_1) => {
      return item_0.id - item_1.id
    })

    setServicesOrder(sortedArr)
  }

  React.useEffect(() => {
    arrangeServicesFunc()
  }, [])

  return (
    <>
      <style>
        {`
        #change-link:hover {
          color: hsl(243, 100%, 62%) !important
        }
      `}
      </style>
      <div
        className="PlanDetails"
        style={{
          padding: "20px",
          borderRadius: "10px",
          backgroundColor: "hsl(231, 100%, 99%)",
          boxShadow: "0 0px 1px rgb(0 0 0 / 0.2)",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span>
            <StyledTypography
              style={{
                color: "hsl(213, 96%, 18%)",
                fontFamily: "ubuntubold",
                textTransform: "capitalize",
              }}
            >
              {`${selectedPlan.title} (${selectedPlan.time})`}
            </StyledTypography>
            <NavLink
              id="change-link"
              to={"/select-your-plan"}
              style={{
                color: "hsl(231, 11%, 63%)",
                fontFamily: "ubunturegular",
                fontSize: ".9rem",
              }}
            >
              Change
            </NavLink>
          </span>
          <StyledTypography
            style={{
              color: "hsl(213, 96%, 18%)",
              fontFamily: "ubuntubold",
            }}
          >
            {selectedPlan.time === "monthly"
              ? `${priceValueFormat(selectedPlan.cost)}/mo`
              : `${priceValueFormat(selectedPlan.cost * 10)}/yr`}
          </StyledTypography>
        </div>
        <hr />
        {servicesOrder.length > 0 &&
          servicesOrder.map((item) => {
            return (
              <div
                key={item.id}
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <StyledTypography>{item.title}</StyledTypography>
                <StyledTypography
                  style={{
                    marginBottom: "10px",
                    color: "hsl(213, 96%, 18%)",
                    fontFamily: "ubunturegular",
                  }}
                >
                  {selectedPlan.time === "monthly"
                    ? `+${priceValueFormat(item.cost)}/mo`
                    : `+${priceValueFormat(item.cost * 10)}/yr`}
                </StyledTypography>
              </div>
            )
          })}
      </div>
    </>
  )
}
