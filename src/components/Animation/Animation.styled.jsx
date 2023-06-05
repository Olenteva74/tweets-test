import styled from '@emotion/styled';


export const SteamContainer = styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
`;

export const Steam = styled.div`
position: absolute;
height: 150px;
width: 150px;
border-radius: 50%;
background-color: #5736A3;
margin-top: -75px;
margin-left: 30px;
z-index: 0;
opacity: 0;
:nth-of-type(odd){
animation: steam1 4s ease-out infinite;
@keyframes steam1 {
    0% {transform: translateY(0) translateX(0) scale(0.25); opacity: 0.2;}
    100% {transform: translateY(-200px) translateX(-20px) scale(1); opacity: 0;}
  }
}
:nth-of-type(even) {
animation: steam2 4s ease-out 0.5s infinite;
@keyframes steam2 {
    0% {transform: translateY(0) translateX(0) scale(0.25); opacity: 0.2;}
    100% {transform: translateY(-200px) translateX(20px) scale(1); opacity: 0;}
  }
}
`;

