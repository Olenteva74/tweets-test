import styled from '@emotion/styled';

export const ListContainer = styled.ul`
display: flex;
justify-content: center;
flex-wrap: wrap;
list-style: none;
margin-bottom: 12px;
gap: 4px;

@media screen and (min-width: 768px) {
    gap: 8px;
    ustify-content: flex-start;
}
@media screen and (min-width: 1200px) {
    gap: 30px;
    
}
`;