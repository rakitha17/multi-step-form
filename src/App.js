import "bootstrap/dist/css/bootstrap.min.css"
//LINK - utils
import { useStyles } from "./customHooks/useStyles"
import {
  Info,
  Plans,
  PickAddOns,
  FinshedPage,
  ThankYou,
} from "./layouts/layouts"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom"
import PrivateRoute from "./HOC/PrivateRoute"

function App() {
  const { isMobileDevice } = useStyles()
  return (
    <Router>
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
        <Routes>
          <Route path="/" element={<Info />} />
          <Route
            path="/personal-info"
            element={<Navigate to={"/"} replace />}
          />
          <Route path="/select-your-plan" element={<Plans />} />
          <Route path="/pick-add-ons" element={<PickAddOns />} />
          <Route path="/finishing-up" element={<FinshedPage />} />
          <Route
            path="/thank-you"
            element={<PrivateRoute Component={ThankYou} />}
          />
        </Routes>
      </div>
    </Router>
  )
}

export default App
