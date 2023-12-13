import { useLocation } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function Main({ children }) {
    const { pathname } = useLocation();

    return (
        <main
            className={`${
                pathname != "/login" && pathname != "/register"
                    ? "py-6 px-4 md:px-24 md:py-16"
                    : ""
            }`}
        >
            {children}
        </main>
    );
}
