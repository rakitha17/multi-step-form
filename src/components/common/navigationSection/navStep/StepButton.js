import Button from "react-bootstrap/Button"
import { useLocation } from "react-router"

function StepButton({ step, path }) {
  const location = useLocation()
  return (
    <>
      <style>
        {`
        #normal-btn {
          transition: .2s ease-in
        }
        #normal-btn:hover {
          color: #000 !important;
          background-color: hsl(228, 100%, 84%) !important;
        }
      `}
      </style>
      <Button
        id={location.pathname === path ? "active-btn" : "normal-btn"}
        variant="primary"
        style={{
          borderRadius: "50%",
          borderColor:
            location.pathname === path ? "hsl(206, 94%, 87%)" : "#fff",
          backgroundColor:
            location.pathname === path ? "hsl(206, 94%, 87%)" : "transparent",
          color: location.pathname === path ? "#000" : "#fff",
          fontFamily: "ubuntumedium",
          fontSize: ".8rem",
        }}
      >
        {step}
      </Button>
    </>
  )
}

export default StepButton
