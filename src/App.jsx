import React from 'react'
import Login from './Login/Login'
import Reg from "./Login/Reg"

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Router>

        <Routes>
          <Route path="/" element={<Login />} />

          <Route path="/login" element={<Login />} />

          <Route path="/register" element={<Reg />} />
        </Routes>

      </Router>
    </div>
  )
}

export default App