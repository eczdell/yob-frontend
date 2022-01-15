import Navbar from './components/navbar/index.js'
import LandingPage from './components/landingPage/index'
import Profile from './components/Profile/index'
import Driver from './components/Driver/index'
import Counter from './components/Counter/index'
import Vehicle from './components/Vehicle/index'
import Route from './components/Route/index'
import Success from './components/Success/index'
import Confirmation from './components/Confirmation/index'
import Registration from './components/Registration/index'
import Settings from './components/Settings/index'
import Login from './components/Login/index'

import {
  BrowserRouter as Router,
  useRoutes,
} from "react-router-dom";
import Booking from './components/Booking/index.js'
import ManageBooking from './components/ManageBooking/index.js'


// const Component2 = () => {
//   return <h1>Driver 2</h1>;
// };


const Routing = () => {
  let routes = useRoutes([
    { path: "/", element: <LandingPage /> },
    { path: "/counter", element: <Counter /> },
    { path: "/book", element: <Booking /> },
    { path: "/driver", element: <Driver /> },
    { path: "/booking", element: <ManageBooking /> },
    { path: "/route", element: <Route /> },
    { path: "/vehicle", element: <Vehicle /> },
    { path: "/profile", element: <Profile /> },
    { path: "/success", element: <Success /> },
    { path: "/confirmation", element: <Confirmation /> },
    { path: "/profile", element: <Profile /> },
    { path: "/settings", element: <Settings /> },
    { path: "/sign-up", element: <Registration /> },
    { path: "/logout", element: <Login /> },
  ]);
  return routes;
};

function App() {

  return (
    <Router>
      <Navbar />
      <Routing />
    </Router>

  );
}

export default App;
