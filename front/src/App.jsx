import Workouts from './pages/Workouts'
import {Routes,Route,Navigate} from 'react-router-dom'
import  Home  from './pages/Home'
import About from './pages/About'
import Navbar from './components/Navbar'
import { useAuthenticationContext } from './hooks/useAuthenticationContext'
import Footer from './components/Footer'
import Signup from './pages/Signup'
import Login from './pages/Login'
function App() {
  const {user}=useAuthenticationContext()
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/workouts' element={user?(<Workouts/>):(<Home/>)} />
      <Route path='about' element={<About/>} />
      <Route path='/signup' element={!user?(<Signup/>):(<Workouts/>)}/>
      <Route path='/login' element={!user?(<Login/>):(<Workouts/>)}/>
    </Routes>
    <Footer/>
      </>
  )
}

export default App
