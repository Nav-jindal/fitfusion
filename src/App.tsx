// Packages:
import type { JSX } from 'react'

// Pages:
import Home from './pages/home/home'
import About from './pages/about'
// import Contact from './pages/contact'
// import Works from './pages/works'

// Components:
import Navbar from './components/navbar'
//import Footer from './components/footer'

// Routes:
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"

// Typescript:
export interface RouterPathsType {
routerPaths: {
  index?: boolean
  path?: string
  element: JSX.Element
}[]
}

const MainLayout = ({routerPaths}: RouterPathsType) => <>
  <Navbar routerPaths={routerPaths}/>
  <Outlet />
  {/* <Footer /> */}
</>

function App() {
  // Constants:
  const routerPaths = [
    {
      index: true,
      element:<Home />,
    },
    {
      path: '/about',
      element: <About />
    },
    // {
    //   path: '/works',
    //   element: <Works />
    // },
    // {
    //   path: '/contact',
    //   element: <Contact />
    // },
  ]
  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout routerPaths={routerPaths}/>,
      errorElement: <h3 className='my-[35px]'>Error: Page Not Found</h3>,
      children: routerPaths
    }
  ])

  return <>
    <div className='mx-[auto] px-[20px] xl:max-w-[1250px] 2xl:max-w-[1350px] w-full flex flex-col min-h-screen'>
      <RouterProvider router={router}/>
    </div>
    </>
}

export default App;