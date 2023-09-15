
import './App.css';

import { BrowserRouter as Router, Route, createBrowserRouter, createRoutesFromElements, RouterProvider, Outlet} from 'react-router-dom';
import Inicio from './components/Inicio';
import Login from './components/Login';
import { Fragment, useState } from 'react';

import Transferencias from './components/Transferencias';
import Pagos from './components/Pagos';
import Cuentas from './components/Cuentas';


function App() {

  const [isLogged, setIsLogged] = useState(false);


  if (!isLogged) return <Login setIsLogged={setIsLogged} />
  
  const Root = () => {
    return (
      <>
        
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
        <Route path="/Pagos" element={<Pagos />} />
        <Route path="/Cuentas" element={<Cuentas />} />
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
