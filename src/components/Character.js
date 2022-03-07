import axios from "axios"
import { useEffect, useState } from "react"

function Character(props) {
  const [homeworld, setHomeworld] = useState("")

  const getHomeworldName = async (data) => {
    const response = await axios.get(data)
    return response.data
  }

  useEffect(() => {
    getHomeworldName(`${props.homeworld}`).then((res) => {
      setHomeworld(res)
    })
  }, [])

  return (
    <div class="card border-info mb-3">
      <div class="card-header fs-4">{props.name}</div>
      <div class="card-body">
        <p class="card-text">Hair Color: {props.hair_color}</p>
        <p class="card-text">Height: {props.height}</p>
        <p class="card-text">Homeworld: {homeworld.name}</p>
      </div>
    </div>
  )
}

export default Character
