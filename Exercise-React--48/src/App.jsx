import { Route, Routes, Link} from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Login from "./pages/Login"


const App = () => {


  return (
    <>
      <nav style={{display: 'flex', gap: '20px'}}>
        <Link to={'/'}>Home</Link>
        <Link to={'/pages/About'}>About</Link>
        <Link to={'/pages/Login'}>Login</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/pages/About" element={<About/>}></Route>
        <Route path="/pages/Login" element={<Login/>}></Route>
      </Routes>


    </>
  )
}

export default App