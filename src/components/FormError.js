import React from 'react'

const FormError = (props) => {
  if (props.isHidden) { return null; }
  return ( <div>{props.errorMessage}</div> )
}
export default FormError
