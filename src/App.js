import "bootstrap/dist/css/bootstrap.min.css"
//LINK - utils
import { useStyles } from "./customHooks/useStyles"
import PersonalInfo from "./layouts/PersonalInfo"

function App() {
  const { isMobileDevice } = useStyles()
  return (
    <div
      className="App"
      style={{
        height: isMobileDevice ? "100%" : "100vh",
        backgroundColor: "hsl(217, 100%, 97%)",
        display: isMobileDevice ? "block" : "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <PersonalInfo />
    </div>
  )
}

export default App
