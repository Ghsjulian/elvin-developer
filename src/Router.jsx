/* Importing All Routes And Components Here...*/
import Services from "./components/Services";
import ViewService from "./components/ViewService";
import Layouts from "./layouts/Layouts";
import Home from "./pages/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import NotFound from "./components/NotFound";

const MyRoutes = [
    {
        path: "/",
        element: <Layouts />,
        children: [
            {
                index: true,
                element: <Home />
            },
            { path: "/view-services/:service_id", element: <ViewService /> },
            {
                path: "about-us",
                element: <About />
            },
            {
                path: "services",
                element: <Services />
            },
            {
                path: "resume",
                element: <Home />
            },
            {
                path: "work",
                element: <Home />
            },
            {
                path: "contact-us",
                element: <Contact />
            },
            {
                path: "*",
                element: <NotFound />
            }
        ]
    }
];

export default MyRoutes;
