import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Banner from "@/HomePage/Banner";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <Banner></Banner>,
      },
    ],
  },
]);
