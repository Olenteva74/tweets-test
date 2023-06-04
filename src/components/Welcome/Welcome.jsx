import { FaArrowRight } from 'react-icons/fa';
import { WelcomeWrapper, Text, Title, LinkStyled } from './Welcome.styled';

export const Welcome = () => {
    return (
        <WelcomeWrapper>
            <Text>Welcom to</Text>
            <Title>tweets</Title>
            <LinkStyled to={"/tweets"}>
                Let's go!
                <FaArrowRight size="16"/>
            </LinkStyled>
        </WelcomeWrapper>
    )
}