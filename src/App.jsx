import { useState } from 'react'
import { useContext } from 'react'
import { AppContext } from './context'
import './App.css'
import Favourites from './Components/Favourites'
import Meals from './Components/Meals'
import Modal from './Components/Modal'
import Search from './Components/Search'
function App() {
  const {showModal,favourites}=useContext(AppContext)
  return (
    <div className='allContainer'>
      <Search/>
      {favourites.length>0 && <Favourites/>}
      <Meals/>
      {showModal && <Modal/>}
    </div>
  )
}

export default App
