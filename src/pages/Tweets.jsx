import { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { CardsList } from "components/CardsList";
import { LoadButton } from "components/LoadButton";
import { BackLink } from "components/BackLink";
import { Filters } from "components/Filters";
import { Loader } from "components/Loader";
import { ErrorMessage } from "components/ErrorMessage";
import { selectError, selectIsLoading, selectShowLoadButton, selectPage, selectUsers } from "store/selectors";
import { fetchUsers } from "store/operations";



const Tweets = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const showButton = useSelector(selectShowLoadButton);
  const users = useSelector(selectUsers);
  const page = useSelector(selectPage);

  useEffect(() => {
    if (users.length / 3 !== page) {
        dispatch(fetchUsers(page));
    }

  }, [page, dispatch, users]);

  useEffect(() => {
    document.getElementById('root').scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
  }, [isLoading]);


  if (error) {
    <div>
        <BackLink to="/"/>
        <ErrorMessage/>
    </div>
  }
    return (
        <div>
             <BackLink to="/"/>
             <Filters/>
             {isLoading && <Loader/>}
             <CardsList />
             {showButton && <LoadButton/>}
        </div>
    )
}

export default Tweets;