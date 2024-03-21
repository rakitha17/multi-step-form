import React from "react"
import { Typography } from "@mui/material"
import { FormCheck } from "react-bootstrap"
//LINK - utils
import { priceValueFormat } from "../../utils/priceValueFormat"

export default function SingleService({
  title,
  desc,
  cost,
  selectedTime,
  index,
  actives,
}) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <style>
          {`
            .form-check-input {
              width: 1.2rem;
              height: 1.2rem
            }
            .form-check-input:checked {
              background-color: hsl(243, 100%, 62%);
              border-color: hsl(243, 100%, 62%)
            }
            .form-check-input:focus {
              border-color: hsl(243, 100%, 62%);
              box-shadow: none;
            }
          `}
        </style>
        <FormCheck
          style={{ marginRight: "20px" }}
          checked={actives.includes(index) && true}
          readOnly
        />
        <div>
          <Typography
            style={{
              margin: 0,
              color: "hsl(213, 96%, 18%)",
              fontFamily: "ubuntubold",
            }}
          >
            {title}
          </Typography>
          <Typography
            style={{
              margin: 0,
              color: "hsl(231, 11%, 63%)  ",
              fontFamily: "ubunturegular",
              fontSize: ".9rem",
            }}
          >
            {desc}
          </Typography>
        </div>
      </div>
      <div>
        <Typography
          style={{
            color: "hsl(243, 100%, 62%)",
            fontFamily: "ubuntumedium",
            fontSize: ".9rem",
          }}
        >
          {selectedTime === "monthly"
            ? `+${priceValueFormat(cost)}/mo`
            : `+${priceValueFormat(cost * 10)}/yr`}
        </Typography>
      </div>
    </div>
  )
}
