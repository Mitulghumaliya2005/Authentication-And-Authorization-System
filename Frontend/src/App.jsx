
import SignIn  from './Componets/SignIn/SignIn';
import SignUp from './Componets/SignUp/SignUp'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css'
import Home from './Componets/Home/Home';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Home /></>,
    },
    {
      path: '/SignIn',
      element: <><SignIn /></>,
    },
    {
      path: '/SignUp',
      element: <><SignUp /></>,
    }
  ])

  return (
    <>
      <h3>Welcome To AuthentiCation Application👦🏻</h3>
      <RouterProvider router={router} />
    </>
  )
}

export default App
