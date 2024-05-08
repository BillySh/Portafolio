import { RouteObject, createBrowserRouter } from "react-router-dom";
import {Home, Projects, Contact} from "../pages";
import PrivateRouter from "./PrivateRouter";
import {ROUTES} from "./constants";


const routes: RouteObject[] = [
    {
        path: ROUTES.HOME, element: <PrivateRouter/>,
        children: [
            {path: ROUTES.HOME, element:<Home/>},
            {path: ROUTES.PROJ, element:<Projects/>},
            {path: ROUTES.CONT, element:<Contact/>}
            

        ]
    },
];

export const router = createBrowserRouter(routes);