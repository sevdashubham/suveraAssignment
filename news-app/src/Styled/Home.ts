// #region Global Imports
import styled from "styled-components";
// #endregion Global Imports

export const Container = styled.div`
    background-color: ${({ theme }) => theme.colors.primary};

`;

export const Top = styled.div`
    margin: 25px 20px 20px 20px;
`;

export const TopBar = styled.div`
    height: 5px;
 background: rgba(255,255,255,1);
background: -moz-linear-gradient(-45deg, rgba(255,255,255,1) 0%, rgba(246,246,246,1) 22%, rgba(111,117,124,1) 71%, rgba(31,40,51,1) 100%);
background: -webkit-gradient(left top, right bottom, color-stop(0%, rgba(255,255,255,1)), color-stop(22%, rgba(246,246,246,1)), color-stop(71%, rgba(111,117,124,1)), color-stop(100%, rgba(31,40,51,1)));
background: -webkit-linear-gradient(-45deg, rgba(255,255,255,1) 0%, rgba(246,246,246,1) 22%, rgba(111,117,124,1) 71%, rgba(31,40,51,1) 100%);
background: -o-linear-gradient(-45deg, rgba(255,255,255,1) 0%, rgba(246,246,246,1) 22%, rgba(111,117,124,1) 71%, rgba(31,40,51,1) 100%);
background: -ms-linear-gradient(-45deg, rgba(255,255,255,1) 0%, rgba(246,246,246,1) 22%, rgba(111,117,124,1) 71%, rgba(31,40,51,1) 100%);
background: linear-gradient(135deg, rgba(255,255,255,1) 0%, rgba(246,246,246,1) 22%, rgba(111,117,124,1) 71%, rgba(31,40,51,1) 100%);
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#1f2833', GradientType=1 );
`;

export const Middle = styled.div`
    text-align: center;
    display: flex;
    flex: 1 1 100%;
    width: 100%;
    justify-content: flex-start;
`;

export const MiddleLeft = styled.div`
    display: flex;
    flex: 1 1 1%;
`;

export const MiddleLeftButtons = styled.div`
    background: ${({ theme }) => theme.colors.secondary};
    border-top-right-radius: 20px;
    font-family: Arial;
    font-weight: 700;
    font-size: 25px;
    color: #dedede;
    letter-spacing: 0;
    height: 100%;
    margin-top: 15px;
    padding: 40px 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    .button {
        cursor: pointer;
    }

    .active {
        color: #2c3e50;
    }
`;

export const MiddleRight = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1 1 100%;
`;

export const Apod = styled.div`
    display: flex;
    flex: 1 1 100%;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`;

export const ApodButton = styled.div`
    background: #f9da2e;
    border-radius: 5px;
    padding: 5px 10px;
    font-family: Arial;
    font-weight: 700;
    font-size: 25px;
    color: ${({ theme }) => theme.colors.primary};
    letter-spacing: 0;
`;

export const TopText = styled.div`
    font-size: 110px;
    font-family: Arial, Helvetica, sans-serif;
    color: #ffffff;
    margin-bottom: 10px;
`;
