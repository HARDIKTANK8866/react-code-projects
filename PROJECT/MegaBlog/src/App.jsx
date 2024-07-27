import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import authService from "./appwrite/auth"
import {login, logout} from "./store/authSlice"
import { Footer, Header } from './components'
import { Outlet } from 'react-router-dom'
function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if (userData) {
        dispatch(login({userData}))
      } else {
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  }, [])

  // if (loading) {
  //   return <p>Loading...</p>;
  // }

  return !loading ? (

    <div className=' flex flex-wrap content-between bg-white text-black-400 '>
      <div className='w-full block content-center  '>
        <Header />
        <main>
         <Outlet />
        </main>
        <Footer />
      </div>
    </div>






    
  ) : null
}

export default App
