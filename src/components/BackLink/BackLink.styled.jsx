import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
display: inline-flex;
align-items: center;
gap: 4px;
padding: 4px 0;
margin-bottom: 12px;
color:  #373737;
text-decoration: none;
font-weight: 500;
font-family: 'Montserrat', sans-serif;
position: relative;
transition: color 250ms linear;
::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    display: block;
    height: 2px;
    border-radius: 2px;
    background-color: #471CA9;
    width: 0%;
    transition: width 250ms linear;
}
:hover::after,
:focus::after {
    color: #471CA9;
    width: 100%;
}
:hover,
:focus {
    color: #471CA9;
}
`;