import logo from './logo.svg';
import './App.css';
import Register from './pages/Register';
import Login from './pages/Login';
import Write from './pages/Write';
import Home from './pages/Home';
import Single from './pages/Single';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import "./styles.scss";

import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";

const Layout = () => {
   return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
   )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
        path: "/Write",
        element: <Write/>,
      },
      {
        path: "/post/:id",
        element: <Single/>,
      },
      {
        path: "/Home",
        element: <Home/>,
      },
    ]
  },
  {
    path: "/Register",
    element: <Register/>,
  },
  {
    path: "/Login",
    element: <Login/>,
  },
]);

function App() {
  return (
    
    <div className="app">
     <div className="container">
       <RouterProvider router={router} />
    </div>
    </div>
  );
}

export default App;
