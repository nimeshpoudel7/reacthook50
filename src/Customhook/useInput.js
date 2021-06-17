import { useState } from "react"

const useInput = (initialState='') => {
  const [value, setValue] = useState(initialState)
  const cleartext=()=>{
    setValue(initialState)
  }
  const bindForm={
        value: value,
        onChange: event=>{setValue(event.target.value)},
        type:'email'
  }
  return [value,bindForm,cleartext]
}
export default useInput



