import {createBrowserRouter} from "react-router-dom";
import { Login } from "../layout/login/Login";
import { Register } from "../layout/register/Register";
import { Home } from "../layout/home/Home";
import { Character } from "../layout/character/Character";


export const rutas = createBrowserRouter([
    {
        path: "register",
        element: <Register/>
    },
    {
        path: "/",
        element: <Login/>
    },
    {
        path: "home",
        element: <Home/>
    },
    {
        path: "character",
        element: <Character/>
    },
//     {
//         path: "about",
//         element: <Persona/>
//     },
]);