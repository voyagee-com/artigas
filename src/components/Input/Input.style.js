import styled from 'styled-jss'

export const StyledInput = styled('div')({
  position: 'relative',

  '& + div': {
    '& label': {
      right: '12px',
      left: 'initial'
    },
    '& input': {
      textAlign: 'right'
    }
  },

  '&:focus-within label': {
    position: 'absolute',
    width: '1px',
    height: '1px',
    padding: 0,
    margin: '-1px',
    overflow: 'hidden',
    clip: 'rect(0, 0, 0, 0)',
    border: 0,
  },

  '& label': {
    position: 'absolute',
    top: '8px',
    left: '12px',
  },

  '& input': {
    padding: '16px 12px',
    maxWidth: '200px',
    minHeight: '43px',
    border: 0,
    borderRadius: '9px',
    fontSize: '16px',
    backgroundColor: 'var(--base)',
    color: 'var(--text-dark)',
    '&::placeholder': {
      lineHeight: 3,
      fontSize: '12px',
      color: 'var(--darkest)',
    },
    '&:focus': {
      borderColor: '#888',
      '&::placeholder': {
        lineHeight: 'initial',
        fontSize: 'initial',
      }
    }
  },

  '& label.has-value': {
    width: '1px',
    height: '1px',
    padding: 0,
    margin: '-1px',
    overflow: 'hidden',
    clip: 'rect(0,0,0,0)',
    border: 0,
  }
})