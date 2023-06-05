import styled from '@emotion/styled';
import { NavLink } from "react-router-dom";


export const MainContainer = styled.div`
background-color: #EBD8FF;
padding: 0 15px;
margin: 0 auto;
min-width: 320px;
@media screen and (min-width: 480px) {
        width: 480px;    
    }
@media screen and (min-width: 768px) {
        width: 768px;  
    }
@media screen and (min-width: 1200px) {
        width: 1200px;
        
    }
`;

export const Header = styled.header`
padding: 10px 20px;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
margin-bottom: 12px;
border-radius: 20px;
`;

export const Nav = styled.nav`
display: flex;
justify-content: space-around;
align-items: baseline;
`;

export const Link = styled(NavLink)`
cursor: pointer;
font-size: 20px;
line-height: 1.5;
font-weight; 500;
text-decoration: none;
font-family: 'Montserrat', sans-serif;
color: #373737;
&.active {
    color: #471CA9;
}
:hover,
:focus {
    color: #471CA9;
}   
`;