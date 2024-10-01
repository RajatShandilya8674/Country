import React from 'react'
import { useRouteError } from 'react-router-dom'

export default function Error() {
    const errorMsg= useRouteError()

  return (
    <div>
      {`${errorMsg.status} Page not found`}
    </div>
  )
}
