import React from "react"
//LINK - utils
import { useStyles } from "../../customHooks/useStyles"
//LINK - sources
import desktopImage from "../../assets/images/bg-sidebar-desktop.svg"
import mobileImage from "../../assets/images/bg-sidebar-mobile.svg"
import ContentLayout from "../common/mainContainer/ContentLayout"

export default function MainContainer({ children }) {
  const { isMobileDevice } = useStyles()

  const globalStyles = {
    padding: "10px",
  }

  return (
    <div
      className="MainContainer"
      style={{
        width: isMobileDevice ? "100%" : "950px",
        height: isMobileDevice ? "100vh" : "500px",
        padding: isMobileDevice ? 0 : globalStyles.padding,
        borderRadius: isMobileDevice ? 0 : "10px",
        position: "relative",
        // backgroundColor: "#90EE90",
        boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
      }}
    >
      {
        <img
          src={isMobileDevice ? mobileImage : desktopImage}
          alt="background svg"
          style={{
            width: isMobileDevice ? "inherit" : "200px",
            height: isMobileDevice
              ? "100%"
              : `calc(100% - 2*${globalStyles.padding})`,
            objectFit: isMobileDevice ? "contain" : "cover",
            objectPosition: isMobileDevice ? "left top" : "center",
            borderRadius: isMobileDevice ? 0 : "10px",
            position: "absolute",
            zIndex: 1,
          }}
        />
      }
      <div
        style={{
          width: "100%",
          height: "100%",
          // backgroundColor: "#fff",
          position: "relative",
          zIndex: 2,
        }}
      >
        <ContentLayout children={children} />
      </div>
    </div>
  )
}

//NOTE - sample
/* backgroundImage: isMobileDevice ? `url(${mobileImage})` : `url(${desktopImage})`,
backgroundSize: isMobileDevice ? 'contain' : '200px 100%',
backgroundPosition: 'left center',
backgroundRepeat: 'no-repeat' */
/* <Grid
      container
      padding={isMobileDevice ? 0 : 2}
      width={isMobileDevice ? "100%" : "90%"}
      height={"600px"}
      overflow={"hidden"}
      style={{
        backgroundColor: "#fff",
        borderRadius: isMobileDevice ? 0 : "20px",
        boxShadow: "0 3px 10px rgb(0, 0, 0, 0.2)",
      }}
    >
      <Grid item xs={12} md={3}>
        <div
          style={{
            minHeight: "100%",
            backgroundImage: isMobileDevice
              ? `url(${mobileImage})`
              : `url(${desktopImage})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            backgroundSize: "cover",
            objectFit: "cover",
            borderRadius: isMobileDevice ? 0 : "10px",
          }}
        >
          image
        </div>
      </Grid>
      <Grid item xs={12} md={9}>
        content
      </Grid>
    </Grid> */
