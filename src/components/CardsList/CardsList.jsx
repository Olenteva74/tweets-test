import {  useSelector } from "react-redux";
import { Card } from "components/Card";
import { selectVisibleUsers} from "store/selectors";
import { ListContainer } from "./CardsList.styled";


export const CardsList = () => {

  const filteredUsers = useSelector(selectVisibleUsers);

  return ( 
    <ListContainer>
      {filteredUsers?.map((user) => {
        return (<li key={user.id} >
          <Card {...user}/>
        </li>) 
        })
      }
    </ListContainer>
  );
}