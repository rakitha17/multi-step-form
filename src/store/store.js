import { legacy_createStore } from "redux"
import loginFormReducer from "./loginFormReducer"

const store = legacy_createStore(loginFormReducer)

export default store
