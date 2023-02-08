import styled from 'styled-components';

export const Form = styled.form`
    margin: 20px 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    
`

export const Input = styled.input`
    border: 4px double #e3e3e3;
    padding: 15px;
    min-width: 450px;
    border-radius: 7px;
    font-size: 18px;
    box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0 0 0 2px rgb(255, 255, 255),
        0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
    font-weight: 500;
`

export const SubmitButton = styled.button`
    border: 4px double #e3e3e3;
    padding: 10px;
    margin-left: 15px;
    background-color: #fff;
    min-width: 200px;
    border-radius: 7px;
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

export const FormConteiner = styled.div`
    
    
`