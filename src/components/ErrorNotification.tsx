import React from 'react'

const ErrorNotification = ({ message }) => {
  if (message === null) {
    return null
  }

  return (
    <>
      {message}
    </>
  )
}

export default ErrorNotification