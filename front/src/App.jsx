import Workouts from './pages/Workouts'
import {Routes,Route} from 'react-router-dom'
import  Home  from './pages/Home'
import About from './pages/About'
import Navbar from './components/Navbar'  
import { useAuthenticationContext } from './hooks/useAuthenticationContext'
import Footer from './components/Footer'
import Signup from './pages/Signup'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
function App() {
  const {user}=useAuthenticationContext()
  return (
    <div style={{minHeight:"100vh",display:'flex',flexDirection:'column'}}>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/workouts' element={user?(<Workouts/>):(<Home/>)} />
      <Route path='about' element={<About/>} />
      <Route path='/signup' element={!user?(<Signup/>):(<Workouts/>)}/>
      <Route path='/login' element={!user?(<Login/>):(<Workouts/>)}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
    <Footer/>
      </div>
  )
}

export default App
