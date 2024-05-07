import { RouteObject, createBrowserRouter } from "react-router-dom";
import {Home} from "../pages/Home"
import PrivateRouter from "./PrivateRouter";
import {ROUTES} from "./constants";


const routes: RouteObject[] = [
    {
        path: ROUTES.HOME, element: <PrivateRouter/>,
        children: [
            {path: ROUTES.HOME, element:<Home/>},
            

        ]
    },
];

export const router = createBrowserRouter(routes);