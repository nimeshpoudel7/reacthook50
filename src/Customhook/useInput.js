import { useState } from "react"

const useInput = (initialState) => {
  const [value, setValue] = useState(initialState)
  const cleartexr=()=>{
    setValue(initialState)
  }
  const bindForm={
        value: value,
        onChange: event=>{setValue(event.target.value)
        }
  }
  return [value,bindForm,cleartexr]
}
export default useInput



