import { Navigate, Route, Routes } from "react-router-dom"

import { UserProvider } from "./context/UserProvider"
import { AboutPage } from "./AboutPage"
import { HomePage } from "./HomePage"
import { LoginPage } from "./LoginPage"
import { Navbar } from "./Navbar"

export const MainApp = () => {
  return (
    <UserProvider>
      <Navbar/>
      &nbsp;

      <Routes>
        <Route path='/' element={ <HomePage/> }/>
        <Route path='login' element={ <LoginPage/> }/>
        <Route path='about' element={ <AboutPage/> }/>
        <Route path='/*' element={ <Navigate to={ '/login' }/> }/>
      </Routes>
    </UserProvider>
  )
}
