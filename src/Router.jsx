/* Importing All Routes And Components Here...*/
import Layouts from "./layouts/Layouts"
import Home from "./pages/Home";

const MyRoutes = [
    {
        path: "/",
        element: <Layouts />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "about",
                element: <Home />,
            },
            {
                path: "resume",
                element: <Home />,
            },
            {
                path: "work",
                element: <Home />,
            },
            {
                path: "contact",
                element: <Home />,
            },
        ]
    },

];

export default MyRoutes;
