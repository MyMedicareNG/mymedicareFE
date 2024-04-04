import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const PatientProtectedRoute = () => {
  return (
    <Sidebar>
      <Outlet/>
    </Sidebar>
  )
}

export default PatientProtectedRoute

