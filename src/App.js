import DashBoard from "./DashBoard";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import { Outlet } from "react-router-dom";





function App() {
  return (
    <div>
      
      <DashBoard/>
      <Outlet />
     </div>
  
);    
}

export default App;
