import './App.css'
import Nav from './fixed/Nav'
import WelcomePage from './pages/WelcomePage'
import MessagePage from './pages/MessagePage'
import ErrorPage from './pages/ErrorPage';
import { Route, Routes } from "react-router-dom"


function App() {

  return (
    <>
    <Nav />

      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/message" element={<MessagePage />} />
        <Route path='*' element={<ErrorPage />} />
    </Routes>
    </>
  )
}

export default App
