import styled from "styled-components";

export const Wrapper = styled.div`
    background-color: white;
    justify-content: center;
    align-items: center;
    width:500px;
    border-radius: 10px;

    & input{
        margin-top: 15px;
        height: 25px;
        border: 10px;
        background-color: #e2dfdf;
        border: none;
        color: black;

    }
    `

export const Paragraph = styled.p`
    color:red;
    
    span{
       padding: 0px 0px 15px 15px;
    }`