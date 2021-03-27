import React from 'react'
import {render} from 'react-dom'
import { StyledButton } from './Button.style'

export const Button = ({ children, ...rest }) => {
  return (
    <StyledButton
      {...rest}
    >
    {children}
    </StyledButton>
  )
}