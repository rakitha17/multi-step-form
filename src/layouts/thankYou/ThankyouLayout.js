import React from "react"
//LINK - sources
import thankyouImage from "../../assets/images/icon-thank-you.svg"
//LINK - utils
import { useStyles } from "../../customHooks/useStyles"

import MainContainer from "../common/MainContainer"
import { Typography } from "@mui/material"

export default function ThankyouLayout() {
  const { isMobileDevice } = useStyles()
  return (
    <MainContainer>
      <div
        className="ThankyouLayout"
        style={{
          padding: isMobileDevice && "20px",
          backgroundColor: "#fff",
          borderRadius: isMobileDevice ? "10px" : 0,
          display: "flex",
          flexDirection: "column",
          boxShadow: isMobileDevice ? "0 1px 2px rgb(0 0 0 / 0.2)" : 0,
        }}
      >
        <div style={{ margin: "75px 0", textAlign: "center" }}>
          <div style={{ marginBottom: "20px" }}>
            <img src={thankyouImage} alt="thank you." width={75} height={75} />
          </div>
          <div>
            <Typography
              style={{
                color: "hsl(231, 11%, 63%)",
                fontFamily: "ubunturegular",
                margin: 0,
              }}
            >
              Thanks for confirming your subscription! We hope you have fun
              using our platform. if you ever need support, please feel free to
              email us at support @loremgaming.com.
            </Typography>
          </div>
        </div>
      </div>
    </MainContainer>
  )
}
