import React from "react"
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LearnPage from './pages/LearnPage'
import ProfilePage from './pages/ProfilePage'
import PayMe from "./pages/PayMe"
import NavBar from "./components/BottomBar"

class App extends React.Component {

  render() {
    return (
      <div className="app">
        <div className="content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/learn" element={<LearnPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/payme" element={ <PayMe /> } />
            <Route path="/contacts" />
          </Routes>
        </div>
        <NavBar />
      </div>
    )
  }
}

export default App