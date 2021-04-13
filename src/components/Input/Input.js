import React from 'react'
import { render } from 'react-dom'
import { StyledInput } from './Input.style'

export const Input =  React.forwardRef(({ label, id, type = 'text', children, value, placeholder, onChange, ...rest}, ref) => {

  const handleBlur = (event) => {
    const { target } = event

    if (target.textLength !== 0) {
      target.previousElementSibling.classList.add('has-value')
      return
    }

    target.previousElementSibling.classList.toggle('has-value')
  }

  const handleChange = internalHandler => (e) => {
    if (internalHandler === undefined) {
      return
    }
    return internalHandler(e)
  }

  return (
    <StyledInput>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        ref={ref}
        {...rest}
        placeholder={placeholder}
        onBlur={handleBlur}
        onChange={handleChange(onChange)}
        // onFocus={handleFocus}
      />
    </StyledInput>
  )
})
