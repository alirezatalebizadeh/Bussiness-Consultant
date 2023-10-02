import React,{ useState } from 'react'
import './App.css'
import Header from './Pages/Haeder/Header'
import Footer from './Pages/Footer/Footer'
import Content from './Pages/Content/Content'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  return (
    <div className='app'>
      <Header/>
      <Content/>
      <Footer/>
    </div>
  )
}

export default App
