import styled from 'styled-jss'

export const StyledCounter = styled('div')({

  position: 'relative',
  padding: '16px 12px',
  minWidth: '192px',
  minHeight: '43px',
  border: 0,
  fontSize: '16px',
  backgroundColor: 'var(--base)',
  borderRadius: '9px',

  '& input[type="number"]': {
    width: '32px',
    border: 0,
    textAlign: 'center',
    fontSize: '16px',
    backgroundColor: 'transparent',
    appearance: 'textfield',
  },

  '& button': {
    width: '24px',
    height: '24px',
    margin: '0 12px',
    border: '1px solid var(--text-dark)',
    borderRadius: '50%',
    color: 'var(--text-dark)',
    backgroundColor: 'var(--lightest)',
    cursor: 'pointer',
  },
})
