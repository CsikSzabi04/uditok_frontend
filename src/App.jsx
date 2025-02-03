import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Uditok from './Pages/Uditok';
import Szerkeszt from './Pages/Szerkeszt';
import Nevjegy from './Pages/Nevjegy';
import Notfound from './Pages/Notfound';
import Layout from './Pages/Layout';

function App() {

  const router = createBrowserRouter([
    { element: <Layout />, children: [
      { path: "/", element: <Uditok /> },
      { path: "/uditok", element: <Uditok /> },
      { path: "/szerkeszt", element: <Szerkeszt /> },
      { path: "/nevjegy", element: <Nevjegy /> },
      { path: "*", element: <Notfound /> }
    ]}
  ]);

  return (
    <div className='app'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
