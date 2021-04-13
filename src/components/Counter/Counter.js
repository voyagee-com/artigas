import React from 'react'
import { StyledCounter } from './Conter.style'

export const Counter = React.forwardRef(({ label, id, min = 1, step = 1, value, onChange, ...rest}, ref) => {

  const handleDecrement = (event) => {
    event.preventDefault()
    const inputNumber = event.target.nextElementSibling
    return inputNumber.stepDown()
  }
  const handleIncrement = (event) => {
    event.preventDefault()
    const inputNumber = event.target.previousElementSibling
    inputNumber.stepUp()

    handleChange(event.target.previousElementSibling.value)
  }

  const handleChange = internalChange => (e) => {
    if (internalChange === undefined) {
      return
    }
    return internalChange(e)
  }

  return (
    <StyledCounter>
      <label htmlFor={id}>{label}</label>
      <button
        id="decrement"
        aria-label="Decrement value"
        onClick={(e) => handleDecrement(e)}
      >-</button>
      <input
        type="number"
        id={id}
        name={name}
        min={min}
        step={step}
        value={value}
        {...rest}
        ref={ref}
        onChange={handleChange(onChange)}
      />
      <button
        id="increment"
        aria-label="Increment Value"
        onClick={(e) => handleIncrement(e)}
      >+</button>
    </StyledCounter>
  )
})

// export default Counter
