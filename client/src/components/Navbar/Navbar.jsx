import logo from "../../../../public/img/logo.png";

import styles from "./navbar.module.css";

export default function Navbar({ showLinks }) {
    return (
        <header className={styles.mainHeader}>
            <a className={styles.logo} href="/">
                <img src={logo} alt="Concert Pass Logo" />
            </a>
            <nav className="">
                <ul className={styles.desktopIcons}>
                    {showLinks && (
                        <>
                            <li>
                                <a href="/myPerfil/<%= idUsuario %>">
                                    <i className="fa-regular fa-user"></i>
                                </a>
                            </li>
                            <li>
                                <a href="/misTickets">
                                    <i className="fa-solid fa-ticket"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="far fa-heart"></i>
                                </a>
                            </li>
                            <li>
                                <a href="/miCarrito">
                                    <i className="fas fa-shopping-cart"></i>
                                </a>
                            </li>
                        </>
                    )}
                </ul>
                <div className={styles.dropdown}>
                    <button className={styles.dropdownButton}>
                        <i className="fa-solid fa-bars"></i>
                    </button>
                    <div className={styles.dropdownContent}>
                        {showLinks && (
                            <>
                                <a href="#">
                                    <i className="fa-regular fa-user"></i> Mi
                                    cuenta
                                </a>
                                <a href="/misTickets">
                                    <i className="fa-solid fa-ticket"></i> Mis
                                    tickets
                                </a>
                                <a href="#">
                                    <i className="far fa-heart"></i> Mis
                                    favoritos
                                </a>
                                <a href="/miCarrito">
                                    <i className="fas fa-shopping-cart"></i>
                                    Carrito
                                </a>
                            </>
                        )}
                    </div>
                </div>
            </nav>
        </header>
    );
}
