import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Main from "./Main";

export default function Layout() {
    const { pathname } = useLocation();

    return (
        <>
            {pathname != "/login" && pathname != "/register" && <Navbar />}

            <Main>
                <Outlet />
            </Main>
        </>
    );
}
