
import SignIn  from './Componets/SignIn/SignIn';
import SignUp from './Componets/SignUp/SignUp'
import SecretPage from './Componets/SecretPage/SecretPage'
import Home from './Componets/Home/Home';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css'


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Home /></>,
    },
    {
      path: '/SignIn',
      element: <><SignIn/></>,
    },
    {
      path: '/SignUp',
      element: <><SignUp /></>,
    },
    {
      path:'/SecretPage',
      element: <><SecretPage /></>
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
