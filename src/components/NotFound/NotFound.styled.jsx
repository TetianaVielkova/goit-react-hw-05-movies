import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Conteiner = styled.div`
    margin: 0 auto; 
    max-width: 500px;
    padding: 50px;
`
export const Title = styled.h2`
    font-family: 'Segoe UI';
    font-size: 24px;
    text-align: center;
`
export const Image = styled.img`
    margin: 0 auto;
    display: block;
`
export const BtnBack = styled(Link)`
    display: flex;
    justify-content: center;
    margin: 20px auto;
    background-color: #548cd5;
    padding: 10px;
    max-width: 250px;
    color: #000;
    border: 4px double #e0ebf7;
    border-radius: 10px;
    font-family: 'Segoe UI';
    font-size: 24px;
    cursor: pointer;
    text-align: center;
    -webkit-transition: all 0.5s; 

    :hover {
    background-color: #99c2f7;
    box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0 0 0 2px rgb(255, 255, 255),
        0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
}
`