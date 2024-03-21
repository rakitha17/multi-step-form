import React from "react"
import { useSelector } from "react-redux"
import { Navigate } from "react-router"

export default function PrivateRoute({ Component }) {
  const confirmedStatus = useSelector((store) => store.confirmedStatus)

  return confirmedStatus === true ? <Component /> : <Navigate to={"/"} />
}
