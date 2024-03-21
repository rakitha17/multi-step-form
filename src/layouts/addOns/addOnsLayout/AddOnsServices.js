import React from "react"
import SingleService from "../../../components/addOns/SingleService"
import { useDispatch, useSelector } from "react-redux"
//LINK - utils
import {
  setNextLocation,
  setSelectedServices,
} from "../../../store/loginFormActions"

const serviceDetails = [
  {
    serviceTitle: "Online service",
    desc: "Access to multiplayer games",
    cost: 1,
  },
  {
    serviceTitle: "Larger storage",
    desc: "Access to multiplayer games",
    cost: 2,
  },
  {
    serviceTitle: "Customizable profile",
    desc: "Custom theme on your profile",
    cost: 2,
  },
]

export default function AddOnsServices() {
  const selectedTime = useSelector((store) => store.selectedPlan.time)
  const dispatch = useDispatch()

  const [actives, setActives] = React.useState([])
  const [selectedService, setSelectedService] = React.useState([])

  const handleClicked = (event, cost, idx) => {
    if (actives.includes(idx)) {
      let newArr = actives.filter((value) => {
        return value !== idx
      })
      setActives(newArr)
    } else {
      setActives([...actives, idx])
    }

    setSelectedService([
      ...selectedService,
      {
        id: idx,
        title: event.currentTarget.title,
        cost: cost,
      },
    ])
  }

  React.useEffect(() => {
    const result = []
    const nonDuplicates = selectedService.reduce((finalArray, current) => {
      let obj = finalArray.find((item) => item.id === current.id)

      if (obj) {
        return finalArray
      }

      return finalArray.concat([current])
    }, [])

    nonDuplicates.forEach((item) => {
      if (actives.includes(item.id)) {
        result.push(item)
      }
    })

    dispatch(setSelectedServices(result))
    dispatch(setNextLocation("/finishing-up"))
  }, [handleClicked, selectedService, actives, dispatch])

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "auto",
        gap: "10px",
      }}
    >
      {serviceDetails.map((val, index) => {
        return (
          <div
            key={index}
            title={val.serviceTitle}
            onClick={(e) => handleClicked(e, val.cost, index)}
            onMouseDown={(e) => e.preventDefault()}
            style={{
              padding: "10px",
              border: actives.includes(index)
                ? "1px solid hsl(243, 100%, 62%) "
                : "1px solid hsl(229, 24%, 87%)",
              borderRadius: "10px",
              backgroundColor: actives.includes(index)
                ? "hsl(231, 100%, 99%)"
                : "transparent",
              cursor: "pointer",
            }}
          >
            <SingleService
              title={val.serviceTitle}
              desc={val.desc}
              cost={val.cost}
              selectedTime={selectedTime}
              index={index}
              actives={actives}
            />
          </div>
        )
      })}
    </div>
  )
}

//NOTE - sample
// actives.includes(index)
// var newObj = Object.assign({}, ...actives)
/* let exitPosition = actives.indexOf(idx)
let newArr = actives.splice(exitPosition, 1)
setActives(newArr) */
