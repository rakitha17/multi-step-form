import * as Actions from "./loginFormActions"

const initialState = {
  nextBtnClickCount: 0,
  nextPath: "",
  selectedPlan: {},
  selectedServices: [],
  confirmedStatus: false,
}

const loginFormReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.NEXT_BTN_CLICK_COUNT:
      return {
        ...state,
        nextBtnClickCount: state.nextBtnClickCount + 1,
      }
    case Actions.NEXT_BTN_DEFAULT_COUNT:
      return {
        ...state,
        nextBtnClickCount: 0,
      }
    case Actions.NEXT_PATH:
      return {
        ...state,
        nextPath: action.payload,
      }
    case Actions.SELECTED_PLAN:
      return {
        ...state,
        selectedPlan: action.payload,
      }
    case Actions.SELECTED_SERVICES:
      return {
        ...state,
        selectedServices: action.payload,
      }
    case Actions.CONFIRMED:
      return {
        ...state,
        confirmedStatus: true
      }
    default:
      return state
  }
}

export default loginFormReducer
