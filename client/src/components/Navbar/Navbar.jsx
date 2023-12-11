import { useState } from "react";
import logo from "../../../../public/img/logo.png";

import styles from "./navbar.module.css";

export default function Navbar({ showLinks }) {
    const [showMobile, setShowMobile] = useState(false);

    return (
        <header className="">
            <nav className="bg-snow flex items-center justify-between px-6 py-4 md:py-4 md:px-12 relative">
                <a className="w-44 md:w-56" href="/">
                    <img src={logo} alt="Concert Pass Logo" />
                </a>
                <ul className="list-none md:flex gap-6 hidden">
                    {showLinks && (
                        <>
                            <li className="text-xl">
                                <a
                                    href="/myPerfil/<%= idUsuario %>"
                                    className=""
                                >
                                    <i className="fa-regular fa-user"></i>
                                </a>
                            </li>
                            <li className="text-xl">
                                <a href="/misTickets">
                                    <i className="fa-solid fa-ticket"></i>
                                </a>
                            </li>
                            <li className="text-xl">
                                <a href="#">
                                    <i className="far fa-heart"></i>
                                </a>
                            </li>
                            <li className="text-xl">
                                <a href="/miCarrito">
                                    <i className="fas fa-shopping-cart"></i>
                                </a>
                            </li>
                        </>
                    )}

                    {!showLinks && (
                        <>
                            <a
                                href="/login"
                                className="bg-white border border-palePurple w-full text-center py-2 px-4 rounded"
                            >
                                Ingresar
                            </a>

                            <a
                                href="/register"
                                className="bg-wisteria text-snow border w-full text-center py-2 px-4 rounded"
                            >
                                Registrese
                            </a>
                        </>
                    )}
                </ul>

                <button
                    className="block md:hidden text-xl cursor-pointer "
                    onClick={() => setShowMobile(!showMobile)}
                >
                    <i className="fa-solid fa-bars"></i>
                </button>
            </nav>
            {showMobile && (
                <div className="p-4 flex flex-col gap-4 bg-snow w-full items-center">
                    {showLinks && (
                        <>
                            <a href="#">
                                <i className="fa-regular fa-user"></i> Mi cuenta
                            </a>
                            <a href="/misTickets">
                                <i className="fa-solid fa-ticket"></i> Mis
                                tickets
                            </a>
                            <a href="#">
                                <i className="far fa-heart"></i> Mis favoritos
                            </a>
                            <a href="/miCarrito">
                                <i className="fas fa-shopping-cart"></i>
                                Carrito
                            </a>
                        </>
                    )}
                    {!showLinks && (
                        <>
                            <a
                                href="/login"
                                className="bg-white border border-palePurple w-full text-center p-2 rounded"
                            >
                                Ingresar
                            </a>

                            <a
                                href="/register"
                                className="bg-wisteria text-snow border w-full text-center p-2 rounded"
                            >
                                Crear cuenta
                            </a>
                        </>
                    )}
                </div>
            )}
        </header>
    );
}
