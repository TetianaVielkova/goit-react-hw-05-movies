import styled from 'styled-components';

export const Title = styled.h1`
    font-family: 'Segoe UI';
    font-size: 38px;
    text-align: center;
    font-weight: 400;

`

export const CardList = styled.ul`
    display: grid;
    max-width: calc(100vw - 48px);
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    grid-gap: 25px;
    margin-top: 20px;
    margin-bottom: 20px;
    padding: 0;
    list-style: none;
    margin-left: auto;
    margin-right: auto;
`

export const Card = styled.li`
    border-radius: 2px;
    border: 4px double #e3e3e3;
    box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0 0 0 2px rgb(255, 255, 255),
        0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
        
        transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
        &:hover {
        transform: scale(1.03);
        cursor: zoom-in;

`

export const Image = styled.img`
    width: 100%;
    height: 500px;
    object-fit: cover;
    
`

export const ImgTitle = styled.div`
    font-family: 'Segoe UI';
    font-size: 26px;
    min-height: 80px;
    padding: 10px;
    color: #000;
    font-weight: 600;

`