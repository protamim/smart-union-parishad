import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import HomePage from "../pages/HomePage";


const Router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        errorElement: <h4>404 Not found!!</h4>,
        children: [
            {
                path: '/',
                element: <HomePage />
            },
        ]
    }
]);

export default Router;