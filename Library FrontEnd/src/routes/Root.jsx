import { Outlet } from "react-router-dom";
import PrimaryHeader from "../componenets/PrimaryHeader";
import axios from "axios";
import { useDispatch } from "react-redux";
import { changeLoginState } from "../features/login/loginSlice";
import { useEffect } from "react";

function Root() {
  const dispatch = useDispatch()
  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_BASE_URL}/auth/verify`, { withCredentials: true }).then((response) => {
      console.log(response)
      dispatch(changeLoginState(true))
    } ).catch(()=>console.log("not logged in"))
  })
  return (
    <div className="grid grid-rows-layout-grid h-screen">
      <PrimaryHeader />
      <Outlet />
    </div>
  );
}
export default Root;
