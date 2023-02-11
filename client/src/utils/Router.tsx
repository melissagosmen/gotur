import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Home} from "../views/Home";
import Create from "../views/Create";

function Router() {

    const router = createBrowserRouter([
        {
            path: '/',
            element: <Home/>
        },
        {
            path: '/create',
            element: <Create/>
        }
    ])

    return (
        <>
            <RouterProvider router={router}/>
        </>
    )
}

export default Router;
