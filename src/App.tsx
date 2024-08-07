import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AuthLayout from "./layouts/AuthLayout/AuthLayout.js";
import MasterLayout from "./layouts/MasterLayout/MasterLayout.js";
import Login from "./pages/Login/Login.js";
import Home from "./pages/Home/Home.js";
import UsersList from "./pages/UsersList/UsersList.js";
import UserData from "./pages/UserData/UserData.js";
import Profile from "./pages/Profile/Profile.js";
import NotFound from "./pages/NotFound/NotFound.js";
import "react-toastify/dist/ReactToastify.css";

const routes = createBrowserRouter([
  {
    path: "",
    element: <AuthLayout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Login /> },
      { path: "login", element: <Login /> },
    ],
  },
  {
    path: "dashboard",
    element: <MasterLayout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: "home", element: <Home /> },
      { path: "users", element: <UsersList /> },
      { path: "userdata", element: <UserData /> },
      { path: "profile", element: <Profile /> },
    ],
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={routes} />
      <ToastContainer />
    </>
  );
}

export default App;
