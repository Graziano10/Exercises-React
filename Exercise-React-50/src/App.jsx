import { Route, Routes, Link} from "react-router-dom"
import Home from "./pages/Home"
import GihubUserList from "./pages/GihubUserList"
import GithubUser from './pages/GithubUser'
import ShowGithubUser from "./pages/ShowGithubUser"


const App = () => {


  return (
    <>
      <nav style={{display: 'flex', gap: '20px'}}>
        <Link to={'/'}>Home</Link>
        <Link to={'/pages/GihubUserList'}>GihubUserList</Link>
        <Link to={'/pages/GithubUser'}>GithubUser</Link>
        <Link to={'/pages/ShowGithubUser/:username'}>ShowGithubUser</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/pages/GihubUserList" element={<GihubUserList/>}></Route>
        <Route path="/pages/GithubUser" element={<GithubUser/>}></Route>
        <Route path="/pages/ShowGithubUser" element={<ShowGithubUser/>}></Route>
      </Routes>


    </>
  )
}

export default App;