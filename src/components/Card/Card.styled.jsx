import styled from '@emotion/styled';
import bg from 'images/bgimage.png';
import logo from 'images/logo.png';
import { getBgColorFollowButton } from 'utils/utils';

export const CardContainer = styled.section`
position: relative;
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-end;
width: 380px;
height: 460px;
background-image: url(${logo}), url(${bg}),
linear-gradient(114.99deg, #471CA9 -0.99%, #5736A3 54.28%, #4B2A99 78.99%);
background-repeat: no-repeat;
background-size: 76px 22px, 308px 168px, cover;
background-position: top 20px left 20px, top 26px left 36px, center;
box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
border-radius: 20px;

&::before {
    content: "";
    position: absolute;
    top: 210px;
    left: 0;
    width: 150px;
    height: 8px;
    background-color: #EBD8FF;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06), inset 0px -1.71846px 3.43693px #AE7BE3, inset 0px 3.43693px 2.5777px #FBF8FF;
}
&::after{
    content: "";
    position: absolute;
    top: 210px;
    right: 0;
    width: 150px;
    height: 8px;
    background-color: #EBD8FF;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06), inset 0px -1.71846px 3.43693px #AE7BE3, inset 0px 3.43693px 2.5777px #FBF8FF;
}
@media screen and (min-width: 768px and max-width: 1199px) {
    width: 350px;
}
`;

export const ImageThumb = styled.div`
box-sizing: border-box;
width:80px;
height: 80px;
z-index: 1;
display: flex;
justify-content: center;
border: 13px solid #EBD8FF;
border-radius: 100%;
box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06), inset 0px -2.19582px 4.39163px #AE7BE3, inset 0px 2px 3.29372px #FBF8FF;
overflow: hidden;
`;

export const Image = styled.img`
width: 54px;
object-fit: cover; 
object-position: top;
`;

export const TextWrapper = styled.div`
width: 380px;
padding-bottom: 36px;
padding-top: 26px;
`;

export const Button = styled.button`
display: block;
margin: 0 auto;
cursor: pointer;
width: 196px;
height: 50px;
padding: 14px 28px;
background-color: ${getBgColorFollowButton};
outline: none;
border-color: transparent;
border-radius: 10px;
text-transform: uppercase;
color: #373737;
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 1.22;
font-family: 'Montserrat', sans-serif;
`;

export const Info = styled.p`
text-align: center;
text-transform: uppercase;
color: #EBD8FF;
font-weight: 500;
font-size: 20px;
line-height: 1.2;
font-family: 'Montserrat', sans-serif;
:first-of-type {
    margin-bottom: 16px;
}
:last-of-type {
    margin-bottom: 26px;
}
`;