import styled from 'styled-components';

export const CastList = styled.ul`
    display: grid;
    max-width: calc(100vw - 64px);
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    grid-gap: 25px;
    margin-top: 20px;
    margin-bottom: 20px;
    padding: 0;
    list-style: none;
    margin-left: auto;
    margin-right: auto;
`

export const CastItem = styled.li`
    border-radius: 2px;
    box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0 0 0 2px rgb(255, 255, 255),
        0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
        border: 4px double #e3e3e3;
        
        transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
        &:hover {
        transform: scale(1.03);
        cursor: zoom-in;

`

export const CastImg = styled.img`
    max-width: 240px;
`

export const DivText = styled.div`
    margin: 15px;
    font-family: 'Segoe UI';
    font-size: 14px;
`