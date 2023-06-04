import styled from '@emotion/styled';

export const ButtonContainer = styled.div`
display: flex;
margin-bottom: 20px;
`;

export const FilterButton = styled.button`
display: block;
margin: 0 auto;
cursor: pointer;
height: 50px;
padding: 14px 28px;
outline: none;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
border-color: transparent;
background-color: #EBD8FF;
border-radius: 10px;
text-transform: uppercase;
color: #373737;
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 1.22;
font-family: 'Montserrat', sans-serif;
:hover,
:focus {
    background-color: #5736A3;
    color: #EBD8FF;
}
`;