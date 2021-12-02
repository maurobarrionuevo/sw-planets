import { Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout'
import Dashboard from './pages/Dashboard'
import About from './pages/About'
import Planet from './pages/Planet'
import UserContextProvider from './context/UserContext';

function App() {
  return (
    <Layout>
      <UserContextProvider>
        <Routes>
          <Route path={"/"} element={<Dashboard />}></Route>
          <Route path={"/about"} element={<About />}></Route>
          <Route path={"/planet/:idx"} element={<Planet />}></Route>
        </Routes>
      </UserContextProvider>
    </Layout>
  );
}

export default App;
