import { createBrowserRouter, RouterProvider } from "react-router-dom";
import StoreContextProvider from "./context/StoreContext.js";
import { ToastContainer } from "react-toastify";
import AuthLayout from "./layouts/AuthLayout/AuthLayout.js";
import MasterLayout from "./layouts/MasterLayout/MasterLayout.js";
import ProtectedRoute from "./components/ProtectedRoute.js";
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
      {
        index: true,
        element: (
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        ),
      },
      {
        path: "home",
        element: (
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        ),
      },
      {
        path: "users",
        element: (
          <ProtectedRoute>
            <UsersList />
          </ProtectedRoute>
        ),
      },
      {
        path: "userdata",
        element: (
          <ProtectedRoute>
            <UserData />
          </ProtectedRoute>
        ),
      },
      {
        path: "profile",
        element: (
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);
function App() {
  return (
    <StoreContextProvider>
      <>
        <RouterProvider router={routes} />
        <ToastContainer />
      </>
    </StoreContextProvider>
  );
}

export default App;
