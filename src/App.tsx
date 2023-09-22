import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Contact from "./pages/ContactPage";



const BrowserRouter = createBrowserRouter(
  [
    {
      path: "/",
      element: <Homepage />,
      // loader: rootLoader,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "*",
      element: <div>Not Found</div>,
    }
  ],
  {
    basename: "/",
    // window: window,
  }
);

function App() {
  return <RouterProvider router={BrowserRouter} />;
}

export default App;
