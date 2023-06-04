import { HiArrowLeft } from "react-icons/hi";
import { StyledLink } from "./BackLink.styled";


export const BackLink = ({to}) => {
    return (
        <StyledLink to={to}>
        <HiArrowLeft size="16"/>
        Go back
        </StyledLink>
    )
}
