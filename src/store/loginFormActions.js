export const SELECTED_PLAN = 'selected_plan'
export const SELECTED_SERVICES = 'selected_services'
export const NEXT_BTN_CLICK_COUNT = 'next_btn_click_count'
export const NEXT_BTN_DEFAULT_COUNT = 'next_btn_default_count'
export const NEXT_PATH = 'personal_data'
export const CONFIRMED = 'confirmed'

export const setNextBtnClickCount = () => {
  return {
    type: NEXT_BTN_CLICK_COUNT
  }
}

export const setNextBtnDefaultCount = () => {
  return {
    type: NEXT_BTN_DEFAULT_COUNT
  }
}

export const setNextLocation = (path) => {
  return {
    type: NEXT_PATH,
    payload: path
  }
}

export const setPlan = (plan) => {
  return {
    type: SELECTED_PLAN,
    payload: plan
  }
}

export const setSelectedServices = (services) => {
  return {
    type: SELECTED_SERVICES,
    payload: services
  }
}

export const setConfrimedStatus = () => {
  return {
    type: CONFIRMED
  }
}