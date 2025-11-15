
import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import About from "../pages/about/page";
import Services from "../pages/services/page";
import Pricing from "../pages/pricing/page";
import ServiceAreas from "../pages/service-areas/page";
import Testimonials from "../pages/testimonials/page";
import Gallery from "../pages/gallery/page";
import Contact from "../pages/contact/page";
import BookWalk from "../pages/book-walk/page";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/pricing",
    element: <Pricing />,
  },
  {
    path: "/service-areas",
    element: <ServiceAreas />,
  },
  {
    path: "/testimonials",
    element: <Testimonials />,
  },
  {
    path: "/gallery",
    element: <Gallery />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/book-walk",
    element: <BookWalk />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
