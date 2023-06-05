import { useDispatch } from "react-redux";
import { setStatusFilter } from "store/filterSlice";
import { hideButtonLoadMore, showButtonLoadMore } from "store/userSlice";
import { ALL, FOLLOW, FOLLOWING } from "constants/constants";
import { ButtonContainer, FilterButton } from "./Filters.styled";

export const Filters = () => {
    const dispatch = useDispatch();

    const filterCards = (event) => {
        const status = event.target.dataset.status;  
        dispatch(setStatusFilter(status));
  
        if (status !== ALL) {
          dispatch(hideButtonLoadMore());
        } else {
          dispatch(showButtonLoadMore());
        }
      }

    return (
        <ButtonContainer>
            <FilterButton type="button" data-status={ALL} onClick={filterCards}>show all</FilterButton>
            <FilterButton type="button" data-status={FOLLOW} onClick={filterCards}>show follow</FilterButton>
            <FilterButton type="button" data-status={FOLLOWING} onClick={filterCards}>show followings</FilterButton>
        </ButtonContainer>
    )
}