import { useSelector } from "react-redux";
import { selectError } from "store/selectors";
import { Error } from "./ErrorMessage.styled";

export const ErrorMessage = () => {
    const error = useSelector(selectError);
  return <Error>{error}</Error>;
}