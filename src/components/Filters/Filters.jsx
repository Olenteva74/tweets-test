import { useDispatch } from "react-redux";
import { setStatusFilter } from "store/filterSlice";
import { ButtonContainer } from "./Filters.styled";
import { FilterButton } from "./Filters.styled";

export const Filters = () => {
    const dispatch = useDispatch();
    return (
        <ButtonContainer>
            <FilterButton type="button" onClick={() => dispatch(setStatusFilter("all"))}>show all</FilterButton>
            <FilterButton type="button" onClick={() => dispatch(setStatusFilter("follow"))}>show follow</FilterButton>
            <FilterButton type="button" onClick={() => dispatch(setStatusFilter("following"))}>show followings</FilterButton>
        </ButtonContainer>
    )
}