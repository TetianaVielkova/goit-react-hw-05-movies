import { NavLink } from "react-router-dom";

import { ToastContainer } from 'react-toastify';


export const Layout = ({children}) => {
    return (
        <>
            <header>
                <nav>
                    <ul>
                        <li><NavLink to=''>Home</NavLink></li>
                        <li><NavLink to='/movies'>Movies</NavLink></li>
                    </ul>
                </nav>
            </header>
            <main>
                <div>{children}</div>
            </main>
            <ToastContainer />
        </>
    )
}

