import React from "react"
import Form from "react-bootstrap/Form"
import { useDispatch, useSelector } from "react-redux"
//LINK - utils
import { setNextLocation } from "../../store/loginFormActions"

import SingleInput from "./allInputs/SingleInput"

const inputsDetails = [
  {
    id: 1,
    name: "username",
    label: "Name",
    type: "text",
    placeholder: "e.g. Stephen King",
    pattern: "^[A-Z][a-z]{1,}(?: [A-Z][a-zA-Z]*){0,2}$",
    required: true,
    errMsg: "Name must be like Stephen King.",
  },
  {
    id: 2,
    name: "email",
    label: "Email Address",
    type: "email",
    placeholder: "e.g. stephenking@lorem.com",
    pattern: "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$",
    required: true,
    errMsg: "Email should be a valid email address.",
  },
  {
    id: 3,
    name: "telephone",
    label: "Phone Number",
    type: "tel",
    placeholder: "e.g. +1 234 567 789",
    pattern: "^[+]1 [0-9]{3} [0-9]{3} [0-9]{3}",
    required: true,
    errMsg: "Telephone number should be like +1 234 567 789.",
  },
]

function AllInputs() {
  const [validated, setValidated] = React.useState(false)
  const [values, setValues] = React.useState({
    username: "",
    email: "",
    telephone: "",
  })

  const form = React.useRef()

  const clicked = useSelector((store) => store.nextBtnClickCount)
  const dispatch = useDispatch()

  const handleOnChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  React.useEffect(() => {
    if (clicked > 0) {
      setValidated(true)
      // handleSubmit()
    }
  }, [clicked])

  /* const handleSubmit = () => {
    console.log('first')
  } */

  React.useEffect(() => {
    const nameRegex = new RegExp(inputsDetails[0].pattern, "g")
    const emailRegex = new RegExp(inputsDetails[1].pattern, "g")
    const telephoneRegex = new RegExp(inputsDetails[2].pattern, "g")

    if (
      nameRegex.test(values.username) &&
      emailRegex.test(values.email) &&
      telephoneRegex.test(values.telephone)
    ) {
      dispatch(setNextLocation("/select-your-plan"))
    }else {
      dispatch(setNextLocation(""))
    }
  }, [values, dispatch])

  return (
    <>
      <Form
        noValidate
        validated={validated}
        ref={form} /* onSubmit={handleSubmit} */
      >
        {inputsDetails.map((val) => {
          return (
            <SingleInput
              key={val.id}
              id={val.id}
              name={val.name}
              label={val.label}
              type={val.type}
              placeholder={val.placeholder}
              pattern={val.pattern}
              required={val.required}
              value={values[val.name]}
              error={val.errMsg}
              handleOnChange={handleOnChange}
            />
          )
        })}
      </Form>
    </>
  )
}

export default AllInputs

/* const handleSubmit = (event) => {
  const form = event.currentTarget
  if (form.checkValidity() === false) {
    event.preventDefault()
    event.stopPropagation()
  }

  setValidated(true)
} */
