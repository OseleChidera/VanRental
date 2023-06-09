import App from './App'
import { createBrowserRouter , createRoutesFromElements, Route , RouterProvider } from 'react-router-dom';
//components
import Home from './pages/Home'
import Explore from './pages/Explore';
import SignupForm from './components/login/SignupForm';
import LoginForm from './components/login/LoginForm';
import Van from './components/Van';
import Hostvans from './pages/host/Hostvans';
//pages

import BaseLayout from './Baselayout';
import Notfound from './pages/Notfound';
import HostProfile from './pages/host/HostProfile';
import Hostdashboard from './pages/host/Hostdashboard';
import Hostincome from './pages/host/Hostincome';
import Hostreviews from './pages/host/Hostreviews';
import Hostvanslist from './pages/host/Hostvanslist';
import Hostvandetail from './pages/host/Hostvandetail';
import Vandetail from './pages/host/hostvan/Vandetail';
import Vanpricing from './pages/host/hostvan/Vanpricing';
import Vanphotos from './pages/host/hostvan/Vanphotos';
import Hostlistedvan from './pages/host/Hostlistedvan';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route  path='/' element={<BaseLayout/>}>

      {/* <Route index element={<App/>}/> */}
      <Route index element={<Home/>}/>
      <Route path='login' element={<LoginForm/>}/>
      <Route path='signup' element={<SignupForm/>}/>
      <Route path='explore' element={<Explore/>}/>
      <Route path='explore/1' element={<Van/>}/>
      <Route path='host/dashboard' element={<HostProfile/>}>
          <Route index element={<Hostdashboard/>}/>
          <Route  path='listedVans/1' element={<Hostlistedvan/>}/>
          <Route  path='income' element={<Hostincome/>}/>

          <Route  path='host-vans' element={<Hostvans/>}>
              <Route  index element={<Hostvanslist/>}/>
              <Route  path='1' element={<Hostvandetail/>}>
                  <Route index element={<Vandetail/>}/>
                  <Route path='pricing' element={<Vanpricing/>}/>
                  <Route path='photos' element={<Vanphotos/>}/>
              </Route>
          </Route>

        <Route  path='reviews' element={<Hostreviews/>}/>
      </Route>
      <Route  element={<Notfound/>}/>


      {/* <Route 
      path='/:id' 
      element={<Piece/>}
      loader={loaderFunctionPiece}
      />

      <Route
      path="*" 
      element={<Notfound/>}
      /> */}
    </Route>
  )
)
function Routes() {
  
return (
<RouterProvider router={router}/> );
}


export default Routes;
