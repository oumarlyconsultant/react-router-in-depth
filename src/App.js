import { 
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider
} from "react-router-dom"

//pages
import Home from "./pages/Home"
import About from "./pages/About"

//layouts
import RootLayout from "./layouts/RootLayout"
import HelpLayout from "./layouts/HelpLayout"
import Faq from "./pages/help/faq"
import Contact from "./pages/help/contact"
import NotFound from "./pages/NotFound"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<Faq />}/>
        <Route path="contact" element={<Contact />}/>
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