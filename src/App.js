import Home from "./routes/Home";
import Detail from "./routes/Detail";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Router,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/movie/:id",
    element: <Detail />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
