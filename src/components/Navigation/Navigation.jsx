import { NavLink, Outlet } from "react-router-dom";




const Navigation = () => {
    return (
        <>
            <header>
                <nav>
                    <NavLink to=''>Home</NavLink>
                    <NavLink to='movies'>Movies</NavLink>
                </nav>
            </header>
            <Outlet/>
        </>
    )
}

export default Navigation;