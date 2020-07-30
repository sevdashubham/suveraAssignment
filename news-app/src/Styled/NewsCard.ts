// #region Global Imports
import styled from "styled-components";
// #endregion Global Imports

export const Card = styled.div`
border-radius: 5%;
margin: 15px;
    min-width: 270px;
  height: 470px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.15);
  transition: all 0.3s linear 0s;
  overflow: hidden;
  position: relative;
  cursor: pointer;
   box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  &:hover {
   box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
     
  }
`;

export const Thumbnail = styled.div`
    position: relative;
  overflow: hidden;
  background: black;
  
  img {
 width: 160%;
 min-height: 250px;
  transition: all 0.3s;
  
   ${Card}:hover & {
      width: 170%;
  }
  }
  
  .date {
  border-radius: 15%;
  position: absolute;
  top: 20px;
  right: 20px;
  background: ${({ theme }) => theme.colors.secondary};
  padding-top: 10px;
  color: ${({ theme }) => theme.colors.primary};;
  font-weight: bold;
  height: 55px;
  width: 55px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 12px;
  text-transform: uppercase;
}
`;

export const Description = styled.div`
  color: #666666;
  font-size: 14px;
  line-height: 1.5em;
  height: 0;
  opacity: 1;
  transition: all 0.3s cubic-bezier(0.37, 0.75, 0.61, 1.05) 0s;
  overflow: hidden;
 ${Card}:hover & {
      height: 100px;
  }
`;

export const Content = styled.div`
   position: absolute;
  width: 100%;
  height: 178px;
  bottom: 0;
  background: #fff;
  padding: 30px 15px;
  transition: all 0.3s cubic-bezier(0.37, 0.75, 0.61, 1.05) 0s;
  
  h1 {
   font-size: 20px;
   color: ${({ theme }) => theme.colors.dark}
  }
  
  h2 {
    font-size: 14px;
     color: ${({ theme }) => theme.colors.text}
  }
  
  .sub-title {
    color: ${({ theme }) => theme.colors.text}
  }
  
  .category {
    border-top-right-radius: 10px;
     border-bottom-right-radius: 10px;
  position: absolute;
  top: -24px;
  left: 0;
  color: ${({ theme }) => theme.colors.primary};
  text-transform: uppercase;
  background: ${({ theme }) => theme.colors.secondary};
  padding: 10px 15px;
  font-weight: bold;
  }
  ${Card}:hover & {
     height: 278px;
  }
`;

export const Meta = styled.div`
position: absolute;
border-radius: 15%;
z-index: 20;
bottom: 0px;
right: 10px;
background: white;
font-size: 12px;
padding: 10px;
    margin: 10px 0 0;
 color: ${({ theme }) => theme.colors.text}
`;
