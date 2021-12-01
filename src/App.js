import { Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout'
import Dashboard from './pages/Dashboard'
import About from './pages/About'
import Planet from './pages/Planet'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path={"/"} element={<Dashboard />}></Route>
        <Route path={"/about"} element={<About />}></Route>
        <Route path={"/planet/:idx"} element={<Planet />}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
