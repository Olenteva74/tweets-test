import { useState } from "react";
import { useDispatch } from "react-redux";
import { CardContainer, ImageThumb, TextWrapper, Button, Info, Image } from "./Card.styled";
import url from 'images/user.png';
import { toggleStatus } from "store/userSlice";
import { getComma } from "utils/utils";




export const Card = ({avatar, tweets, followers, user, id, isFollowing}) => {
   const dispatch = useDispatch(); 

   const [counter, setCounter] = useState(isFollowing ? followers + 1 : followers);

   const toggle = () => {
        dispatch(toggleStatus(id));
        if (!isFollowing) {
            return setCounter(counter => counter + 1);
        }
        return setCounter(followers);
    };

    const numberWithComma = getComma(counter);

    return(
         <CardContainer>
           <ImageThumb>
             <Image src={avatar ? avatar : url} alt={user}/>
           </ImageThumb>
           <TextWrapper>
             <Info>{tweets} tweets</Info>
             <Info>{numberWithComma} followers</Info>
             <Button type="button" onClick={toggle} status={isFollowing}>
                {isFollowing ? <span>following</span> : <span>follow</span>}</Button>
            </TextWrapper>
        </CardContainer>
    )
}