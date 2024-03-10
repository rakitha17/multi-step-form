import Button from "react-bootstrap/Button"

function StepButton({ step }) {
  return (
    <Button
      variant="primary"
      style={{
        borderRadius: "50%",
        borderColor: '#fff',
        backgroundColor: 'transparent',
        color: "#fff",
        fontFamily: "ubuntumedium",
        fontSize: ".8rem",
      }}
    >
      {step}
    </Button>
  )
}

export default StepButton
