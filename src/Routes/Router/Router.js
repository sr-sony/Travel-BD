import Item from "../../Pages/Items/Item/Item";
import Items from "../../Pages/Items/Items/Items";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Login/Register";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../../Layout/Main");
const { default: Home } = require("../../Pages/Home/Home");

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children:[
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/services',
                element:<Items></Items>
            },
            {
                path: '/service/:id',
                element: <Item></Item>,
                loader: ({params})=> fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '/login',
                element:<Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
])