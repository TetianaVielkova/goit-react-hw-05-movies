import { NavLink } from "react-router-dom";


const Navigation = ({children}) => {
    return (
        <>
            <header>
                <nav>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/movies'>Movies</NavLink>
                </nav>
            </header>
            {children}
        </>
    )
}

export default Navigation;