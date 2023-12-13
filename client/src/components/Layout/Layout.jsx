import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Main from "./Main";
import Drawer from "../Drawer/Drawer";

export default function Layout() {
    const { pathname } = useLocation();

    return (
        <div className="relative">
            {pathname != "/login" && pathname != "/register" && <Navbar />}
            <Drawer />
            <Main>
                <Outlet />
            </Main>
        </div>
    );
}
