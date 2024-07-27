import React from 'react'
import { useParams } from 'react-router-dom'

function User() {

    const { userid } = useParams()

  return (
    <div className="bg-gray-300 text-center text-2xl p-5">User:{userid}</div>
  )
}

export default User