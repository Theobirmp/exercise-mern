import Workouts from './pages/Workouts'
import {Routes,Route} from 'react-router-dom'
import  Home  from './pages/Home'
import About from './pages/About'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { useAuthenticationContext } from './hooks/useAuthenticationContext'
import Signup from './pages/Signup'
function App() {
  const {userInfo}=useAuthenticationContext()
  return (
    <>
    <div>{userInfo}</div>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/workouts' element={<Workouts/>} />
      <Route path='about' element={<About/>} />
      <Route path='/signup' element={<Signup/>}/>
    </Routes>
    <Footer/>
      </>
  )
}

export default App
