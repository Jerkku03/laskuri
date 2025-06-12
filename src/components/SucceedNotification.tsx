import React from 'react'
import { useEffect, useState } from 'react'

const SucceedNotification = ({ message, timeout }) => {
  const [showMessage, setShowMessage] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => { 
      setShowMessage(false)
    }, timeout);
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
    {showMessage ? <div data-testid='succeed'>{message}</div> : null}
    </>
  )
}

export default SucceedNotification