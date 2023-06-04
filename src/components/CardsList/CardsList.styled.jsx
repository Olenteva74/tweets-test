import styled from '@emotion/styled';

export const ListContainer = styled.ul`
display: flex;
flex-wrap: wrap;
list-style: none;
margin-bottom: 12px;

@media screen and (min-width: 768px) {
    gap: 8px;
}
@media screen and (min-width: 1200px) {
    gap: 30px;
    
}
`;