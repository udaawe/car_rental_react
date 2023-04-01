import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import SearchCar from "./pages/SearchCar";
import CarDetail from "./pages/CarDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/searchcar",
    element: <SearchCar />,
  },
  {
    path: "/searchcar/:id",
    element: <CarDetail />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
