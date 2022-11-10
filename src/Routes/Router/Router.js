import Blogs from "../../Pages/Blogs/Blogs";
import AddItem from "../../Pages/Items/AddItem/AddItem";
import Item from "../../Pages/Items/Item/Item";
import Items from "../../Pages/Items/Items/Items";
import Update from "../../Pages/Items/Update/Update";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Login/Register";
import MyReviews from "../../Pages/MyReviews/MyReviews";
import PrivateRoute from "../PrivateRoute";

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
                path: '/services',
                element:<Items></Items>
            },
            {
                path: '/service/:id',
                element: <PrivateRoute><Item></Item></PrivateRoute>,
                loader: ({params})=> fetch(`https://sr-studios-server.vercel.app/services/${params.id}`)
            },
            {
                path: '/login',
                element:<Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/myreviews',
                element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>
            },
            {
                path: '/additem',
                element: <PrivateRoute><AddItem></AddItem></PrivateRoute>
            },
            {
                path: '/update/:id',
                element: <PrivateRoute><Update></Update></PrivateRoute>,
                loader : ({params}) => fetch (`https://sr-studios-server.vercel.app/reviews/${params.id}`)
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '*',
                element: <p>404! Route not found</p>
            }
        ]                            
    }
])