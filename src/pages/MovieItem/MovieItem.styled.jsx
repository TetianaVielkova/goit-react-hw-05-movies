import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
    margin: 30px 45px;
`
export const LinkBack = styled(Link)`
    border: 4px double #e3e3e3;
    margin: 10px 0;
    display: inline-block;
    padding: 5px;
    background-color: #fff;
    color: #000;
    border-radius: 5px;
    font-family: 'Segoe UI';
    font-size: 24px;
    box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0 0 0 2px rgb(255, 255, 255),
        0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
    -webkit-transition: all 0.5s; 
    :hover,
    :focus{
        background-color: #e6e6e6;
        box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0 0 0 2px rgb(255, 255, 255),
        0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
    }
`

export const ContainerItem = styled.div`
    display: flex;
    margin-top: 20px;
    max-width: 1000px;
    box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0 0 0 2px rgb(255, 255, 255),
        0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
    border: 4px double #e3e3e3;
`
export const ContainerInfoItem = styled.div`
    margin: 20px 40px;
    max-width: 500px;
`

export const ImageItem = styled.img`
    border-radius: 5px;
    box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0 0 0 2px rgb(255, 255, 255),
        0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
`

export const NavLinkNewPage = styled(NavLink)`
border: 4px double #e3e3e3;
margin: 0px 20px 0 0 ;
display: inline-block;
padding: 5px 15px;
background-color: #fff;
color: #000;
border-radius: 5px;
font-family: 'Segoe UI';
font-size: 24px;
box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0 0 0 2px rgb(255, 255, 255),
    0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
-webkit-transition: all 0.5s; 
:hover,
:focus{
    background-color: #e6e6e6;
    box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0 0 0 2px rgb(255, 255, 255),
    0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
}
`

export const SubTitle = styled.h3`
font-family: 'Segoe UI';
font-size: 26px;
color: #000;
font-weight: 600;
`