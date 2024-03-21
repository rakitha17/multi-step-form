import React from "react"
import { Typography } from "@mui/material"
//LINK - utils
import { priceValueFormat } from "../../utils/priceValueFormat"
import { useStyles } from "../../customHooks/useStyles"

export default function SinglePlan({ name, image, alt, cost, selectedPlan }) {
  const { isMobileDevice } = useStyles()

  return (
    <div
      className="SinglePlan"
      style={{
        height: "100%",
        display: "flex",
        flexDirection: isMobileDevice ? "row" : "column",
        alignItems: isMobileDevice ? "center" : "left",
      }}
    >
      <div
        style={{
          marginRight: isMobileDevice && "20px",
          marginBottom: !isMobileDevice && "50px",
        }}
      >
        <img src={image} alt={alt} width={40} height={40} />
      </div>
      <div style={{ width: "100px" }}>
        <Typography
          style={{
            color: "hsl(213, 96%, 18%)",
            fontFamily: "ubuntubold",
            fontSize: ".9rem",
          }}
        >
          {name}
        </Typography>
        <Typography
          style={{
            color: "hsl(231, 11%, 63%)",
            fontFamily: "ubunturegular",
            fontSize: ".8rem",
          }}
        >
          {selectedPlan.time === "yearly"
            ? `${priceValueFormat(cost * 10)}/yr`
            : `${priceValueFormat(cost)}/mo`}
        </Typography>
        {selectedPlan.time === "yearly" && (
          <Typography
            style={{
              color: "hsl(213, 96%, 18%)",
              fontFamily: "ubuntumedium",
              fontSize: ".7rem",
            }}
          >
            2 months free
          </Typography>
        )}
      </div>
    </div>
  )
}
