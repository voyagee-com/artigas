import React from 'react'
import { render } from 'react-dom'
import { StyledInput } from '../Input/Input.style'

export const DateTime = React.forwardRef(({label, id, type = 'date', children, value, min, placeholder, onBlur, onChange, onfocus, ...rest}, ref) => {

  const handleBlur = internalBlur => (event) => {
    const { target } = event
    
    if (target.value.length !== 0) {
      target.previousElementSibling.classList.add('has-value')
      return
    }

    target.previousElementSibling.classList.remove('has-value')
    target.type = "text"

    if (internalBlur === undefined) {
      return
    }

    return internalBlur(event)
  }

  const handleChange = internalHandler => (e) => {
    if (internalHandler === undefined) {
      return
    }
    return internalHandler(e)
  }

  const handleFocus = internalFocus => (event) => {
    
    event.target.type = "date"
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
        ref={ref}
        {...rest}
        placeholder={placeholder}
        onBlur={handleBlur(onBlur)}
        onChange={handleChange(onChange)}
        onFocus={handleFocus(onfocus)}
      />
    </StyledInput>
  )
})