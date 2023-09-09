import logo from './logo.svg';
import './App.css';
import LayoutProvider from './components/LayoutContext';
import { BrowserRouter as Router, Route, Switch, createBrowserRouter, createRoutesFromElements, RouterProvider, Outlet, Link } from 'react-router-dom';
import Inicio from './components/Inicio';
import Login from './components/Login';
import { Fragment, useState } from 'react';
import Header from './components/Header';
import MenuLateral from './components/MenuLateral';
import Layout from './components/Layout';
import Transferencias from './components/Transferencias';



function App() {

  const [isLogged, setIsLogged] = useState(false);


  if (!isLogged) return <Login setIsLogged={setIsLogged} />
  
  const Root = () => {
    return (
      <>
        <div>
          <Link to="/">Inicio</Link>
          <Link to="/transferencias">Transferencias</Link>
        </div>
        <div>
          <Outlet />
        </div>
      </>
    )
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Root />}>
        <Route index exact element={<Inicio/>} />
        <Route path="/Transferencias" element={<Transferencias />} />
      </Route>  
    )
  )

  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
