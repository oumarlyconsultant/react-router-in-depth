import { NavLink, Outlet } from "react-router-dom";

export default function HelpLayout() {
    return (
        <div className="help-layout">
        <h2>Website Help</h2>
        <p>Help me here!</p>

        <nav>
            <NavLink to="faq">View FAQ</NavLink>
            <NavLink to="contact">Contact Us</NavLink>
        </nav>
        <Outlet />
        </div>
        
    )
}