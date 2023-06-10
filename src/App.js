import { 
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider
} from "react-router-dom"

//pages
import Home from "./pages/Home"
import About from "./pages/About"
import Careers from "./pages/careers/Careers"
import CareerDetails from "./pages/careers/CareerDetails"
import CareersErrors from "./pages/careers/CareersErrors"
//layouts
import RootLayout from "./layouts/RootLayout"
import HelpLayout from "./layouts/HelpLayout"
import Faq from "./pages/help/faq"
import Contact from "./pages/help/contact"
import NotFound from "./pages/NotFound"
import CareersLayout from "./layouts/CareersLayout"

//functions
import { careersLoader } from "./functions/careersLoader"
import { careerDetailLoader } from "./functions/careerDetailLoader"


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<Faq />}/>
        <Route path="contact" element={<Contact />}/>
      </Route>
      <Route path="careers" element={<CareersLayout />} errorElement={<CareersErrors />}>
        <Route 
          index 
          element={<Careers />}
          loader={careersLoader}
        />
      <Route
        path=":id"
        element={<CareerDetails />}
        loader={careerDetailLoader}
      />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>    
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App

// {/* <BrowserRouter>
// <header>
//   <nav>
//     <h1>Jobarouter</h1>
//     <NavLink to="/">Home</NavLink>
//     <NavLink to="about">About</NavLink>
//   </nav>
// </header>
// <main>
//     <Routes>
//       <Route index path="/" element={<Home />} />
//       <Route path="about" element={<About />} />
//     </Routes>
// </main>
// </BrowserRouter> */}