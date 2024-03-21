import { Link, styled } from "@mui/material"
import React from "react"
import Button from "react-bootstrap/Button"
import { useDispatch, useSelector } from "react-redux"
import { useLocation } from "react-router"
import { NavLink } from "react-router-dom"
//LINK - utils
import {
  setNextBtnClickCount,
  setNextBtnDefaultCount,
  setConfrimedStatus,
  // setNextLocation,
} from "../../../store/loginFormActions"

const StyledLink = styled(Link)({
  color: "hsl(231, 11%, 63%)",
  fontFamily: "ubuntumedium",
  fontSize: ".85rem",
  "&:hover": {
    color: "hsl(213, 96%, 18%)",
  },
})

const locations = ["/", "/select-your-plan", "/pick-add-ons", "/finishing-up"]

export default function NextButton() {
  const location = useLocation()

  const nextPath = useSelector((store) => store.nextPath)
  const dispatch = useDispatch()

  const [previousPath, setPreviousPath] = React.useState()

  const handleClick = (e) => {
    if (e.isTrusted) {
      dispatch(setNextBtnClickCount())
    }
  }

  const handleConfirmed = () => {
    dispatch(setConfrimedStatus(true))
  }

  React.useEffect(() => {
    // dispatch(setNextLocation(""))
    dispatch(setConfrimedStatus(false))
    dispatch(setNextBtnDefaultCount())

    locations.forEach((path) => {
      if (path === location.pathname) {
        let idx = locations.indexOf(path)
        setPreviousPath(locations[idx - 1])
      } else {
        return
      }
    })
  }, [dispatch, location.pathname])

  return (
    <>
      <style type="text/css">
        {`
          .btn-primary  {
            transition: .2s ease-in
          }

          #next-step:hover {
            background-color: hsl(213, 96%, 18%, .9) !important
          }

          #confirm-btn:hover {
            background-color: hsl(243, 100%, 62%, .85) !important
          }
      
      `}
      </style>
      <div
        style={{
          display: "flex",
          justifyContent:
            location.pathname === locations[0] ? "end" : "space-between",
          alignItems: "center",
        }}
      >
        {location.pathname !== locations[0] && (
          <StyledLink component={NavLink} to={previousPath} underline="none">
            Go Back
          </StyledLink>
        )}
        {location.pathname === locations[3] ? (
          <NavLink to={"/thank-you"}>
            <Button
              id="confirm-btn"
              variant="primary"
              onClick={handleConfirmed}
              style={{
                width: "100px",
                backgroundColor: "hsl(243, 100%, 62%)",
                border: "none",
                fontFamily: "ubunturegular",
                fontSize: ".9rem",
              }}
            >
              Confirm
            </Button>
          </NavLink>
        ) : (
          <NavLink to={nextPath !== "" ? nextPath : ""}>
            <Button
              id="next-step"
              variant="primary"
              onClick={handleClick}
              style={{
                width: "100px",
                backgroundColor: "hsl(213, 96%, 18%)",
                border: "none",
                fontFamily: "ubunturegular",
                fontSize: ".9rem",
              }}
            >
              Next Step
            </Button>
          </NavLink>
        )}
      </div>
    </>
  )
}
