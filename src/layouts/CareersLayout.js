import { Outlet } from "react-router-dom";
export default function CareerLayout(){
    return(
        <div className="careers-layout">
            <h2>Careers</h2>
            <p>Career page</p>

            <Outlet />
        </div>
    )
}