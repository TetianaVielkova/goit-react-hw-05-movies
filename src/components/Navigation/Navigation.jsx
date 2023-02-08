import { Nav, MenuLink } from "./Navigation.styled";


const Navigation = ({children}) => {
    return (
        <>
            <header>
                <Nav>
                    <MenuLink to='/'>Home</MenuLink>
                    <MenuLink to='/movies'>Movies</MenuLink>
                </Nav>
            </header>
            {children}
        </>
    )
}

export default Navigation;