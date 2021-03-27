import React from 'react'
import { render } from 'react-dom'
import { StyledInput } from '../Input/Input.style'

export const DateTime = ({label, id, type = 'date', children, value, min, placeholder, onChange, onfocus, ...rest}) => {

  const handleChange = internalHandler => (e) => {
    // setHasValue(e.target)
    console.log(e);
    if (internalHandler === undefined) {
      return
    }
    return internalHandler(e)
  }

  const handleFocus = internalFocus => (event) => {
    console.log(type);
    if (internalFocus === undefined) {
      return
    }
    return internalFocus(event)
  }

  return (
    <StyledInput>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        min={min}
        {...rest}
        placeholder={placeholder}
        // onBlur={handleBlur}
        onChange={handleChange(onChange)}
        onFocus={handleFocus(onfocus)}
      />
    </StyledInput>
  )
}