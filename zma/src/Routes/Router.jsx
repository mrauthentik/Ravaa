import { createBrowserRouter } from "react-router-dom";
import Hero from "../Hero";
import About from "../About";
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
        path:"/about",
        element: <About />
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