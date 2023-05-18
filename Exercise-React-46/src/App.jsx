import { Route, Routes, Link} from "react-router-dom"
import Home from "./pages/Home"
import Counter from "./pages/Counter"


const App = () => {


  return (
    <>
      <nav>
        <Link style={{marginRight: '20px'}} to={'/'}>Home</Link>
        <Link to={'/pages/Counter'}>Counter</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/pages/Counter" element={<Counter/>}></Route>
      </Routes>


    </>
  )
}

export default App
