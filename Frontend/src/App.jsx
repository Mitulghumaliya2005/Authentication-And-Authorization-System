import SignIn from './Componets/SignIn/SignIn';
import SignUp from './Componets/SignUp/SignUp'
import SecretPage from './Componets/SecretPage/SecretPage'
import Home from './Componets/Home/Home';
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import './App.css'
import { UserContext } from './ContextAPI/User';
import { useContext } from 'react';



function App() {

  const UserState = useContext(UserContext);
  console.log(UserState.User);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (UserState.User) ? <SecretPage /> : <Home />,
    },
    {
      path: '/SignIn',
      element: (UserState.User) ? <Navigate to={'/'} replace={true}/> : <SignIn />,
    },
    {
      path: '/SignUp',
      element: (UserState.User) ? <Navigate to={'/'} replace={true}/> : <SignUp />,
    },
  ])

  return (
    <>
      <h3>Welcome To AuthentiCation Application👦🏻</h3>
      <RouterProvider router={router} />
    </>
  )
}

export default App
