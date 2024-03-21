import React from "react"
import Form from "react-bootstrap/Form"

export default function SingleInput(props) {
  const {
    id,
    name,
    label,
    type,
    placeholder,
    pattern,
    required,
    value,
    error,
    handleOnChange,
  } = props
  return (
    <>
      <style type="text/css">
        {`
          .form-label {
            color: hsl(213, 96%, 18%) !important;
            font-family: ubunturegular;
          }
          .form-control {
            color: hsl(213, 96%, 18%) !important;
            font-family: ubuntumedium;
          }
          .form-control:focus {
            border-color: hsl(243, 100%, 62%);
            box-shadow: none
          }
          .form-control.is-invalid, .was-validated .form-control:invalid {
            border-color: hsl(354, 84%, 57%)
          }
          .was-validated .form-control:valid:focus {
            border-color: hsl(243, 100%, 62%);
            box-shadow: none
          }
          .was-validated .form-control:invalid:focus {
            box-shadow: none
          }
          .invalid-feedback {
            text-align: end;
            font-family: ubuntubold;
            font-size: .8rem
          }
        `}
      </style>
      <Form.Group className="mb-3">
        <Form.Label className="input-label">{label}</Form.Label>
        <Form.Control
          className="input-field"
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          pattern={pattern}
          required={required}
          value={value}
          onChange={handleOnChange}
        />
        <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
      </Form.Group>
    </>
  )
}
