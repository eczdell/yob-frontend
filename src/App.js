import Navbar from './components/navbar/index.js'
import { render } from "react-dom";
import Page from './components/navbar/index'
import LandingPage from './components/landingPage/index'
import Help from './components/Help/index'
import Booking from './components/Booking/index'
import '@elastic/eui/dist/eui_theme_light.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";



const Component2 = () => {
  return <h1>Component 2</h1>;
};


const Routing = () => {
  let routes = useRoutes([
    { path: "/", element: <LandingPage /> },
    { path: "component2", element: <Component2 /> },
    { path: "/booking", element: <Booking /> },
    { path: "/help", element: <Help /> },
  ]);
  return routes;
};

function App() {

  return (
    <Router>
      <Navbar />
      <div style={{ margin: "25px 20px" }}>
        <Routing />
      </div>
    </Router>

  );
}

export default App;
