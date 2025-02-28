import { createBrowserRouter } from "react-router-dom";
import Hero from "../Hero";
import Section from "../Section";
import Contact from "../Contact";
import Core from "../Core";
import Footer from "../Footer";




const router = createBrowserRouter([
    {
        path:"/hero",
        element: <Hero />
    },
    {
        path:"/section",
        element: <Section />
    },
    {
        path:"/contact",
        element: <Contact />
    },
    {
        path:"/core",
        element: <Core />
    },
    {
        path:"/footer",
        element: <Footer />
    },
]);


export default router