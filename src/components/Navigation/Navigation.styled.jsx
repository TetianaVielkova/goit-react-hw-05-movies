import styled from 'styled-components';
import { NavLink } from "react-router-dom";

export const Nav = styled.nav`
    border-bottom: 4px double #e3e3e3; 
    display: flex;
    box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0 0 0 2px rgb(255, 255, 255),
        0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
    
`

export const MenuLink = styled(NavLink)`
    display: flex;
    justify-content: center;
    margin: 20px;
    background-color: #fff;
    padding: 10px 35px;
    max-width: 250px;
    color: #000;
    border: 4px double #e3e3e3;
    border-radius: 7px;
    font-family: 'Segoe UI';
    font-size: 24px;
    text-align: center;
    -webkit-transition: all 0.5s; 

    &.active {
        background-color: #e6e6e6;
        box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0 0 0 2px rgb(255, 255, 255),
        0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
    }
`