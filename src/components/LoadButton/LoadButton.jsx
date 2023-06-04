import { useDispatch } from "react-redux";
import { LoadButtonWrapper, LoadMoreButton } from "./LoadButton.styled";
import { addPage } from "store/userSlice";

export const LoadButton = () => {
    const dispatch = useDispatch()
    return (
        <LoadButtonWrapper>
            <LoadMoreButton type="button" onClick={() => dispatch(addPage(1))}>Load more</LoadMoreButton>
        </LoadButtonWrapper>
    )
}