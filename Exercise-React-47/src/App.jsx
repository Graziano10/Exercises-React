import { Route, Routes, Link } from "react-router-dom";
import ShowGithubUser from "./page/ShowGithubUser";
import Home from "./page/Home";
import Counter from "./page/Counter";
import GithubUser from "./page/GithubUser";

const App = () => {
  return (
    <>
      <nav style={{ display: "flex", gap: "20px" }}>
        <Link to={"/"}>Home</Link>
        <Link to={"/pages/Counter"}>Counter</Link>
        <Link to="/pages/ShowGithubUser/jhon">ShowGithubUser</Link>
        <Link to={"/pages/GithubUser/Jhon"}>GithubUser</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/pages/Counter" element={<Counter />}></Route>
        <Route
          path="/pages/ShowGithubUser/:username"
          element={<ShowGithubUser />}
        ></Route>
        <Route path="/pages/GithubUser/:username" element={<GithubUser />}>
        </Route>
      </Routes>
    </>
  );
};

export default App;
